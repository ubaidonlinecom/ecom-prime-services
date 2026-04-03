"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Globe, ChevronRight } from "lucide-react";
import { SITE_NAME, WHATSAPP_LINK } from "@/lib/constants";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <main className="pt-32 pb-20 bg-background overflow-hidden font-sans">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-500 font-bold tracking-widest text-xs uppercase"
        >
          Get In Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 leading-tight"
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Whether you need a custom VPS setup or global business assistance, our team is ready to help you scale.
        </motion.p>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Info Cards */}
        <div className="space-y-8">
          <div className="glass p-10 hover:border-blue-500/30 transition-all group">
            <div className="flex gap-6 items-start">
               <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center shrink-0 border border-white/5">
                  <MessageCircle className="w-8 h-8 text-blue-500" />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-white mb-2">Live Chat Support</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">Response time usually within 15 minutes. Best for sales and urgent technical queries.</p>
                  <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-blue-500 font-bold tracking-widest text-xs uppercase group-hover:gap-3 transition-all">
                      CHAT NOW ON WHATSAPP <ChevronRight size={14} />
                  </a>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Email Support", desc: "support@ecomprime.com", icon: Mail },
              { title: "Phone Enquiries", desc: "+1 (234) 567-890", icon: Phone },
              { title: "Global Hub", desc: "123 Business City View, USA", icon: MapPin },
              { title: "Availability", desc: "24/7 technical monitoring", icon: Globe },
            ].map((item, idx) => (
              <div key={idx} className="glass p-8 flex flex-col gap-4">
                 <item.icon className="w-6 h-6 text-blue-500" />
                 <h4 className="text-white font-bold text-lg">{item.title}</h4>
                 <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass p-10 md:p-14 relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-2xl">
          <h3 className="text-3xl font-black text-white mb-10">Send a Message</h3>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Interest</label>
               <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option className="bg-gray-900">VPS Hosting Plans</option>
                  <option className="bg-gray-900">Company Formation</option>
                  <option className="bg-gray-900">Financial Accounts</option>
                  <option className="bg-gray-900">Other Enquiries</option>
               </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Message</label>
              <textarea 
                required
                rows={5}
                placeholder="How can we help you scale your business?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button 
               type="submit" 
               disabled={formStatus !== "idle"}
               className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 relative overflow-hidden"
            >
              {formStatus === "idle" && <><Send size={20} /> SEND MESSAGE</>}
              {formStatus === "sending" && <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {formStatus === "sent" && "MESSAGE SENT SUCCESSFULLLY!"}
              
              {formStatus === "sent" && (
                 <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="absolute inset-0 bg-green-500 flex items-center justify-center gap-2 font-black"
                 >
                    SAVED! <Send size={20} />
                 </motion.div>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Map/Location abstract section */}
      <section className="mt-32 max-w-7xl mx-auto px-6 mb-20 overflow-hidden relative group">
          <div className="w-full h-96 glass bg-gradient-to-br from-blue-600/10 to-transparent flex items-center justify-center relative overflow-hidden rounded-[3rem]">
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-74.006,40.7128,10,0/1200x600')] bg-cover bg-center opacity-30 grayscale saturate-50 group-hover:scale-105 transition-transform duration-1000" />
              <div className="relative z-10 text-center space-y-4">
                 <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/50">
                    <MapPin className="text-white w-8 h-8" />
                 </div>
                 <h3 className="text-3xl font-black text-white">Visit our Global Headquarter</h3>
                 <p className="text-gray-400">Collaborating with businesses across 6 continents.</p>
              </div>
          </div>
      </section>
    </main>
  );
}
