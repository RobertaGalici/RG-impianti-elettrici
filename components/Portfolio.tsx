// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import casa_quadro1 from '../img/casa_quadro1.png';
// type Category = 'Tutti' | 'Civile' | 'Industriale' | 'Quadri elettrici';
// const projects = [{
//   id: 1,
//   title: 'Ristrutturazione impianto elettrico appartamento',
//   category: 'Civile',
//   description: 'Rifacimento completo con domotica integrata.',
//   image: casa_quadro1
// }, {
//   id: 2,
//   title: 'Impianto industriale capannone 500mq',
//   category: 'Industriale',
//   description: 'Illuminazione LED e forza motrice per macchinari.',
//   image: 'https://images.unsplash.com/photo-1565608444338-39596f89e31e?q=80&w=2070&auto=format&fit=crop'
// }, {
//   id: 3,
//   title: 'Quadro elettrico certificato',
//   category: 'Quadri elettrici',
//   description: 'Assemblaggio e cablaggio quadro generale uffici.',
//   image: 'https://images.unsplash.com/photo-1621905252507-b35a5f948638?q=80&w=2069&auto=format&fit=crop'
// }, {
//   id: 4,
//   title: 'Impianto domotico appartamento',
//   category: 'Civile',
//   description: 'Controllo luci, tapparelle e clima da remoto.',
//   image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop'
// }, {
//   id: 5,
//   title: 'Cabina elettrica stabilimento',
//   category: 'Industriale',
//   description: 'Manutenzione straordinaria cabina MT/BT.',
//   image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
// }, {
//   id: 6,
//   title: 'Rifacimento quadri condominio',
//   category: 'Quadri elettrici',
//   description: 'Messa a norma quadri contatori condominiali.',
//   image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop'
// }];
// const filters: Category[] = ['Tutti', 'Civile', 'Industriale', 'Quadri elettrici'];
// export function Portfolio() {
//   const [activeFilter, setActiveFilter] = useState<Category>('Tutti');
//   const filteredProjects = activeFilter === 'Tutti' ? projects : projects.filter(p => p.category === activeFilter);
//   return <section id="lavori" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
//             Lavori Eseguiti
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//             Una selezione dei nostri progetti recenti in ambito civile e
//             industriale.
//           </p>

//           {/* Filters */}
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
//                 {filter}
//               </button>)}
//           </div>
//         </div>

//         {/* Grid */}
//         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {filteredProjects.map(project => <motion.div layout initial={{
//             opacity: 0,
//             scale: 0.9
//           }} animate={{
//             opacity: 1,
//             scale: 1
//           }} exit={{
//             opacity: 0,
//             scale: 0.9
//           }} transition={{
//             duration: 0.3
//           }} key={project.id} className="group cursor-pointer">
//                 <div className="relative overflow-hidden rounded-xl shadow-md aspect-[4/3]">
//                   {typeof project.image === 'string' && project.image.startsWith('http') ? <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> : <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />} 
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-300" />
//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                     <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-600 rounded mb-2">
//                       {project.category}
//                     </span>
//                     <h3 className="text-lg font-bold mb-1">{project.title}</h3>
//                     <p className="text-sm text-gray-300 line-clamp-2">
//                       {project.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>)}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>;
// }