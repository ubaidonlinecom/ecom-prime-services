"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Globe, Users, Award, ShieldCheck, Heart, Sparkles, Building2 } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 bg-background overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-8 leading-tight">
            Building the <span className="text-gradient">Future</span> of Global Business
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
            At {SITE_NAME}, we believe that geographical boundaries should never limit your entrepreneurial potential. Our mission is to provide the infrastructure and expertise that empowers businesses to scale internationally.
          </p>
          <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
             <div>
                <h3 className="text-4xl font-black text-white mb-2">2018</h3>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Founded</p>
             </div>
             <div>
                <h3 className="text-4xl font-black text-white mb-2">500+</h3>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Clients Worldwide</p>
             </div>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative"
        >
           <div className="glass aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-indigo-600/10 flex items-center justify-center p-12">
              <div className="text-center space-y-8">
                 <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto border border-blue-500/20 shadow-2xl">
                    <Globe className="w-12 h-12 text-blue-500 animate-pulse" />
                 </div>
                 <h3 className="text-2xl font-black text-white">Connecting the World through Infrastructure</h3>
                 <p className="text-gray-500 text-sm max-w-xs mx-auto">From virtual private servers to legal company registration, we are your all-in-one business partner.</p>
              </div>
           </div>
           {/* Abstract Decors */}
           <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-black/50 py-32 border-y border-white/5 mb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-24 max-w-xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Our Core Values</h2>
              <p className="text-gray-500">The principles that guide every decision we make.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: "Uncompromising Reliability", desc: "Our infrastructure is built for maximum uptime and stability, giving you peace of mind.", icon: ShieldCheck },
               { title: "Relentless Innovation", desc: "We constantly update our hardware and services to stay ahead of the digital curve.", icon: Sparkles },
               { title: "Client Success First", desc: "Your growth is our growth. We provide personalized support for every client.", icon: Heart },
             ].map((value, idx) => (
               <div key={idx} className="glass p-10 flex flex-col gap-6 group hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                     <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Team/Philosophy */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center items-center flex flex-col pt-12">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-10"
         >
            <div className="w-20 h-20 rounded-full bg-blue-600/10 flex items-center justify-center mx-auto mb-10">
               <Users className="w-10 h-10 text-blue-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Expert Support at Every Step</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
               Our team consists of network engineers, legal experts, and business consultants who are passionate about scaling brands. We don't just provide a service; we provide a partnership.
            </p>
         </motion.div>
      </section>
    </main>
  );
}
