"use client";

import { ingredients } from "@/data/drinkData";
import styles from "./IngredientsSection.module.css";

export default function IngredientsSection() {
    return (
        <section className={styles.section} id="ingredients">
            <div className={styles.header}>
                <span className={styles.label}>What&apos;s Inside</span>
                <h2 className={styles.title}>Ingredients &amp; Benefits</h2>
                <p className={styles.subtitle}>
                    Every can packed with purpose — real ingredients with real benefits.
                </p>
            </div>
            <div className={styles.grid}>
                {ingredients.map((item) => (
                    <div key={item.name} className={styles.card}>
                        <span className={styles.cardIcon}>{item.icon}</span>
                        <h3 className={styles.cardName}>{item.name}</h3>
                        <p className={styles.cardBenefit}>{item.benefit}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
