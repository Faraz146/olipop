"use client";

import { useState } from "react";
import { faqs } from "@/data/drinkData";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={styles.section} id="faq">
            <div className={styles.header}>
                <span className={styles.label}>Questions</span>
                <h2 className={styles.title}>Frequently Asked Questions</h2>
                <p className={styles.subtitle}>
                    Everything you need to know about Olipop.
                </p>
            </div>
            <div className={styles.accordion}>
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
                    >
                        <button
                            className={styles.question}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            aria-expanded={openIndex === i}
                        >
                            {faq.question}
                            <span className={styles.icon}>+</span>
                        </button>
                        <div className={styles.answerWrapper}>
                            <p className={styles.answer}>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
