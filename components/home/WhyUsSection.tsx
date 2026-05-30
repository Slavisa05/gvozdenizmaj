import Image from "next/image";
import Link from "next/link";
import Subheading from "../ui/Subheading";
import Button from "../ui/Button";

export default function WhyUsSection() {
    return(
        <section className="w-full px-[5vw] py-10 flex items-center justify-center">
            <div className="w-full grid md:grid-cols-[2fr_1fr] gap-10">
                <div className="flex flex-col justify-center gap-5">
                    <Subheading text="zašto izabrati nas?" />
                    <h2>Zašto je naše strelište odličan izbor za vas?</h2>

                    <div className="flex flex-col justify-between gap-5 p-5 border-l border-l-green-color">
                        <div className="flex flex-row gap-3">
                            <strong className="text-5xl">1.</strong>
                            <p>
                                <span className="text-green-color">Iskusno osoblje: </span>
                                Naš tim instruktora posvećen je tome da vam pomogne da unapredite svoje znanje i veštine, u rukovanju oružjem u dinamičnom okruženju.
                            </p>
                        </div>

                        <div className="flex flex-row gap-3">
                            <strong className="text-5xl">2.</strong>
                            <p>
                                <span className="text-green-color">Različite mogućnosti: </span>
                                Velik izbor oružja, programa obuke i treninga, različite meta... uvek će biti prilagođeni vašim potrebama i zahtevima.
                            </p>
                        </div>

                        <div className="flex flex-row gap-3">
                            <strong className="text-5xl">3.</strong>
                            <p>
                                <span className="text-green-color">Bezbedno okruženje: </span>
                                Vaša bezbednost nam je prioritet. Naši kapaciteti su dizajnirani sa fokusom na sigurnost, pridržavamo se visokih standarda.
                            </p>
                        </div>
                    </div>

                    <Link href="/o-nama">
                        <Button text="pogledajte više o nama" />
                    </Link>
                </div>

                <div className="flex flex-col gap-5 items-center">
                    <Image 
                        src="/man-with-gun.jpg"
                        alt="čovek puca iz pištolja jednom rukom"
                        width={400} height={300}
                        className="w-full h-auto rounded-xl shadow-lg shadow-accent/50"
                    />

                    <Image 
                        src="/viktor-shotgun.jpg"
                        alt="čovek drži sačmaricu"
                        width={400} height={300}
                        className="w-full h-auto rounded-xl shadow-lg shadow-accent/50"
                    />
                </div>
            </div>
        </section>
    )
}