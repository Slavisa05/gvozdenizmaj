import HomeHero from "@/components/home/HomeHero";
import WhyUsSection from "@/components/home/WhyUsSection";
import HomeEvents from "@/components/home/HomeEvents";

export default function Home() {
    return(
      <main>
        <HomeHero />
        <WhyUsSection />
        <HomeEvents />
      </main>
    )
}
