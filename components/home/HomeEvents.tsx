import Image from "next/image";
import Link from "next/link";
import Subheading from "../ui/Subheading";
import Button from "../ui/Button";
import EventCard from "../shared/EventCard";
import { Events } from "@/data/events";

export default function HomeEvents() {
    return(
        <section className="w-full px-[5vw] py-10 flex flex-col items-center justify-center gap-10">
            <div className="w-full flex flex-col md:flex-row justify-between gap-8">
                <div className="flex flex-col gap-5">
                    <Subheading text="događaji" />
                    <h2>PREDSTOJEĆI DOGAĐAJI I REZULTATI</h2>
                </div>

                <Link href="/dogadjaji">
                    <Button text="vidi sve događaje" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
                {Events.map((event) => (
                    <EventCard key={event.link} upcoming={event.upcoming} date={event.date} image={event.image} alt={event.alt} heading={event.heading} link={event.link} course={event.course} courseDescription={event.courseDescription} />
                ))}
            </div>
        </section>
    )
}