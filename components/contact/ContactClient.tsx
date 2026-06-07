"use client"

import { useState } from "react"
import Button from "../ui/Button"

const fieldVariants = {
    hidden: { opacity: 0, y: 24},
    visible: { opacity: 1, y: 0 },
};

export default function ContactClient() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const form = e.currentTarget;
        const data = {
            ime: (form.elements.namedItem('name') as HTMLInputElement).value,
            telefon: (form.elements.namedItem('phoneNumber') as HTMLInputElement).value,
            poruka: (form.elements.namedItem('message') as HTMLInputElement).value,
        };

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        setStatus(res.ok ? 'ok': 'error');
    }
  
    return(
        <section className="w-full min-h-screen px-[5vw] pt-70 pb-10 flex flex-col items-center justify-center gap-15">
            <div className="w-full grid md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center gap-8">
                    <h1>Imate neko pitanje?</h1>
                    <p>Pošaljite nam poruku i odgovorićemo vam u najkraćem mogućem roku.</p>
                </div>

                <div className="w-full">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {[
                            { label: "Ime i prezime", name: "name", type: "text", placeholder: "Marko Marković", tag: "input", autocomplete: "name" },
                            { label: "Broj telefona", name: "phoneNumber", type: "tel", placeholder: "+38164...", tag: "input", autocomplete: "tel" },
                            { label: "Poruka", name: "message", type: "text", placeholder: "Zdravo, treba mi informacija...", tag: "textarea", autocomplete: "off" },
                        ].map((field, i) => (
                            <div
                                key={field.name}
                                className="flex flex-col gap-1.5"
                            >
                                <label htmlFor={field.name}>{field.label}</label>
                                {field.tag === "textarea" ? (
                                    <textarea
                                        id={field.name}
                                        className="h-40 px-3 py-2 rounded-xl border border-green-color outline-none bg-background/70 text-foreground resize-none backdrop-blur-sm"
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        autoComplete={field.autocomplete}
                                    />
                                ) : (
                                    <input
                                        id={field.name}
                                        className="px-3 py-2 rounded-xl border border-green-color outline-none bg-background/70 text-foreground backdrop-blur-sm"
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        autoComplete={field.autocomplete}
                                    />
                                )}
                            </div>
                        ))}

                        <div>
                            <Button type="submit" text="Pošalji poruku" />
                        </div>

                        {status === 'ok' && <p className="text-green-500 text-sm">Poruka poslata!</p>}
                        {status === 'error' && <p className="text-red-500 text-sm">Greška, pokušaj ponovo.</p>}
                    </form>
                </div>
            </div>

            <iframe 
                className="map w-full h-105 rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.305297996047!2d20.204112726225404!3d44.56654437107332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a1100368bcb99%3A0xdb1f3d2d1ae3db73!2sShooting%20Range%20Iron%20Dragon!5e1!3m2!1ssr!2srs!4v1780564200078!5m2!1ssr!2srs" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
            />
        </section>
    )
}