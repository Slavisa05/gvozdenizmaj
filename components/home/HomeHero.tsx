import Image from "next/image";
import Button from "../ui/Button";

export default function HomeHero() {
    return(
        <section className="relative w-full px-[5vw] pt-55 min-h-screen overflow-hidden flex items-center justify-center">
            {/* BG slika */}
            <Image 
                src="/hero-slika.png"
                alt="hero slika"
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 -z-10 object-cover object-top"
            />

            <div className="md:max-w-[70%] flex flex-col items-center justify-center gap-5">
                <h1 className="text-center">
                    Centar za Taktički trening - Strelište<br />
                    <span className="uppercase text-green-color font-semibold">gvozdeni zmaj</span>
                </h1>
                <p className="text-justify">Izaberite, rezervišite program i termin, stejdž/poligon, oružje i mete koje hoćete da koristite, brzo i jednostavno!</p>
            
                <div className="flex items-center justify-between gap-3">
                    <Button text="kontaktirajte nas" />
                    <Button text="pogledajte više" variant="secondary" />
                </div>
            </div>
        </section>
    )
}