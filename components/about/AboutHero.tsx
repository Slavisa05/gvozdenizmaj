import Image from "next/image"

export default function AboutHero() {
    return(
        <section className="w-full px-[5vw] pt-70 pb-10 flex items-center justify-center min-h-screen">
            <div className="w-full grid md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center gap-5">
                    <h1><span className="text-green-color uppercase">gvozdeni zmaj </span>— USUDI SE - PRIJAVI SE - UČESTVUJ</h1>
                    <p>
                        Mi nismo samo strelište, mi smo tim posvećenih profesionalaca koji svoj posao rade sa strašću i profesionalnom posvećenošću.
                        Naš moto je <span className="font-algerian">RAD - RED - DISCIPLINA - REZULTAT</span>
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <Image 
                        src="/srb.jpg"
                        alt="logo"
                        width={400}
                        height={400}
                        className="w-full md:w-[75%] h-auto rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}