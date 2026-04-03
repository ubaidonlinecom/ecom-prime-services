import React from "react";
import Link from "next/link";
import { Server, Mail, Phone, MapPin, Globe, MessageSquare, Share2 } from "lucide-react";
import { SITE_NAME, WHATSAPP_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Server className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">{SITE_NAME}</span>
            </Link>
            <p className="text-gray-500 leading-relaxed max-w-xs text-sm">
              Providing premium VPS solutions and expert business services to help your brand grow globally.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, MessageSquare, Mail, Share2].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 flex items-center justify-center rounded-full glass-hover glass bg-white/5 text-gray-400 hover:text-blue-500 transition-colors">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'VPS Solutions', 'Other Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().split(' ')[0]}`} className="text-gray-500 hover:text-blue-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['High-Performance VPS', 'Company Formation', 'Business Setup', 'Financial Management', 'E-commerce Solutions'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>support@ecomprime.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>123 Global Business Hub, City View, USA</span>
              </li>
            </ul>
            <Link href={WHATSAPP_LINK} className="inline-block mt-8 text-blue-500 hover:text-blue-400 font-semibold transition-colors text-sm">
              Live Chat Support →
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
            <Link href="/acceptable-use-policy" className="hover:text-blue-500 transition-colors">Acceptable Use Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
