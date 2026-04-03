"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Shield, Zap, Globe, Cpu, Terminal, Check, ArrowRight, MessageCircle } from "lucide-react";
import { VPS_PLANS, WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function VPSPage() {
  return (
    <main className="pt-32 pb-20 bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* Intro Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-bold tracking-widest text-xs uppercase"
          >
            Infrastructure by Ecom Prime
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 leading-[1.1]"
          >
            Enterprise-Grade <span className="text-gradient">VPS Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            Experience lightning-fast performance with our SSD-powered virtual private servers. Perfect for high-frequency trading, web hosting, and resource-intensive applications.
          </motion.p>
        </div>
      </section>

      {/* Detailed Plans */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VPS_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className={cn(
                "glass p-10 flex flex-col relative group transition-all duration-300",
                plan.popular ? "border-blue-500/50 shadow-2xl shadow-blue-500/10" : "hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 py-1 px-4 bg-blue-600 rounded-bl-xl rounded-tr-2xl text-[10px] font-black text-white tracking-widest uppercase">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-4xl font-black text-white", plan.price === "Contact Us" && "text-xl")}>{plan.price}</span>
                  {plan.price !== "Contact Us" && <span className="text-gray-500 text-sm">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check size={18} className="text-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                className={cn(
                  "w-full py-4 px-6 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 group-hover:gap-3",
                  plan.popular 
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20" 
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/5"
                )}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-black/40 py-24 border-y border-white/5 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Under the Hood</h2>
             <p className="text-gray-500">Uncompromising hardware and software standards.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Pure NVMe Storage", desc: "Up to 10x faster than traditional SSDs for near-instant data access.", icon: Zap },
              { title: "KVM Virtualization", desc: "Dedicated resources and isolated kernels for maximum stability.", icon: Server },
              { title: "10Gbps Network", desc: "Ultra-low latency connections to global internet exchanges.", icon: Globe },
              { title: "Advanced Firewalls", desc: "Enterprise-grade protection against DDoS and targeted attacks.", icon: Shield },
              { title: "Full Root Access", desc: "Complete control over your environment with OS of your choice.", icon: Terminal },
              { title: "Global DC Locations", desc: "Strategically located data centers for optimal performance.", icon: Globe },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-500" />
                 </div>
                 <div>
                    <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
         <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
               <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Who is our VPS for?</h2>
               <div className="space-y-6">
                  {[
                    { title: "Forex & Stock Traders", desc: "Run your MT4/MT5 bots 24/7 with zero latency and consistent uptime." },
                    { title: "Devs & SaaS Owners", desc: "Securely host your applications with full control over the tech stack." },
                    { title: "Remote Work Teams", desc: "Provide high-speed remote desktops for your global workforce." },
                    { title: "E-commerce Brands", desc: "Handle traffic spikes on eBay, Amazon, or Shopify with ease." },
                  ].map((item, idx) => (
                    <div key={idx} className="glass p-6 hover:border-blue-500/30 transition-all group">
                       <h4 className="text-white font-bold mb-2 group-hover:text-blue-500 transition-colors">{item.title}</h4>
                       <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="flex-1 relative">
                <div className="glass aspect-square rounded-3xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 flex items-center justify-center p-12">
                   <div className="space-y-6 w-full opacity-60 font-mono text-xs">
                      <div className="text-blue-500">$ apt-get update && apt-get upgrade -y</div>
                      <div className="text-gray-500">Reading package lists... Done</div>
                      <div className="text-gray-500">Building dependency tree... Done</div>
                      <div className="text-green-500">Success: Instance provisioned in 42 seconds.</div>
                      <div className="text-white mt-12 text-center text-4xl animate-pulse">
                         <Terminal className="mx-auto w-20 h-20 opacity-20" />
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6">
         <div className="glass p-12 md:p-20 text-center relative overflow-hidden bg-gradient-to-tr from-blue-600/10 to-indigo-600/10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Need a Custom Setup?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
               We offer customized dedicated server resources and high-availability configurations for enterprise clients. Talk to our technical team today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <a href={WHATSAPP_LINK} className="btn-primary flex items-center gap-2">
                 <MessageCircle className="w-5 h-5" /> CHAT ON WHATSAPP
               </a>
            </div>
         </div>
      </section>
    </main>
  );
}
