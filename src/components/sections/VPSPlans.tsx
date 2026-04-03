"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { VPS_PLANS, WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function VPSPlans() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 w-full h-[600px] bg-blue-600/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold tracking-widest text-xs uppercase"
          >
            Flexible Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight"
          >
            Powerful <span className="text-gradient">VPS Hosting</span> Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            High-performance virtual servers designed to scale with your business. Choose a plan that fits your needs or contact us for a custom setup.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {VPS_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={cn(
                "glass p-8 flex flex-col relative group transition-all duration-300",
                plan.popular ? "border-blue-500/50 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500 ring-offset-0" : "hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 py-1 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-bl-xl rounded-tr-2xl text-[10px] font-black text-white tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-3xl font-black text-white", plan.price === "Contact Us" && "text-xl")}>{plan.price}</span>
                  {plan.price !== "Contact Us" && <span className="text-gray-500 text-xs">/month</span>}
                </div>
                {plan.note && <p className="text-blue-500/80 text-[10px] font-bold mt-2 uppercase tracking-wide">{plan.note}</p>}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check size={16} className="text-blue-500 shrink-0 mt-0.5" />
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
        
        <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm">All plans include: DDoS Protection, 24/7 Monitoring, Full Root Access, and Instant OS Deployment.</p>
        </div>
      </div>
    </section>
  );
}
