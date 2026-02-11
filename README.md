# Olipop — Premium Parallax Drink Website

A cinematic, scroll-driven, single-page website for the Olipop canned drink brand. Built with **Next.js 16 (App Router)**, featuring scroll-based parallax, auto-rotating drink variants, and a fully responsive dark-mode design.

## Features

- 🎬 **Full-screen hero** with scroll-based parallax motion
- 🔄 **Auto-rotating drink variants** — Cherry, Grape, Lemon cycle every 5s (also manual PREV/NEXT)
- 🎨 **Dynamic theme colors** — accent color updates per drink variant
- 📱 **Fully responsive** — mobile-first with hamburger nav
- 🧭 **Sticky glassmorphism navbar** with smooth-scroll & active section tracking
- 🧃 **6 content sections** — Product, Ingredients, Nutrition, Reviews, FAQ, CTA
- ⬛ **Dark mode only** — premium aesthetic with Outfit typography
- � **Premium Case Study** — Dedicated `/about` page detailing the design and engineering process
- �🔍 **SEO-optimized** — semantic HTML, meta tags, Open Graph

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS Custom Properties
- **Animations:** requestAnimationFrame parallax, CSS transitions, 3D Hover Effects
- **Images:** next/image with WebP assets

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── about/             # Case study page & styles
│   ├── globals.css        # Design system & dark theme
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Main page composing all sections
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # Parallax hero with variant switcher
│   ├── ProductSection.tsx # About the drink
│   ├── IngredientsSection.tsx
│   ├── NutritionSection.tsx  # FDA-style nutrition label
│   ├── ReviewsSection.tsx    # Testimonials
│   ├── FAQSection.tsx        # Accordion FAQ
│   ├── CTASection.tsx        # Final call-to-action
│   └── Footer.tsx            # Footer with social links
└── data/
    └── drinkData.ts       # All configurable drink data
```

## Customization

Edit `src/data/drinkData.ts` to customize:
- Drink names, subtitles, descriptions
- Theme colors per variant
- Brand info, social links
- Ingredients, nutrition facts, reviews, FAQs

## License

**All rights reserved.** This is a personal portfolio project by **[Faraz Sualeh](https://faraz-sualeh-portfolio.vercel.app/)**. No part of this project may be reproduced, distributed, or used without explicit written permission from the author.

---

*Built by [Faraz Sualeh](https://faraz-sualeh-portfolio.vercel.app/) • 2026*
