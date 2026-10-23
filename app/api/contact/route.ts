import { NextResponse } from "next/server";
import { Resend } from "resend";

/* Le richieste dei due moduli del sito arrivano qui e vengono girate per
   email. Mittente e destinatario stanno fra le variabili d'ambiente:
   il mittente deve essere un indirizzo autorizzato dal servizio di invio,
   il destinatario è la casella che legge le richieste. Così si cambiano
   senza toccare il codice, e la chiave non sta mai in chiaro nel repo. */
const MITTENTE = process.env.MAIL_MITTENTE ?? "RG Impianti <onboarding@resend.dev>";
const DESTINATARIO = process.env.MAIL_DESTINATARIO ?? "lucagalici66@icloud.com";

/* I campi come appaiono nella mail, in quest'ordine. I due moduli non
   hanno gli stessi campi: qui ci sono quelli di entrambi e nella mail
   finisce solo ciò che è stato davvero compilato. */
const CAMPI: [string, string][] = [
  ["nome", "Nome"],
  ["azienda", "Azienda o ente"],
  ["ruolo", "Ruolo"],
  ["telefono", "Telefono"],
  ["email", "Email"],
  ["comune", "Comune"],
  ["tipo_intervento", "Richiesta"],
  ["messaggio", "Messaggio"],
];

export async function POST(req: Request) {
  const chiave = process.env.RESEND_API_KEY;
  if (!chiave) {
    return NextResponse.json(
      { errore: "Invio email non configurato." },
      { status: 503 }
    );
  }

  let dati: Record<string, unknown>;
  try {
    dati = await req.json();
  } catch {
    return NextResponse.json({ errore: "Richiesta non leggibile." }, { status: 400 });
  }

  const testo = (campo: string) =>
    typeof dati[campo] === "string" ? (dati[campo] as string).trim() : "";

  /* Campo esca: è nascosto, chi compila il modulo non lo vede nemmeno.
     Se arriva pieno è un robot: rispondiamo che va tutto bene e non
     spediamo niente, così non insiste. */
  if (testo("sito")) return NextResponse.json({ ok: true });

  const nome = testo("nome");
  const telefono = testo("telefono");
  const email = testo("email");

  if (!nome || !telefono || !email) {
    return NextResponse.json(
      { errore: "Mancano nome, telefono o email." },
      { status: 400 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) {
    return NextResponse.json({ errore: "Indirizzo email non valido." }, { status: 400 });
  }
  if (dati.privacy !== true) {
    return NextResponse.json(
      { errore: "Manca il consenso al trattamento dei dati." },
      { status: 400 }
    );
  }

  const righe = CAMPI.map(([campo, etichetta]) => [etichetta, testo(campo)] as const)
    .filter(([, valore]) => valore !== "")
    .map(([etichetta, valore]) => `${etichetta}: ${valore}`);

  /* Nell'oggetto si capisce subito chi ha scritto e da dove. */
  const provenienza = testo("azienda") || [nome, testo("comune")].filter(Boolean).join(", ");

  try {
    /* L'indirizzo di chi scrive va in «rispondi a»: non può stare nel
       mittente (la mail verrebbe scartata dai controlli antispoofing),
       ma così premendo Rispondi si scrive direttamente al cliente. */
    const invio = await new Resend(chiave).emails.send({
      from: MITTENTE,
      to: DESTINATARIO.split(",").map((indirizzo) => indirizzo.trim()),
      replyTo: email,
      subject: `Richiesta dal sito — ${provenienza}`,
      text: `${righe.join("\n")}\n\n— Inviata dal modulo del sito.`,
    });

    if (invio.error) {
      console.error("Invio non riuscito:", invio.error);
      return NextResponse.json({ errore: "Invio non riuscito." }, { status: 502 });
    }
  } catch (errore) {
    console.error("Servizio di invio non raggiungibile:", errore);
    return NextResponse.json(
      { errore: "Servizio di invio non raggiungibile." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
