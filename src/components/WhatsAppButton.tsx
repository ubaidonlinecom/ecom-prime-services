"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-4 rounded-full shadow-2xl glass transition-all group"
    >
      <div className="relative">
        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full bg-red-500 border-2 border-white ring-2 ring-red-500/50 animate-pulse" />
      </div>
      <span className="font-bold text-sm tracking-wide">CHAT WITH US</span>
    </motion.a>
  );
}
