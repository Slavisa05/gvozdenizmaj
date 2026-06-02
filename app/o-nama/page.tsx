import AboutHero from "@/components/about/AboutHero"
import CoreValues from "@/components/about/CoreValues"
import ImageSlider from "@/components/about/ImageSlider"
import CTA from "@/components/shared/CTA"

export default function About() {
    return(
        <main>
            <AboutHero />
            <CoreValues />
            <ImageSlider />
            <CTA />
        </main>
    )
}