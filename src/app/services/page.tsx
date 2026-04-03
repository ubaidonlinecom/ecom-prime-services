"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Files, CreditCard, ShoppingCart, Check, MessageCircle, ChevronRight } from "lucide-react";
import { OTHER_SERVICES, WHATSAPP_LINK } from "@/lib/constants";

const ICON_MAP: Record<string, any> = {
  "Company Formation": Building2,
  "Business Setup Support": Files,
  "Financial Account Support": CreditCard,
  "E-commerce Solutions": ShoppingCart,
};

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 bg-background overflow-hidden">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-500 font-bold tracking-widest text-xs uppercase"
        >
          Comprehensive Solutions
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 leading-tight"
        >
          Our <span className="text-gradient">Core Services</span>
        </motion.h1>
        <motion.p
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
           From building your technical infrastructure with VPS to establishing your global business presence. We provide the end-to-end support you need.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {OTHER_SERVICES.map((category, catIdx) => {
          const Icon = ICON_MAP[category.category] || Building2;
          return (
            <div key={catIdx} className="space-y-12">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-white/5 shadow-2xl">
                     <Icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                     <h2 className="text-3xl font-black text-white">{category.category}</h2>
                     <p className="text-gray-500">Expert assistance for professional business growth.</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="glass p-8 hover:border-blue-500/30 transition-all duration-300 group flex flex-col justify-between"
                    >
                       <div>
                          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors uppercase tracking-wide">{item.name}</h4>
                          <p className="text-gray-500 text-sm mb-8 leading-relaxed">{item.description}</p>
                       </div>
                       
                       <a
                         href={WHATSAPP_LINK}
                         className="flex items-center gap-2 text-xs font-black text-blue-500 tracking-widest uppercase hover:gap-3 transition-all"
                       >
                          LEARN MORE <ChevronRight size={14} />
                       </a>
                    </motion.div>
                  ))}
               </div>
            </div>
          );
        })}
      </section>

      {/* Final Lead Gen section */}
      <section className="mt-40 max-w-7xl mx-auto px-6">
         <div className="glass p-12 md:p-20 bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need something else?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl">
               Our business support solutions are personalized. If you have unique requirements not listed here, get in touch and we'll build a custom package for you.
            </p>
            <a href={WHATSAPP_LINK} className="btn-primary flex items-center gap-3">
               <MessageCircle size={20} /> CHAT WITH AN EXPERT
            </a>
         </div>
      </section>
    </main>
  );
}
