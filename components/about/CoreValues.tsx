import Image from "next/image";
import Subheading from "../ui/Subheading";

export default function CoreValues() {
    return(
        <section className="w-full px-[5vw] py-10 flex items-center justify-center">
            <div className="w-full grid md:grid-cols-2 items-start gap-8">
                <div className="md:sticky md:top-10 self-start flex flex-col gap-8">
                    <Subheading text="izgrađen na disciplini - pokretan poverenjem" />
                    <h2>Kod nas možete:</h2>

                    <div className="flex flex-col justify-between gap-5 pl-5 py-10 border-l border-l-green-color">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-green-color">Organizovati vaše aktivnosti</h3>
                            <p>Organizovati vaše sadržaje, iznajmiti strelište, infrastukturu, oružje, munciju, opremu, logistiku...</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-green-color">Učestvovati na takmičenjima</h3>
                            <p>Učestvovati na različitim takmičenjima u streljaštvu klasičnom, praktičnom, dinamičnom, taktičkom..</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-green-color">Koristiti sadržaje</h3>
                            <p>Komercijalno koristiti naše kapacitete...</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-green-color">Iznajmiti</h3>
                            <p>Iznajmiti oružje, municiju, opremu, obezbediti ishranu...</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-green-color">Kupiti</h3>
                            <p>Kupiti oružje, municju, opremu..</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-green-color">Učestvovati u različitim programima</h3>
                            <p>Uzeti aktivno učešće u različitim programima obuke i treninga u taktičkoj i sportskoj upotrebi oružija pištolj, revolver, PCC, puška sačmarica, automat, puška, snajperska puška...</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-green-color">Učestvovati u individualnim treninzima</h3>
                            <p>Učestvujte u individualnim treninzima sa našim instruktorima 1 na 1, 1 na 2, 1 na 3...</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <Image 
                        src="/mil-stra.jpg"
                        alt="2 muškarca sa nagradama"
                        width={400} height={800}
                        className="w-full rounded-xl"
                    />
                    
                    <Image 
                        src="/mil-kris.jpg"
                        alt="muškarac i žena na strelištu"
                        width={400} height={800}
                        className="w-full rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}