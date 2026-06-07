import EventCard from "./EventCard";
import { Events } from "@/data/events";

export default function EventsClient() {
    return( 
        <section className="w-full px-[5vw] pt-60 pb-10 flex items-center justify-center">
            <div className="w-full grid md:grid-cols-3 gap-5">
                {Events.map((event) => (
                    <EventCard key={event.link} upcoming={event.upcoming} date={event.date} image={event.image} alt={event.alt} heading={event.heading} link={event.link} course={event.course} courseDescription={event.courseDescription} />
                ))}
            </div>
        </section>
    )
}