import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const links = [
    {href: "/", label: "početna"},
    {href: "/about", label: "o nama"},
    {href: "/events", label: "događaji"},
    {href: "https://tacticalttt.com/kursevi.html", label: "kursevi"},
    {href: "https://tacticalttt.com/prodavnica/", label: "prodavnica"},
    {href: "/oruzje", label: "naše oržuje"},
    {href: "/cenovnik", label: "cenovnik"},
    {href: "/contact", label: "kontaktirajte nas"},
]

export default function Footer() {
    const year = new Date().getFullYear();

    return(
        <footer className="bg-black w-full px-[5vw] py-10 flex flex-col gap-15 items-center justify-between">
            <div className="w-full flex flex-col md:flex-row gap-15 items-center justify-between">
                <div className="w-full">
                    <strong className="uppercase italic text-3xl">gvozdeni zmaj</strong>
                </div>

                <div className="flex flex-col gap-5 w-full">
                    <strong className="uppercase text-xl">navigacija</strong>

                    <div className="flex flex-wrap gap-5">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} className="uppercase">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-full">
                    <strong className="uppercase text-xl">radno vreme</strong>

                    <div className="flex flex-col gap-5">
                        <p className="flex items-center gap-2">
                            <Clock3 size={18} className="text-accent" aria-hidden="true" />
                            <span>09:00h - 19:00h, ponedeljak-nedelja</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin size={18} className="text-accent" aria-hidden="true" />
                            <span>Draževac, Obrenovac, Srbija</span>
                        </p>
                        <Link href="mailto:office@gvozdenizmaj.com" className="flex items-center gap-2">
                            <Mail size={18} className="text-accent" aria-hidden="true" />
                            <span>office@gvozdenizmaj.com</span>
                        </Link>
                        <Link href="tel:+381600727032" className="flex items-center gap-2">
                            <Phone size={18} className="text-accent" aria-hidden="true" />
                            <span>+381600727032</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                © {year} Gvozdeni Zmaj. Sva prava zadrzana.
            </div>
        </footer>
    )
}