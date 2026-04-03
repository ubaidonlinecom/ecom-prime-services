"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Zap, Shield, Globe, Terminal } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 animate-shimmer bg-[length:200%_100%]">
            🚀 Next-Gen VPS Hosting
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Unleash the Power of <span className="text-gradient">Premium VPS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
            High-performance virtual servers tailored for trading, hosting, and global enterprise growth. Secure, scalable, and lightning-fast.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a href="/vps" className="btn-primary w-full sm:w-auto text-center">
              Explore VPS Plans
            </a>
            <a href={WHATSAPP_LINK} className="flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full text-white font-semibold transition-all w-full sm:w-auto">
              Get Custom Quote
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-white/5">
            {[
              { label: "SSD/NVMe", icon: Zap },
              { label: "99.9% Uptime", icon: Globe },
              { label: "Full Root", icon: Terminal },
              { label: "24/7 Support", icon: Shield },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <stat.icon className="w-5 h-5 text-blue-500" />
                <span className="text-xs font-bold text-gray-300 tracking-wider uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Glass Card for Visual Representation of a VPS */}
          <div className="relative z-10 glass p-8 shadow-2xl space-y-6 max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-700 bg-gradient-to-br from-white/5 to-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs font-mono text-blue-500 tracking-tighter">instance-vps-01.local</span>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center text-gray-400">
                <span>CPU Usage:</span>
                <span className="text-blue-400">2.4%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: "0%" }}
                   animate={{ width: "24%" }}
                   transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                   className="h-full bg-blue-500" 
                />
              </div>

              <div className="flex justify-between items-center text-gray-400">
                <span>Memory:</span>
                <span className="text-green-400">4.1GB / 8GB</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: "0%" }}
                   animate={{ width: "51.25%" }}
                   transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                   className="h-full bg-green-500" 
                />
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center animate-pulse">
                  <Server className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500">SYSTEM STATUS</span>
                  <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">Operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-12 -right-8 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center -rotate-12 shadow-xl shadow-blue-500/30"
          >
            <Shield className="text-white w-8 h-8" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-8 -left-12 w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center rotate-12 shadow-xl shadow-indigo-500/30"
          >
            <Zap className="text-white w-10 h-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
