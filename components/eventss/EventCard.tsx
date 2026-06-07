"use client"

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Event } from "@/data/events";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function EventCard( {upcoming, date, image, alt, heading , link, course, courseDescription}: Event ) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", onEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onEscape);
        };
    }, [isOpen]);
   
    return(
        <div className="flex flex-col justify-between px-5 py-10 gap-5 rounded-xl bg-black">
            <div className="w-full flex items-center justify-between">
                {course ? (
                    <p className="text-green-color uppercase">kurs</p>
                ) : (
                    upcoming ? (
                        <p className="text-green-color uppercase">predstojeći meč</p>
                    ) : (
                        <p className="text-red-500 uppercase">prethodni meč</p>
                    )
                )}

                <p>{date}</p>
            </div>

            <Image 
                src={image}
                alt={alt}
                width={400} height={200}
                className="w-full h-80 rounded-xl"
            />

            <h3>{heading}</h3>

            {course ? (
                <div className="flex gap-5">
                    <Link href="/docs/reg-form.pdf" target="_blank" rel="noopener noreferrer">
                        <Button text="prijavi se" />
                    </Link>
                    <Button text="info" variant="secondary" onClick={() => setIsOpen(true)} />
                </div>
            ) : (
                <Link href={link} className="group uppercase flex items-center gap-2">
                    registruj se za meč
                    <ArrowRight size={25} className="text-accent font-bold transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
                </Link>
            )}

            {course && isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 md:items-center md:justify-center md:p-8"
                    onClick={() => setIsOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Detalji kursa ${heading}`}
                >
                    <div
                        className="max-h-[92vh] w-full overflow-y-auto rounded-2xl border border-border bg-black p-4 shadow-2xl md:max-w-3xl md:rounded-3xl md:p-7"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-4 flex items-center justify-end">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-tertiary text-text-secondary transition-colors hover:border-accent/50 hover:text-accent"
                                aria-label="Zatvori modal"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.2fr] md:gap-7">
                            <div className="sticky top-0 h-fit overflow-hidden rounded-xl border border-border bg-bg-tertiary">
                                <Image
                                    src={image}
                                    alt={alt}
                                    width={900}
                                    height={700}
                                    className="w-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl md:text-3xl">{heading}</h3>

                                <div className="text-text-secondary">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            p: ({ children }) => <p className="mb-3 leading-relaxed">{children}</p>,
                                            ul: ({ children }) => <ul className="mb-3 list-disc space-y-2 pl-5">{children}</ul>,
                                            li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                                            strong: ({ children }) => <strong className="text-text-primary">{children}</strong>,
                                            a: ({ href, children }) => (
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-accent underline underline-offset-2 hover:text-green-color"
                                                >
                                                    {children}
                                                </a>
                                            ),
                                        }}
                                    >
                                        {courseDescription ?? ""}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}