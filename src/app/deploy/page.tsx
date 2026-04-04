import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Server, 
  Globe, 
  Cpu, 
  Zap, 
  Layers, 
  Calendar, 
  Terminal, 
  Plus, 
  Minus, 
  Ticket,
  CheckCircle2,
  ChevronRight,
  Monitor,
  Info,
  AlertCircle,
  X,
  ShieldCheck,
  ZapIcon,
  MousePointer2
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA STRUCTURES ---

const LOCATIONS = [
  { id: "us", city: "New York", country: "USA", flag: "🇺🇸", latency: "Low Latency" },
  { id: "uk", city: "London", country: "UK", flag: "🇬🇧", latency: "Global Hub" },
  { id: "de", city: "Frankfurt", country: "Germany", flag: "🇩🇪", latency: "Central EU" },
  { id: "sg", city: "Singapore", country: "Singapore", flag: "🇸🇬", latency: "Asia Core" },
  { id: "jp", city: "Tokyo", country: "Japan", flag: "🇯🇵", latency: "Fast Route" },
];

const OS_OPTIONS = [
  { id: "win19", name: "Windows Server 2019", version: "Standard Edition" },
  { id: "win16", name: "Windows Server 2016", version: "Standard Edition" },
  { id: "win12", name: "Windows Server 2012 R2", version: "Classic Edition" },
];

const BILLING_CYCLES = [
  { id: "mo", name: "Monthly", label: "Monthly Roll", discount: null },
  { id: "qu", name: "Quarterly", label: "3 Mo Cycle", discount: "5% Off" },
  { id: "se", name: "Semi-Annually", label: "6 Mo Cycle", discount: "10% Off" },
  { id: "an", name: "Annually", label: "Yearly Plan", discount: "20% Off" },
];

const PLANS = [
  { id: "starter", name: "Starter", cpu: "1 vCPU", ram: "2 GB", storage: "30 GB", tag: "Junior", prices: { mo: 12, qu: 34, se: 65, an: 120 } },
  { id: "basic", name: "Basic", cpu: "1 vCPU", ram: "4 GB", storage: "50 GB", tag: "Small Biz", prices: { mo: 18, qu: 50, se: 95, an: 180 } },
  { id: "plus", name: "Plus", cpu: "2 vCPU", ram: "4 GB", storage: "80 GB", tag: "Standard", prices: { mo: 24, qu: 68, se: 130, an: 240 } },
  { id: "pro", name: "Pro", cpu: "2 vCPU", ram: "8 GB", storage: "120 GB", tag: "Best Value", recommended: true, prices: { mo: 36, qu: 100, se: 190, an: 360 } },
  { id: "business", name: "Business", cpu: "4 vCPU", ram: "8 GB", storage: "160 GB", tag: "Professional", prices: { mo: 48, qu: 135, se: 250, an: 480 } },
  { id: "enterprise", name: "Enterprise", cpu: "4 vCPU", ram: "16 GB", storage: "240 GB", tag: "Agency", prices: { mo: 72, qu: 200, se: 380, an: 720 } },
  { id: "performance", name: "Performance", cpu: "8 vCPU", ram: "16 GB", storage: "320 GB", tag: "Power", prices: { mo: 96, qu: 270, se: 510, an: 960 } },
  { id: "extreme", name: "Extreme", cpu: "8 vCPU", ram: "32 GB", storage: "500 GB", tag: "Supreme", prices: { mo: 144, qu: 400, se: 760, an: 1440 } },
  { id: "elite", name: "Elite", cpu: "16 vCPU", ram: "64 GB", storage: "1000 GB", tag: "Ultimate", prices: { mo: 288, qu: 800, se: 1520, an: 2880 } },
];

const COUPONS: Record<string, number> = {
  "SAVE10": 0.10,
  "WELCOME15": 0.15,
  "LAUNCH20": 0.20,
};

export default function DeployPage() {
  // --- STATE MANAGEMENT ---
  const [selectedServerType, setSelectedServerType] = useState("standard");
  const [selectedLocation, setSelectedLocation] = useState("us");
  const [selectedOS, setSelectedOS] = useState("win19");
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [selectedBilling, setSelectedBilling] = useState("mo");
  const [quantity, setQuantity] = useState(1);
  const [serverName, setServerName] = useState("vps-node-alpha");
  
  // Coupon State
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponStatus, setCouponStatus] = useState<"none" | "success" | "error">("none");

  // --- CALCULATIONS ---
  const currentLoc = useMemo(() => LOCATIONS.find(l => l.id === selectedLocation), [selectedLocation]);
  const currentOS = useMemo(() => OS_OPTIONS.find(o => o.id === selectedOS), [selectedOS]);
  const currentPlan = useMemo(() => PLANS.find(p => p.id === selectedPlan), [selectedPlan]);
  const currentCycle = useMemo(() => BILLING_CYCLES.find(c => c.id === selectedBilling), [selectedBilling]);

  // Pricing Engine
  const unitPrice = currentPlan?.prices[selectedBilling as keyof typeof currentPlan.prices] || 0;
  const subtotal = unitPrice * quantity;
  const discountPercent = appliedCoupon ? (COUPONS[appliedCoupon] || 0) : 0;
  const discountAmount = subtotal * discountPercent;
  const finalTotal = subtotal - discountAmount;

  // Formatting
  const formatUSD = (val: number) => 
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(val);

  // Handlers
  const handleApplyCoupon = () => {
    const code = couponInput.toUpperCase();
    if (COUPONS[code]) {
      setAppliedCoupon(code);
      setCouponStatus("success");
    } else {
      setAppliedCoupon(null);
      setCouponStatus("error");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput("");
    setCouponStatus("none");
  };

  return (
    <main className="relative pt-32 pb-40 bg-background min-h-screen overflow-x-hidden w-full max-w-full font-sans selection:bg-blue-600/30 selection:text-white">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/[0.03] blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 -z-10 animate-pulse" />
      <div className="absolute top-2/3 left-0 w-[500px] h-[500px] bg-indigo-600/[0.03] blur-[120px] rounded-full -translate-x-1/2 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* REFINED HERO SECTION */}
        <section className="mb-20 text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black tracking-widest uppercase mb-2">
               <ZapIcon fill="currentColor" size={10} /> Instant Deployment Enabled
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4">
              Deploy Your <span className="text-gradient">Server</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              Configure and launch your high-performance environment with Enterprise-grade infrastructure.
            </p>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 space-y-24">
            
            {/* STEP 1. SERVER TYPE */}
            <section className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-[10px]">01</span> CONFIGURATION TYPE
                </h3>
                <p className="text-gray-500 text-xs font-semibold ml-9 tracking-wide">Select the infrastructure stack for your deployment.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedServerType("standard")}
                  className={cn(
                    "glass p-8 transition-all cursor-pointer relative group border shadow-2xl",
                    selectedServerType === "standard" ? "border-blue-500/60 bg-blue-500/[0.08] shadow-[0_0_40px_rgba(59,130,246,0.1)]" : "border-white/[0.03] hover:border-white/10 hover:bg-white/[0.02]"
                  )}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-600/20 transition-transform group-hover:rotate-6">
                      <Server className="w-7 h-7 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-lg tracking-tight">Standard VPS</h4>
                      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">Bare Metal Performance</p>
                    </div>
                  </div>
                  {selectedServerType === "standard" && (
                    <motion.div layoutId="selection-ring" className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl pointer-events-none" />
                  )}
                </motion.div>
              </div>
            </section>

            {/* STEP 2. SELECT LOCATION */}
            <section className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-[10px]">02</span> CLOUD REGION
                </h3>
                <p className="text-gray-500 text-xs font-semibold ml-9 tracking-wide">Choose the location nearest to your users for minimal latency.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {LOCATIONS.map((loc) => (
                  <motion.div 
                    key={loc.id}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={cn(
                      "glass p-6 border transition-all cursor-pointer text-center space-y-4 relative overflow-hidden",
                      selectedLocation === loc.id ? "border-blue-500/60 bg-blue-500/[0.08] shadow-lg shadow-blue-500/10" : "border-white/[0.03] hover:border-white/10"
                    )}
                  >
                    <span className="text-4xl block filter drop-shadow-xl saturate-150">{loc.flag}</span>
                    <div>
                      <h4 className="text-white font-black text-[13px] tracking-tight">{loc.city}</h4>
                      <p className="text-blue-500/60 text-[9px] font-black uppercase tracking-widest mt-1">{loc.latency}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* STEP 3. OPERATING SYSTEM */}
            <section className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-[10px]">03</span> SOFTWARE STACK
                </h3>
                <p className="text-gray-500 text-xs font-semibold ml-9 tracking-wide">Select your primary OS image. Automated provisioning included.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {OS_OPTIONS.map((os) => (
                  <motion.div 
                    key={os.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedOS(os.id)}
                    className={cn(
                      "glass p-6 border transition-all cursor-pointer flex flex-col gap-4 relative",
                      selectedOS === os.id ? "border-blue-500/60 bg-blue-500/[0.08]" : "border-white/[0.03] hover:border-white/10"
                    )}
                  >
                    <div className="flex items-center gap-3">
                       <Terminal className={cn("w-5 h-5", selectedOS === os.id ? "text-blue-500" : "text-gray-600")} />
                       <span className={cn("text-sm font-black", selectedOS === os.id ? "text-white" : "text-gray-500")}>
                         {os.name}
                       </span>
                    </div>
                    <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em]">{os.version}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* STEP 4. SERVER RESOURCES */}
            <section className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-[10px]">04</span> PERFORMANCE TEIR
                </h3>
                <p className="text-gray-500 text-xs font-semibold ml-9 tracking-wide">Scale your resources based on your workload intensity.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PLANS.map((plan) => (
                  <motion.div 
                    key={plan.id}
                    layout
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={cn(
                      "glass p-8 border transition-all cursor-pointer relative group flex flex-col",
                      selectedPlan === plan.id 
                        ? "border-blue-500/80 bg-blue-500/[0.12] ring-1 ring-blue-500/10 shadow-2xl shadow-blue-500/20" 
                        : "border-white/[0.03] hover:border-white/20"
                    )}
                  >
                    {plan.recommended && (
                      <div className="absolute top-0 right-0 py-1 px-4 bg-indigo-600 text-[9px] font-black text-white tracking-widest uppercase rounded-bl-xl shadow-lg ring-1 ring-white/10">
                        Best Value
                      </div>
                    )}
                    <div className="mb-6">
                       <p className="text-[9px] font-black text-blue-500/60 uppercase tracking-[0.3em] mb-2">{plan.tag}</p>
                       <h4 className="text-xl font-black text-white tracking-tight">{plan.name}</h4>
                    </div>
                    
                    <div className="space-y-4 mb-10 flex-grow">
                      {[
                        { label: "Core Allocation", value: plan.cpu, icon: Cpu },
                        { label: "Memory Buffer", value: plan.ram, icon: Layers },
                        { label: "NVMe Speed", value: plan.storage, icon: ZapIcon },
                      ].map((spec, i) => (
                        <div key={i} className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-gray-500 uppercase tracking-widest flex items-center gap-2">
                             <spec.icon size={11} className="text-white/20" /> {spec.label}
                          </span>
                          <span className="text-white tracking-tight">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-white/[0.03] mt-auto">
                        <p className="text-white font-black text-2xl tracking-tighter">
                          {formatUSD(plan.prices.mo)}<span className="text-xs font-normal text-gray-500"> /mo</span>
                        </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* STEP 5. BILLING CYCLE */}
            <section className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-[10px]">05</span> BILLING SCALE
                </h3>
                <p className="text-gray-500 text-xs font-semibold ml-9 tracking-wide">Commit to longer periods for deeper infrastructure discounts.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {BILLING_CYCLES.map((cycle) => (
                  <motion.div 
                    key={cycle.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedBilling(cycle.id)}
                    className={cn(
                      "glass p-6 text-center border transition-all cursor-pointer relative group",
                      selectedBilling === cycle.id ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/10" : "border-white/[0.03] hover:border-white/10"
                    )}
                  >
                    {cycle.discount && (
                      <div className="absolute -top-1 -right-1 py-1 px-2 bg-emerald-600 text-[8px] font-black text-white tracking-widest uppercase rounded-lg shadow-xl shadow-emerald-600/20 ring-1 ring-white/10">
                        {cycle.discount}
                      </div>
                    )}
                    <h5 className="text-gray-500 text-[10px] font-black mb-1 uppercase tracking-widest group-hover:text-gray-400 transition-colors">{cycle.label}</h5>
                    <p className="text-white font-black text-sm tracking-tight">{cycle.name}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR SUMMARY - PREMIUM ENHANCED */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="glass p-10 border-white/[0.05] space-y-10 bg-gradient-to-tr from-blue-600/[0.08] via-transparent to-transparent shadow-2xl relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/[0.03] blur-3xl rounded-full -z-10" />
              
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white tracking-tighter">Order Hub</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Finalizing configuration</p>
              </div>
              
              <div className="space-y-8">
                {/* Visual Summary Feed */}
                <div className="space-y-4 pb-8 border-b border-white/[0.03]">
                   {[
                     { label: "Core", value: "Standard VPS Stack", icon: ShieldCheck },
                     { label: "Zone", value: `${currentLoc?.city}, ${currentLoc?.country}`, icon: Globe },
                     { label: "Plan", value: `${currentPlan?.name} Tier`, icon: ZapIcon },
                     { label: "Nodes", value: `${quantity} Active Instance(s)`, icon: MousePointer2 },
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-gray-500 uppercase tracking-widest flex items-center gap-3">
                           <item.icon size={14} className="text-blue-500/50" /> {item.label}
                        </span>
                        <span className="text-white text-right ml-4">{item.value}</span>
                     </div>
                   ))}
                </div>

                {/* Identity & Scale */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">Instance Identifier</label>
                    <input 
                      type="text" 
                      value={serverName}
                      onChange={(e) => setServerName(e.target.value)}
                      placeholder="vps-node-alpha"
                      className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl px-5 py-4 text-white text-sm font-semibold focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-700"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">Cluster Scale</label>
                    <div className="flex items-center gap-4 bg-white/[0.02] p-1.5 rounded-2xl border border-white/[0.03]">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 rounded-xl border border-white/[0.05] flex items-center justify-center hover:bg-white/[0.05] text-white transition-all active:scale-95">
                        <Minus size={18} />
                      </button>
                      <span className="text-white font-black text-2xl px-2 flex-grow text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/20 active:scale-95 transition-all">
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Promo Engine */}
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">Redeem Promo</label>
                   <div className="flex gap-2">
                     <div className="relative flex-grow">
                        <Ticket className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input 
                          type="text" 
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Promo code"
                          className={cn(
                            "w-full bg-white/[0.03] border rounded-xl pl-12 pr-4 py-4 text-white text-sm focus:outline-none transition-all font-semibold uppercase tracking-widest placeholder:normal-case placeholder:tracking-normal",
                            couponStatus === "success" ? "border-emerald-500/50 text-emerald-400" : couponStatus === "error" ? "border-red-500/50" : "border-white/[0.05] focus:border-blue-500"
                          )}
                          disabled={couponStatus === "success"}
                        />
                     </div>
                     {couponStatus === "success" ? (
                        <button onClick={removeCoupon} className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl hover:bg-red-500/20 transition-all">
                           <X size={20} />
                        </button>
                     ) : (
                        <button onClick={handleApplyCoupon} className="px-6 rounded-xl border border-blue-500/30 text-blue-500 hover:bg-blue-500/5 font-black text-[10px] uppercase tracking-widest transition-all">
                            Apply
                        </button>
                     )}
                   </div>
                   <AnimatePresence>
                      {couponStatus === "success" && (
                         <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-emerald-500 font-bold text-[9px] uppercase tracking-[0.2em] pl-1">
                            <CheckCircle2 size={12} /> Successfully Applied Discount
                         </motion.div>
                      )}
                      {couponStatus === "error" && (
                         <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-500 font-bold text-[9px] uppercase tracking-[0.2em] pl-1">
                            <AlertCircle size={12} /> Promotion Code Invalid
                         </motion.div>
                      )}
                   </AnimatePresence>
                </div>

                {/* FINANCIALS & CONVERSION */}
                <div className="pt-10 border-t border-white/[0.05] space-y-6">
                   <div className="space-y-4">
                      <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.15em] text-gray-500">
                        <span>Cluster Value</span>
                        <span className="text-white">{formatUSD(subtotal)}</span>
                      </div>
                      <AnimatePresence>
                        {discountAmount > 0 && (
                           <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.15em] text-emerald-500">
                              <span>Benefit Activation</span>
                              <span>-{formatUSD(discountAmount)}</span>
                           </motion.div>
                        )}
                      </AnimatePresence>
                   </div>

                   <div className="pt-2">
                     <div className="flex items-center justify-between mb-8">
                       <div className="space-y-1">
                          <span className="text-white font-black text-xs uppercase tracking-[0.3em]">Total Charge</span>
                          <p className="text-[9px] text-gray-600 font-bold italic tracking-wide">All taxes included.</p>
                       </div>
                       <motion.span 
                        key={finalTotal}
                        initial={{ opacity: 0.5, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-blue-500 font-black text-5xl tracking-tighter"
                       >
                        {formatUSD(finalTotal)}
                       </motion.span>
                     </div>
                     
                     <button className="btn-primary w-full flex items-center justify-center gap-4 py-6 text-xl shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-blue-500/50 group">
                       Launch Instance 
                       <ChevronRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
                     </button>
                   </div>

                   <div className="pt-4 flex flex-col items-center gap-4">
                      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05]">
                         <ShieldCheck className="w-4 h-4 text-emerald-500" />
                         <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">End-to-End Encryption Secured</span>
                      </div>
                      <p className="text-[10px] text-gray-700 italic text-center leading-relaxed">
                        Deployment will commence immediately upon confirmation. Average provisioning time: 45 seconds.
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
