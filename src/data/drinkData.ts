export interface DrinkVariant {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  themeColor: string;
}
 
export interface BrandConfig {
  companyName: string;
  tagline: string;
  mode: "dark";
  socialLinks: {
    instagram: string;
    linkedin: string;
    github: string;
    gmail: string;
  };
  portfolioUrl: string;
  footerCopyright: string;
}

export const drinkVariants: DrinkVariant[] = [
  {
    name: "Cherry",
    subtitle: "Soda",
    description:
      "A modern take on a classic soda with a perfect blend of sweet and tart, full of nostalgic flavor.",
    image: "/cherry_sodacan.webp",
    themeColor: "#E63946",
  },
  {
    name: "Grape",
    subtitle: "Soda",
    description:
      "A modern functional soda brand inspired by classic flavors but made with better ingredients.",
    image: "/grape_sodacan.webp",
    themeColor: "#7B2D8E",
  },
  {
    name: "Lemon",
    subtitle: "Ginger Soda",
    description:
      "Bright and refreshing citrus soda with natural lemon spark and crisp bubbles.",
    image: "/lemon_sodacan.webp",
    themeColor: "#F4D03F",
  },
];

export const brandConfig: BrandConfig = {
  companyName: "Olipop",
  tagline: "A new kind of soda",
  mode: "dark",
  socialLinks: {
    instagram: "https://instagram.com/editsbyfaraz",
    linkedin: "https://www.linkedin.com/in/faraz-sualeh/",
    github: "https://github.com/farazsualeh",
    gmail: "mailto:farazsualeh75@gmail.com",
  },
  portfolioUrl: "https://faraz-sualeh-portfolio.vercel.app/",
  footerCopyright: "© 2026 All rights reserved by ",
};

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const ingredients = [
  {
    name: "Prebiotics",
    benefit: "Supports digestive health with natural plant-based fibers",
    icon: "🌿",
  },
  {
    name: "Botanicals",
    benefit: "Carefully selected herbs for authentic flavor depth",
    icon: "🌸",
  },
  {
    name: "Plant Fiber",
    benefit: "9g of fiber per can to keep you feeling your best",
    icon: "🌾",
  },
  {
    name: "Natural Flavors",
    benefit: "Real fruit extracts and natural essences, zero artificial colors",
    icon: "🍒",
  },
  {
    name: "Low Sugar",
    benefit: "Only 2-5g of sugar per can, 90% less than conventional soda",
    icon: "✨",
  },
  {
    name: "No Artificial Sweeteners",
    benefit: "Sweetened with stevia and cassava root syrup",
    icon: "🍃",
  },
];

export const nutritionFacts = {
  servingSize: "12 fl oz (355mL)",
  calories: 45,
  totalFat: "0g",
  sodium: "10mg",
  totalCarbs: "16g",
  dietaryFiber: "9g",
  totalSugars: "2g",
  addedSugars: "0g",
  protein: "0g",
  calcium: "2%",
  potassium: "2%",
};

export const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Finally a soda that doesn't make me feel guilty. The cherry flavor is absolutely incredible!",
    avatar: "S",
  },
  {
    name: "James K.",
    rating: 5,
    text: "I switched from regular soda to Olipop and haven't looked back. My gut health has never been better.",
    avatar: "J",
  },
  {
    name: "Elysa Perry",
    rating: 4,
    text: "The grape flavor brings back childhood memories but in a healthier way. Love the prebiotic benefits!",
    avatar: "E",
  },
];

export const faqs = [
  {
    question: "What makes Olipop different from regular soda?",
    answer:
      "Olipop combines the taste of classic soda with functional benefits like prebiotics, plant fiber, and botanicals. Each can has only 2-5g of sugar compared to 39g in regular soda.",
  },
  {
    question: "How much sugar is in each can?",
    answer:
      "Each can of Olipop contains only 2-5 grams of sugar, which is about 90% less than conventional soda. We use stevia and cassava root syrup as natural sweeteners.",
  },
  {
    question: "Are Olipop drinks vegan and gluten-free?",
    answer:
      "Yes! All Olipop flavors are vegan, gluten-free, paleo-friendly, and Non-GMO Project Verified.",
  },
  {
    question: "Where can I buy Olipop?",
    answer:
      "Olipop is available online through our website, Amazon, and at major retailers including Target, Whole Foods, Kroger, and Walmart.",
  },
  {
    question: "How should I store Olipop?",
    answer:
      "For the best taste experience, store Olipop chilled in the refrigerator. Serve cold for maximum refreshment.",
  },
];
