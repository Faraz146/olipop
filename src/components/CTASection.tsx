"use client";

import styles from "./CTASection.module.css";

export default function CTASection() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.content}>
                <span className={styles.label}>Get Started</span>
                <h2 className={styles.title}>Ready to Try a Better Soda?</h2>
                <p className={styles.description}>
                    Join the movement. Discover functional sodas that taste incredible and
                    support your gut health. Your taste buds will thank you.
                </p>
                <button className={styles.ctaBtn}>
                    Shop Now <span className={styles.ctaArrow}>→</span>
                </button>
            </div>
        </section>
    );
}
