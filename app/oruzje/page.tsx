import { Metadata } from "next"
import NaseOruzjeClient from "@/components/weapons/NaseOruzjeClient"

export const metadata: Metadata = {
  title: 'Pregledajte dostupno oružje | Gvozdeni Zmaj',
  description: 'Pregledajte dostupno oružje u Gvozdenom Zmaju – širok izbor pištolja, pušaka, revolvera i druge taktičke opreme za vaše treninge.',
}

export default function OurWeapons() {
    return(
        <main>
            <NaseOruzjeClient />
        </main>
    )
}