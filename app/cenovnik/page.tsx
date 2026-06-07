import { Metadata } from "next"
import PricingClient from "@/components/pricing/PricingClient"

export const metadata: Metadata = {
  title: 'Pogledajte naš cenovnik | Gvozdeni Zmaj',
  description: 'Pogledajte naš cenovnik u Gvozdenom Zmaju i saznajte sve o cenama treninga, najma opreme i usluga koje nudimo.',
}

export default function Pricing() {
    return(
        <main>
            <PricingClient />
        </main>
    )
}