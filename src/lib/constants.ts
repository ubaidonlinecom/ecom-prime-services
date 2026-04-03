export const SITE_NAME = "ECOM PRIME SERVICES";
export const WHATSAPP_NUMBER = "+1234567890"; // User should replace this
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

export const VPS_PLANS = [
  {
    name: "Basic",
    price: "$19.99",
    features: ["2 vCPU Cores", "4GB RAM", "80GB SSD Storage", "Unmetered Bandwidth", "1Gbps Port Speed", "Full Root Access"],
    popular: false,
    cta: "Order via WhatsApp",
  },
  {
    name: "Standard",
    price: "$39.99",
    features: ["4 vCPU Cores", "8GB RAM", "160GB SSD Storage", "Unmetered Bandwidth", "1Gbps Port Speed", "Full Root Access"],
    popular: true,
    cta: "Order via WhatsApp",
  },
  {
    name: "Premium",
    price: "$79.99",
    features: ["8 vCPU Cores", "16GB RAM", "320GB NVMe Storage", "Unmetered Bandwidth", "10Gbps Port Speed", "Full Root Access"],
    popular: false,
    cta: "Order via WhatsApp",
  },
  {
    name: "Custom",
    price: "Contact Us",
    features: ["Up to 32 Cores", "Up to 128GB RAM", "Custom NVMe Storage", "High-Performance Network", "Dedicated Support", "Enterprise SLAs"],
    popular: false,
    cta: "Get Custom VPS",
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
