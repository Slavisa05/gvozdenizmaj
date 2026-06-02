"use client"

import { useCallback, useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

interface ImageData {
    src: string;
    alt: string;
}

const images: ImageData[] = [
    { src: "/slider/slider1.jpg", alt: "2 muškarca sedeći nišane snajperima" },
    { src: "/slider/slider2.jpg", alt: "muškarac leži na zemlji i puca iz pištolja ispod auta" },
    { src: "/slider/slider3.jpg", alt: "muškarac drži pištolj sa lampom u mraku" },
    { src: "/slider/slider4.jpeg", alt: "muškarac nišani RONI-jem" },
    { src: "/slider/slider5.jpg", alt: "muškarac u mraku sa pištoljem sa lampom" },
    { src: "/slider/slider6.jpg", alt: "muškarac drži pištolj dok je instruktor iza njega" },
    { src: "/slider/slider7.jpg", alt: "žena sa roze antifonima nišani pištoljem" },
    { src: "/slider/slider8.jpeg", alt: "muškarac nišani puškom" },
    { src: "/slider/slider9.jpg", alt: "muškarac puca iz ronija" },
]

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const prevSlide = useCallback(() => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % images.length
        );
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const interval = setInterval(() => {
            nextSlide();
        }, 3500);

        return () => {
            clearInterval(interval);
        };
    }, [isPaused, nextSlide]);

    return(
        <section className="w-full px-[5vw] py-10 flex items-center justify-center">
            <div className="w-full max-w-6xl flex flex-col gap-4 md:gap-6">
                <div 
                    className="relative overflow-hidden rounded-2xl"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                >
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={image.src} className="relative w-full shrink-0 aspect-4/3 md:aspect-video">
                                <Image 
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    priority={index === 0}
                                    sizes="(min-width: 1024px) 960px, (min-width: 768px) 90vw, 95vw"
                                    className="object-cover object-center"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                    <Button text="prethodna" icon={ChevronLeft} variant="secondary" onClick={prevSlide} />
                    <Button text="sledeća" icon={ChevronRight} onClick={nextSlide} />
                </div>

                <div className="flex items-center justify-center gap-2">
                    {images.map((image, index) => (
                        <button
                            key={`${image.src}-dot`}
                            type="button"
                            onClick={() => goToSlide(index)}
                            aria-label={`Idi na sliku ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all ${index === currentIndex ? "w-8 bg-accent" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}