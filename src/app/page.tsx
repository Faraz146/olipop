import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import IngredientsSection from "@/components/IngredientsSection";
import NutritionSection from "@/components/NutritionSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <IngredientsSection />
      <NutritionSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
