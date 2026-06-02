import HomeHero from "@/components/home/HomeHero";
import WhyUsSection from "@/components/home/WhyUsSection";
import HomeEvents from "@/components/home/HomeEvents";
import CTA from "@/components/shared/CTA";
import CTA_TTT from "@/components/shared/CTA_TTT";

export default function Home() {
    return(
      <main>
        <HomeHero />
        <WhyUsSection />
        <HomeEvents />
        <CTA />
        <CTA_TTT />
      </main>
    )
}
