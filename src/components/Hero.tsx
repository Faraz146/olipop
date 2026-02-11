"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { drinkVariants, brandConfig } from "@/data/drinkData";
import styles from "./Hero.module.css";

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const bgRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    const variant = drinkVariants[activeIndex];

    // Update CSS accent color on variant switch
    useEffect(() => {
        document.documentElement.style.setProperty("--accent", variant.themeColor);
        const r = parseInt(variant.themeColor.slice(1, 3), 16);
        const g = parseInt(variant.themeColor.slice(3, 5), 16);
        const b = parseInt(variant.themeColor.slice(5, 7), 16);
        document.documentElement.style.setProperty(
            "--accent-glow",
            `rgba(${r}, ${g}, ${b}, 0.3)`
        );
    }, [variant.themeColor]);

    // Auto-rotate variants every 5 seconds
    useEffect(() => {
        if (isFading) return;
        const timer = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % drinkVariants.length);
                setIsFading(false);
            }, 400);
        }, 5000);
        return () => clearInterval(timer);
    }, [activeIndex, isFading]);

    // Scroll-based parallax
    useEffect(() => {
        let rafId: number;
        const handleScroll = () => {
            rafId = requestAnimationFrame(() => {
                if (!bgRef.current || !heroRef.current) return;
                const rect = heroRef.current.getBoundingClientRect();
                const progress = -rect.top / rect.height;
                if (progress < -0.2 || progress > 1.2) return;
                const translateY = progress * 60;
                const scale = 1 + progress * 0.06;
                bgRef.current.style.transform = `translateY(${translateY}px) scale(${Math.max(scale, 1)})`;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    const switchVariant = useCallback(
        (direction: "prev" | "next") => {
            if (isFading) return;
            setIsFading(true);
            setTimeout(() => {
                setActiveIndex((prev) => {
                    if (direction === "next") {
                        return (prev + 1) % drinkVariants.length;
                    }
                    return (prev - 1 + drinkVariants.length) % drinkVariants.length;
                });
                setIsFading(false);
            }, 400);
        },
        [isFading]
    );

    const indexStr = String(activeIndex + 1).padStart(2, "0");

    return (
        <section ref={heroRef} className={styles.hero} id="hero">
            {/* Parallax background */}
            <div ref={bgRef} className={styles.heroBg}>
                <Image
                    src={variant.image}
                    alt={`${variant.name} ${variant.subtitle}`}
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    unoptimized
                    className={`${styles.heroBgImage} ${isFading ? styles.fadeOut : ""}`}
                />
            </div>

            {/* Gradient overlay */}
            <div className={styles.heroOverlay} />

            {/* Content */}
            <div className={styles.heroContent}>
                {/* Left text block */}
                <div className={`${styles.textBlock} ${isFading ? styles.fadeOut : ""}`}>
                    <span className={styles.brandName}>{brandConfig.companyName}</span>
                    <h1 className={styles.drinkName}>{variant.name}</h1>
                    <p className={styles.drinkSubtitle}>{variant.subtitle}</p>
                    <p className={styles.drinkDescription}>{variant.description}</p>
                    <div className={styles.ctaGroup}>
                        <Link href="/about" className={`${styles.ctaBtn} ${styles.ctaOutline}`}>
                            View Case Study
                        </Link>
                        <button className={`${styles.ctaBtn} ${styles.ctaSolid}`}>
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Right variant nav */}
                <div className={styles.variantNav}>
                    <div className={styles.variantIndex}>{indexStr}</div>
                    <div className={styles.navControl}>
                        <button
                            className={styles.navBtn}
                            onClick={() => switchVariant("prev")}
                            aria-label="Previous variant"
                        >
                            <span className={styles.navArrow}>↑</span>
                            PREV
                        </button>
                        <div className={styles.navDivider} />
                        <button
                            className={styles.navBtn}
                            onClick={() => switchVariant("next")}
                            aria-label="Next variant"
                        >
                            NEXT
                            <span className={styles.navArrow}>↓</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom social icons */}
            <div className={styles.socialBar}>
                <a
                    href={brandConfig.socialLinks.linkedin}
                    className={styles.socialIcon}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a
                    href={brandConfig.socialLinks.instagram}
                    className={styles.socialIcon}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                </a>
                <a
                    href={brandConfig.socialLinks.github}
                    className={styles.socialIcon}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
