import Image from "next/image"
import Button from "../ui/Button"
import Subheading from "../ui/Subheading"

export default function CTA() {
    return(
        <section className="relative w-full overflow-hidden px-[5vw] py-10 flex items-center justify-center">
            {/* BG slika */}
            <Image 
                src="/vladimir-1.png"
                alt="muškarac sa automatskom puškom u ruci"
                fill
                sizes="100vw"
                className="absolute inset-0 -z-10 object-cover object-[center_25%]"
            />

            {/* crni overlay */}
            <div className="absolute w-full h-full bg-black/40"></div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-between gap-5">
                <Subheading text="da li ste spremni za akciju?" />
                <h2>Zakažite svoj sadržaj i termin</h2>
                <p className="text-justify">Bilo da ste iskusan strelac ili tek počinjete, zakazivanje vašeg sadržaja i termina na našem strelištu je brzo i jednostavno. Uz različite opcije gađanja i stručne instruktore pružićete sebi bezbedno i prijatno iskustvo. Izaberite stejdz, odaberite oružije i rezervišite vaš termin samo uz nekoliko klikova. Pripremite se da steknete nova znanja, podignete veštinu i uživate u sadržaju koji ste izabrali!</p>
                
                <div>
                    <Button text="kontaktirajte nas" />
                </div>
            </div>
        </section>
    )
}