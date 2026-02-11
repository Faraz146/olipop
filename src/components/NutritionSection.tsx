"use client";

import { nutritionFacts } from "@/data/drinkData";
import styles from "./NutritionSection.module.css";

export default function NutritionSection() {
    return (
        <section className={styles.section} id="nutrition">
            <div className={styles.header}>
                <span className={styles.label}>Nutrition</span>
                <h2 className={styles.title}>Nutrition Facts</h2>
                <p className={styles.subtitle}>
                    Full transparency — here&apos;s exactly what goes into every can.
                </p>
            </div>

            <div className={styles.labelCard}>
                <div className={styles.labelHeader}>
                    <div className={styles.labelTitle}>Nutrition Facts</div>
                    <div className={styles.servingInfo}>
                        Serving Size {nutritionFacts.servingSize}
                    </div>
                </div>

                <div className={styles.calorieRow}>
                    <span className={styles.calorieLabel}>Calories</span>
                    <span className={styles.calorieValue}>{nutritionFacts.calories}</span>
                </div>

                <div className={styles.labelBody}>
                    <div className={styles.nutrientRow}>
                        <span className={`${styles.nutrientName} ${styles.bold}`}>
                            Total Fat
                        </span>
                        <span className={styles.nutrientValue}>
                            {nutritionFacts.totalFat}
                        </span>
                    </div>
                    <div className={styles.nutrientRow}>
                        <span className={`${styles.nutrientName} ${styles.bold}`}>
                            Sodium
                        </span>
                        <span className={styles.nutrientValue}>
                            {nutritionFacts.sodium}
                        </span>
                    </div>
                    <div className={styles.nutrientRow}>
                        <span className={`${styles.nutrientName} ${styles.bold}`}>
                            Total Carbohydrate
                        </span>
                        <span className={styles.nutrientValue}>
                            {nutritionFacts.totalCarbs}
                        </span>
                    </div>
                    <div className={styles.nutrientRow}>
                        <span className={styles.nutrientName}>Dietary Fiber</span>
                        <span className={styles.nutrientValue}>
                            {nutritionFacts.dietaryFiber}
                        </span>
                    </div>
                    <div className={styles.nutrientRow}>
                        <span className={styles.nutrientName}>Total Sugars</span>
                        <span className={styles.nutrientValue}>
                            {nutritionFacts.totalSugars}
                        </span>
                    </div>
                    <div className={styles.nutrientRow}>
                        <span className={styles.nutrientName}>
                            &nbsp;&nbsp;Includes Added Sugars
                        </span>
                        <span className={styles.nutrientValue}>
                            {nutritionFacts.addedSugars}
                        </span>
                    </div>
                    <div className={styles.nutrientRow}>
                        <span className={`${styles.nutrientName} ${styles.bold}`}>
                            Protein
                        </span>
                        <span className={styles.nutrientValue}>
                            {nutritionFacts.protein}
                        </span>
                    </div>
                </div>

                <div className={styles.labelFooter}>
                    <p className={styles.footerNote}>
                        * The % Daily Value tells you how much a nutrient in a serving of
                        food contributes to a daily diet. 2,000 calories a day is used for
                        general nutrition advice.
                    </p>
                </div>
            </div>
        </section>
    );
}
