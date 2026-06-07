import { Metadata } from "next"
import EventsClient from "@/components/eventss/EventsClient"

export const metadata: Metadata = {
  title: 'Prijavite se za različite događaje | Gvozdeni Zmaj',
  description: 'Prijavite se za različite događaje u Gvozdenom Zmaju – taktičke obuke, takmičenja i specijalne akcije za sve nivoe iskustva.',
}

export default function Events() {
    return(
        <main>
            <EventsClient />
        </main>
    )
}