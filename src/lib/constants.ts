export const SITE_NAME = "ECOM PRIME SERVICES";
export const WHATSAPP_NUMBER = "+1234567890"; // User should replace this
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

export const VPS_PLANS = [
  {
    name: "Starter",
    price: "$12",
    features: ["1 vCPU Core", "2 GB RAM", "30 GB NVMe Storage", "High-Speed Network", "Full Root Access", "Instant Setup"],
    note: "Best for beginners & light usage",
    popular: false,
    cta: "Order via WhatsApp",
  },
  {
    name: "Pro",
    price: "$24",
    features: ["2 vCPU Cores", "4 GB RAM", "50 GB NVMe Storage", "High-Speed Network", "Full Root Access", "Instant Setup"],
    note: "Perfect for trading & business use",
    popular: true,
    cta: "Order via WhatsApp",
  },
  {
    name: "Elite",
    price: "$48",
    features: ["4 vCPU Cores", "8 GB RAM", "100 GB NVMe Storage", "High-Speed Network", "Full Root Access", "Instant Setup"],
    note: "Built for performance & heavy workloads",
    popular: false,
    cta: "Order via WhatsApp",
  },
];

export const OTHER_SERVICES = [
  {
    category: "Company Formation",
    items: [
      { name: "Texas LLC", description: "Standard LLC registration in Texas." },
      { name: "Florida LLC", description: "Business registration in Florida." },
      { name: "Wyoming LLC", description: "Low-tax business setup in Wyoming." },
      { name: "UK LTD", description: "Limited company formation in the UK." },
    ],
  },
  {
    category: "Business Setup Support",
    items: [
      { name: "EIN", description: "Employer Identification Number registration." },
      { name: "ITIN", description: "Individual Taxpayer Identification Number." },
      { name: "BOI Filing", description: "Beneficial Ownership Information reporting." },
    ],
  },
  {
    category: "Financial Account Support",
    items: [
      { name: "Wise Business", description: "Setup and verification of Wise accounts." },
      { name: "Payoneer Support", description: "Account assistance for Payoneer." },
      { name: "Mercury Setup", description: "Business banking assistance." },
      { name: "Airwallex Setup", description: "Financial platform account creation." },
    ],
  },
  {
    category: "E-commerce Solutions",
    items: [
      { name: "eBay Accounts", description: "High-limit eBay seller accounts." },
      { name: "Amazon Accounts", description: "Verified Amazon seller central setups." },
      { name: "Stripe Accounts", description: "International payment gateway setup." },
    ],
  },
];
