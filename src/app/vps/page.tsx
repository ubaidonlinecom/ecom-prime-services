"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
            GLOBAL INFRASTRUCTURE POWERED VPS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 leading-[1.1]"
          >
            High-Performance <span className="text-gradient">VPS</span> <br /> 
            Built for Speed, Stability & Control
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            Get reliable, high-speed virtual servers designed for trading, development, and online business. 
            Deploy instantly and take full control of your environment with powerful performance and global connectivity.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-10"
          >
            <a href="#plans" className="btn-primary w-full sm:w-auto text-center">
              View Plans
            </a>
            <a href={WHATSAPP_LINK} className="flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full text-white font-semibold transition-all w-full sm:w-auto">
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Detailed Plans */}
      <section id="plans" className="max-w-5xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-4xl font-black text-white", plan.price === "Contact Us" && "text-xl")}>{plan.price}</span>
                  {plan.price !== "Contact Us" && <span className="text-gray-500 text-sm">/mo</span>}
                </div>
                {plan.note && <p className="text-blue-500/80 text-xs font-bold mt-2 uppercase tracking-wide">{plan.note}</p>}
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
             <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Powerful Infrastructure, Built for Performance</h2>
             <p className="text-gray-500">Experience high-speed, reliable VPS performance backed by advanced infrastructure and global connectivity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "High-Performance Processing", desc: "Run demanding applications smoothly with powerful processing designed for speed and stability.", icon: Cpu },
              { title: "Ultra-Fast NVMe Storage", desc: "Enjoy lightning-fast data access and improved performance with next-generation NVMe storage.", icon: Zap },
              { title: "Global Network Connectivity", desc: "Stay connected with high-speed network routing and low-latency performance across multiple regions.", icon: Globe },
              { title: "Full Root Access", desc: "Get complete control over your server environment and configure it exactly the way you need.", icon: Terminal },
              { title: "Instant Deployment", desc: "Launch your VPS within seconds and start working without delays or complex setup.", icon: Zap },
              { title: "Secure & Reliable Environment", desc: "Built with strong security layers and stable infrastructure to ensure consistent performance.", icon: Shield },
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
               <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">Who Is This VPS Perfect For?</h2>
                  <p className="text-gray-500 text-lg">Built to support a wide range of use cases — from trading and development to online business operations.</p>
               </div>
               <div className="space-y-6">
                  {[
                    { title: "Forex & Crypto Traders", desc: "Run your trading platforms 24/7 with low latency and uninterrupted performance for better execution." },
                    { title: "Developers & SaaS Builders", desc: "Deploy, test, and manage applications in a flexible environment with full control and scalability." },
                    { title: "E-commerce & Online Businesses", desc: "Power your stores, tools, and automation systems with a reliable and high-speed VPS setup." },
                    { title: "Remote Work & Automation", desc: "Access your virtual environment anytime, automate tasks, and manage workflows from anywhere." },
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

      {/* Guides + FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
         <div className="text-center mb-20 px-4">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Getting Started is Simple</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
               Everything you need to get up and running quickly — even if you're new to VPS.
            </p>
         </div>

         {/* Quick Guides */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "1. Connect to Your VPS", desc: "Learn how to access your server using Remote Desktop in just a few simple steps." },
              { title: "2. First-Time Setup", desc: "Basic setup instructions to get your VPS ready for your work environment." },
              { title: "3. Choose the Right Plan", desc: "Not sure which plan fits your needs? Get simple guidance based on your use case." },
            ].map((guide, idx) => (
              <div key={idx} className="glass p-8 hover:border-blue-500/30 transition-all group">
                 <h4 className="text-white font-bold text-lg mb-3 group-hover:text-blue-500 transition-colors uppercase tracking-wide">{guide.title}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">{guide.desc}</p>
                 <div className="mt-6 flex items-center gap-2 text-blue-500 text-xs font-bold tracking-widest uppercase cursor-pointer hover:gap-3 transition-all">
                    GET GUIDE <ArrowRight size={14} />
                 </div>
              </div>
            ))}
         </div>

         {/* FAQ */}
         <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-black text-white mb-10 text-center uppercase tracking-widest text-blue-500/80">Common Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
               {[
                 { q: "Is this a managed VPS?", a: "No, this is a self-managed VPS. You have full control over your server setup and configuration." },
                 { q: "How fast is delivery?", a: "Your VPS is typically ready within minutes after activation." },
                 { q: "Can I upgrade later?", a: "Yes, you can upgrade your server resources anytime based on your needs." },
                 { q: "Do you provide setup support?", a: "Basic guidance is available to help you get started, but full server management is not included." },
               ].map((faq, idx) => (
                 <div key={idx} className="space-y-3">
                    <h4 className="text-white font-bold flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                       {faq.q}
                    </h4>
                    <p className="text-gray-500 text-sm pl-4 leading-relaxed border-l border-white/5">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
         <div className="glass p-12 md:p-20 text-center relative overflow-hidden bg-gradient-to-tr from-blue-600/10 to-indigo-600/10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 text-gradient">Ready to Get Started?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
               Choose your plan and get your VPS up and running in minutes. Need help? Our team is here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <a href="#plans" className="btn-primary w-full sm:w-auto text-center px-10">
                 View Plans
               </a>
               <a href={WHATSAPP_LINK} className="flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full text-white font-semibold transition-all w-full sm:w-auto">
                 <MessageCircle className="w-5 h-5 shrink-0" /> Chat on WhatsApp
               </a>
            </div>
            <p className="text-gray-500 text-xs font-bold mt-12 uppercase tracking-[0.2em]">
               Fast setup • Secure environment • Reliable performance
            </p>
         </div>
      </section>

      {/* Policy Agreement */}
      <div className="max-w-5xl mx-auto px-6 pb-12 text-center">
         <p className="text-gray-600 text-[10px] leading-relaxed">
            By using our VPS services, you agree to our <Link href="/terms-of-service" className="text-blue-500/60 hover:text-blue-500 transition-colors underline decoration-blue-500/20">Terms of Service</Link> and <Link href="/acceptable-use-policy" className="text-blue-500/60 hover:text-blue-500 transition-colors underline decoration-blue-500/20">Acceptable Use Policy</Link>.
         </p>
      </div>
    </main>
  );
}
