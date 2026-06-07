import { Metadata } from "next"
import ContactClient from "@/components/contact/ContactClient"

export const metadata: Metadata = {
  title: 'Kontaktirajte nas i zakažite vaš termin | Gvozdeni Zmaj',
  description: 'Kontaktirajte nas u Gvozdenom Zmaju i zakažite svoj termin za taktički trening ili streljački program brzo i jednostavno.',
}

export default function Contact() {
    return(
        <main>
            <ContactClient />
        </main>
    )
}