import PricingCard from "./PricingCard";
import { pricingCards } from "@/data/pricing";

export default function PricingClient() {
    return(
        <section className="w-full px-[5vw] pt-70 pb-10 flex items-center justify-center">
            <div className="w-full grid md:grid-cols-3 gap-5">
                {pricingCards.map((card) => (
                    <PricingCard
                        key={card.title}
                        icon={card.icon}
                        heading={card.title}
                        groups={card.groups}
                    />
                ))}
            </div>
        </section>
    )
}