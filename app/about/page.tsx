import { Metadata } from "next"
import AboutHero from "@/components/about/AboutHero"
import CoreValues from "@/components/about/CoreValues"
import ImageSlider from "@/components/about/ImageSlider"
import CTA from "@/components/shared/CTA"

export const metadata: Metadata = {
  title: 'Ko smo mi? | Gvozdeni Zmaj',
  description: 'Saznajte više o Gvozdenom Zmaju – timu profesionalaca posvećenih taktičkom treningu, sigurnosti i unapređenju vaših veština rukovanja oružjem.',
}

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