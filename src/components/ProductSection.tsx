"use client";

import { useEffect, useRef } from "react";
import styles from "./ProductSection.module.css";

const features = [
    {
        icon: "🧬",
        title: "Functional Wellness",
        description:
            "Each can delivers prebiotics, plant fiber, and botanicals to support your digestive health naturally.",
    },
    {
        icon: "🍃",
        title: "Clean Ingredients",
        description:
            "No artificial sweeteners, colors, or preservatives. Just real ingredients that taste incredible.",
    },
    {
        icon: "⚡",
        title: "Low Sugar, Big Flavor",
        description:
            "Only 2-5g of sugar per can — 90% less than conventional soda without compromising on taste.",
    },
];

export default function ProductSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll(`.${styles.card}`);
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section} id="product">
            <div className={styles.header}>
                <span className={styles.label}>About The Drink</span>
                <h2 className={styles.title}>More Than Just a Soda</h2>
                <p className={styles.subtitle}>
                    Olipop is redefining what soda can be — combining nostalgic flavors
                    with modern wellness science.
                </p>
            </div>
            <div className={styles.grid}>
                {features.map((feat) => (
                    <div key={feat.title} className={styles.card}>
                        <span className={styles.cardIcon}>{feat.icon}</span>
                        <h3 className={styles.cardTitle}>{feat.title}</h3>
                        <p className={styles.cardText}>{feat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
