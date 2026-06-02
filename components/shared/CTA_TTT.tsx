import Image from "next/image";
import Button from "../ui/Button";
import Subheading from "../ui/Subheading";

export default function CTA_TTT() {
    return(
        <section className="relative w-full overflow-hidden px-[5vw] py-10 flex items-center justify-center">
            <div className="w-full grid md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center md:items-start justify-between gap-5">
                    <Subheading text="trening pravi razliku" />
                    <h2 className="text-center">Želite da unapredite svoje veštine gađanja?</h2>
                    <p className="text-justify">Proširite svoje znanje i podignite nivo vaše veštine, uz naše programe obuke i treninga. Bilo da ste početnik ili aktivan strelac, imamo program za vas!</p>
                
                    <div>
                        <Button text="trenirajte sa nama" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-130 aspect-4/3 overflow-hidden rounded-xl">
                        <Image 
                            src="/milorad-2.png"
                            alt="muškarac sa automatskom puškom iza barijere"
                            fill
                            sizes="(min-width: 768px) 40vw, 90vw"
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}