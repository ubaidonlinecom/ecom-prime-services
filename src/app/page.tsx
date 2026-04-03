import React from "react";
import { Hero } from "@/components/sections/Hero";
import { VPSPlans } from "@/components/sections/VPSPlans";
import { motion } from "framer-motion";
import { 
  Building2, 
  Files, 
  CreditCard, 
  ShoppingCart, 
  ShieldCheck, 
  Users, 
  Zap, 
  Award, 
  ChevronRight,
  TrendingUp,
  Cpu,
  Lock,
  Headphones
} from "lucide-react";
import Link from "next/link";
import { OTHER_SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* VPS Plans Section */}
      <VPSPlans />

      {/* Trust & Stats Section */}
      <section className="py-24 relative overflow-hidden bg-black/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center items-center">
            {[
              { label: "Active Clients", value: "500+", icon: Users },
              { label: "VPS Running", value: "1,200+", icon: Cpu },
              { label: "Support Uptime", value: "24/7/365", icon: Headphones },
              { label: "Success Rate", value: "99.99%", icon: TrendingUp },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-4xl font-extrabold text-white tracking-tighter">{stat.value}</h3>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative bg-background overflow-hidden px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">Your Growth Partner</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Why Global Brands Choose <span className="text-gradient">Ecom Prime</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              We provide more than just VPS. We offer the technical foundation and business support needed to navigate international markets with confidence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {[
                { title: "Enterprise Reliability", desc: "Top-tier hardware and automated infrastructure for maximum uptime.", icon: Award },
                { title: "Global Reach", desc: "Support for multi-country company formation and financial accounts.", icon: Zap },
                { title: "Strategic Edge", desc: "Custom-tailored solutions to give you a competitive market advantage.", icon: TrendingUp },
                { title: "Bulletproof Security", desc: "DDoS protection and advanced firewalls come standard.", icon: ShieldCheck },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                   <item.icon className="w-8 h-8 text-blue-500" />
                   <h4 className="text-white font-bold text-lg">{item.title}</h4>
                   <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="glass p-1 rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-gradient-to-br from-blue-600/20 to-indigo-600/20">
               {/* Using a placeholder for professional feel, user can add their images */}
               <div className="w-full aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
                  <div className="relative z-10 text-center p-12">
                     <Lock className="w-16 h-16 text-blue-500 mx-auto mb-6 opacity-80" />
                     <h3 className="text-2xl font-black text-white mb-3">Enterprise Grade Security</h3>
                     <p className="text-gray-400 text-sm max-w-xs mx-auto">Your business data and servers protected by state-of-the-art encryption and firewalls.</p>
                  </div>
               </div>
            </div>
            {/* Decors */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-600/10 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Other Services Preview */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 px-4 md:px-0">
             <div className="max-w-2xl">
               <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">Comprehensive Solutions</span>
               <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-2 leading-tight">More than just VPS</h2>
               <p className="text-gray-400 text-lg">We simplify the complexity of global business logistics.</p>
             </div>
             <Link href="/services" className="flex items-center gap-2 text-blue-500 font-bold tracking-wide hover:gap-4 transition-all">
                VIEW ALL SERVICES <ChevronRight size={20} />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
            {[
              { category: "Company Formation", icon: Building2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { category: "Business Setup", icon: Files, color: "text-blue-500", bg: "bg-blue-500/10" },
              { category: "Financial Support", icon: CreditCard, color: "text-amber-500", bg: "bg-amber-500/10" },
              { category: "E-commerce Solutions", icon: ShoppingCart, color: "text-indigo-500", bg: "bg-indigo-500/10" },
            ].map((item, idx) => (
              <Link key={idx} href="/services" className="glass p-10 group hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-8`}>
                   <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors uppercase tracking-wide">{item.category}</h3>
                <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">Strategic assistance for global business expansion and scale.</p>
                
                <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ChevronRight className="w-8 h-8 text-blue-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-40 bg-background relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent shadow-[inset_0_0_100px_rgba(0,0,0,1)]" />
         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-10">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">Ready to scale your business?</h2>
            <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
               Join 500+ global entrepreneurs who trust us for their technical and business infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <Link href="/contact" className="btn-primary w-full sm:w-auto px-12 py-5 text-lg">
                    Contact Us Today
                </Link>
                <Link href="/vps" className="glass px-12 py-5 text-lg font-bold text-white w-full sm:w-auto border border-white/10 hover:bg-white/5 transition-all">
                    View VPS Pricing
                </Link>
            </div>
         </div>
         
         {/* Background Circles */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      </section>
    </main>
  );
}
