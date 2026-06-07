import Image from "next/image";

interface PricingCardProps {
    icon: string;
    heading: string;
    groups: {
        heading: string;
        items: string[];
    }[];
}

export default function PricingCard({ icon, heading, groups }: PricingCardProps) {
    return(
        <article className="h-full flex flex-col px-5 py-8 gap-6 rounded-xl bg-black border border-green-color">
            <div className="flex items-center gap-3">
                <Image src={icon} alt={heading} width={40} height={40} />
                <h3>{heading}</h3>
            </div>

            <div className="space-y-5">
                {groups.map((group) => (
                    <div key={group.heading} className="space-y-2">
                        <h4 className="text-accent font-semibold text-base uppercase">{group.heading}</h4>
                        <ul className="space-y-1 text-sm md:text-base text-text-primary/90">
                            {group.items.map((item) => (
                                <li key={item} className="leading-relaxed">- {item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </article>
    )
}