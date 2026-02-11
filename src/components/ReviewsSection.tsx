"use client";

import { reviews } from "@/data/drinkData";
import styles from "./ReviewsSection.module.css";

export default function ReviewsSection() {
    return (
        <section className={styles.section} id="reviews">
            <div className={styles.header}>
                <span className={styles.label}>Social Proof</span>
                <h2 className={styles.title}>What People Are Saying</h2>
                <p className={styles.subtitle}>
                    Join thousands who have made the switch to a healthier soda.
                </p>
            </div>
            <div className={styles.grid}>
                {reviews.map((review) => (
                    <div key={review.name} className={styles.card}>
                        <div className={styles.stars}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                    key={i}
                                    className={i < review.rating ? styles.star : styles.starEmpty}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className={styles.quote}>&ldquo;{review.text}&rdquo;</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>{review.avatar}</div>
                            <div>
                                <div className={styles.authorName}>{review.name}</div>
                                <div className={styles.verified}>Verified Buyer</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
