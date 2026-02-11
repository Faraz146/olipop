import type { Metadata } from "next";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata: Metadata = {
    title: "About — Olipop Case Study",
    description:
        "A deep dive into the design and development of the Olipop premium parallax drink website. Built with Next.js, featuring cinematic scroll animations and a data-driven architecture.",
};

const stats = [
    { value: "3", label: "Drink Variants" },
    { value: "90%", label: "Less Sugar" },
    { value: "9g", label: "Fiber Per Can" },
    { value: "100%", label: "Natural Flavors" },
];

const features = [
    {
        num: "01",
        title: "Cinematic Parallax Hero",
        text: "A full-viewport hero section with scroll-driven parallax motion. The background image responds to scroll position via requestAnimationFrame, creating a smooth, cinematic feel that draws users into the brand story.",
    },
    {
        num: "02",
        title: "Auto-Rotating Variants",
        text: "Three drink variants — Cherry, Grape, and Lemon — auto-cycle every 5 seconds with elegant fade transitions. Each variant dynamically updates the theme accent color across the entire interface.",
    },
    {
        num: "03",
        title: "Data-Driven Architecture",
        text: "All drink data, ingredients, nutrition facts, reviews, and FAQs are centralized in a single config file. This makes it trivial to add new variants or modify content without touching component code.",
    },
    {
        num: "04",
        title: "Responsive Dark Theme",
        text: "A premium dark-mode design system built with CSS custom properties. Glassmorphism navbar, hover micro-animations, and a curated color palette that adapts per variant.",
    },
    {
        num: "05",
        title: "SEO & Performance First",
        text: "Server-rendered with Next.js App Router for optimal SEO. Semantic HTML, proper heading hierarchy, Open Graph metadata, and optimized WebP images via next/image.",
    },
    {
        num: "06",
        title: "Future-Proof for Frame Sequences",
        text: "The hero image architecture is designed so the image source can be swapped from a static WebP to a frame-by-frame animation controller — no structural refactoring needed.",
    },
];

const techStack = [
    { icon: "⚡", name: "Next.js 16", desc: "App Router + Turbopack" },
    { icon: "🔷", name: "TypeScript", desc: "Full type safety" },
    { icon: "🎨", name: "CSS Modules", desc: "Scoped styling" },
    { icon: "🖼️", name: "next/image", desc: "Optimized images" },
];

const timeline = [
    {
        title: "Design System & Theme",
        text: "Built a dark-mode design system with CSS custom properties — accent colors, typography scale, spacing tokens, glassmorphism utilities, and responsive breakpoints.",
    },
    {
        title: "Hero & Parallax Engine",
        text: "Implemented the full-screen hero with scroll-based parallax using requestAnimationFrame. Added auto-rotating variant switching with fade transitions and dynamic theme color updates.",
    },
    {
        title: "Content Sections",
        text: "Created six modular content sections — Product features, Ingredients grid, FDA-style Nutrition label, Reviews with star ratings, FAQ accordion, and a final CTA — all responsive and data-driven.",
    },
    {
        title: "Navigation & Footer",
        text: "Sticky glassmorphism navbar with IntersectionObserver-based active section tracking, smooth scrolling, and a mobile hamburger menu. Footer with social links and contact info.",
    },
    {
        title: "Polish & Optimization",
        text: "SEO metadata, semantic HTML, performance audit, micro-animations, and hover effects. Final refinements for a portfolio-ready result.",
    },
];

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* Back link */}
            <Link href="/" className={styles.backLink}>
                <span className={styles.backArrow}>←</span>
                Back to Home
            </Link>

            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroGlow} />
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>Case Study</div>
                    <h1 className={styles.heroTitle}>
                        Building the <span>Olipop</span> Experience
                    </h1>
                    <p className={styles.heroSub}>
                        A premium parallax drink website crafted with Next.js —
                        combining cinematic scroll animations, dynamic theming, and a
                        data-driven architecture.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.section}>
                <span className={styles.sectionLabel}>At a Glance</span>
                <h2 className={styles.sectionTitle}>The Numbers Behind Olipop</h2>
                <p className={styles.sectionText}>
                    Olipop reimagines soda — combining classic flavors with functional
                    wellness ingredients. Here are the key metrics that define the brand.
                </p>
                <div className={styles.statsGrid}>
                    {stats.map((s) => (
                        <div key={s.label} className={styles.statCard}>
                            <div className={styles.statValue}>{s.value}</div>
                            <div className={styles.statLabel}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Features */}
            <div className={styles.sectionAlt}>
                <div className={styles.sectionInner}>
                    <span className={styles.sectionLabel}>Features</span>
                    <h2 className={styles.sectionTitle}>Design & Engineering Highlights</h2>
                    <p className={styles.sectionText}>
                        Every detail of this website was crafted to deliver a premium,
                        immersive user experience — from the scroll-driven hero to the
                        dynamic color theming.
                    </p>
                    <div className={styles.cardsGrid}>
                        {features.map((f) => (
                            <div key={f.num} className={styles.card3d}>
                                <div className={styles.cardNum}>{f.num}</div>
                                <h3 className={styles.cardTitle}>{f.title}</h3>
                                <p className={styles.cardText}>{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <section className={styles.section}>
                <span className={styles.sectionLabel}>Technology</span>
                <h2 className={styles.sectionTitle}>Built With Modern Tools</h2>
                <p className={styles.sectionText}>
                    A lean, performant stack focused on developer experience, SEO, and
                    production readiness.
                </p>
                <div className={styles.techGrid}>
                    {techStack.map((t) => (
                        <div key={t.name} className={styles.techCard}>
                            <span className={styles.techIcon}>{t.icon}</span>
                            <div className={styles.techName}>{t.name}</div>
                            <div className={styles.techDesc}>{t.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Development Timeline */}
            <div className={styles.sectionAlt}>
                <div className={styles.sectionInner}>
                    <span className={styles.sectionLabel}>Process</span>
                    <h2 className={styles.sectionTitle}>Development Journey</h2>
                    <p className={styles.sectionText}>
                        From design tokens to the final polish — a look at how the Olipop
                        website came together.
                    </p>
                    <div className={styles.timeline}>
                        {timeline.map((item, i) => (
                            <div key={i} className={styles.timelineItem}>
                                <div className={styles.timelineDot} />
                                <h3 className={styles.timelineTitle}>{item.title}</h3>
                                <p className={styles.timelineText}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaGlow} />
                <h2 className={styles.ctaTitle}>Ready to Explore?</h2>
                <p className={styles.ctaText}>
                    Head back to the main site to experience the full parallax showcase
                    and discover every flavor.
                </p>
                <Link href="/" className={styles.ctaBtn}>
                    Visit Homepage →
                </Link>
            </section>
        </div>
    );
}
