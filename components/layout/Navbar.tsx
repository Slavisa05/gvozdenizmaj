"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const links = [
    {href: "/o-nama", label: "o nama"},
    {href: "/dogadjaji", label: "događaji"},
    {href: "/kursevi", label: "kursevi"},
    {href: "/prodavnica", label: "prodavnica"},
    {href: "/nase-oruzje", label: "naše oržuje"},
    {href: "/cenovnik", label: "cenovnik"},
    {href: "/kontakt", label: "kontaktirajte nas"},
]

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastY, setLastY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setVisible(currentY < lastY || currentY < 10);
            setLastY(currentY);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastY])

    return(
        <header className={`z-50 w-full backdrop-blur-3xl fixed px-[5vw] py-6 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <nav className="relative w-full flex items-center justify-between">
                <Link href="/">
                    <Image 
                        src="/gvozdenizmaj-logo.webp" 
                        alt="gvozdeni zmaj logo" 
                        width={200} height={200} 
                        className="w-35 md:w-50"
                        priority 
                    />
                </Link>

                {/* Desktop linkovi */}
                <div className="hidden md:flex items-center gap-2">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="group relative uppercase p-2.5 font-bold transition-colors duration-300 hover:text-accent">
                            {link.label}
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>
                    ))}
                </div>

                {/* Hamburger */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        className="flex flex-col gap-1.5 p-1"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                    </button>
                </div>

                <Link href="https://tacticalttt.com/">
                    <Image 
                        src="/tacticalttt-logo.webp" 
                        alt="tacticalttt logo" 
                        width={150} height={150} 
                        className="w-28 md:w-40"
                        priority 
                    />
                </Link>
            </nav>

            {/* Mobilni meni */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 pt-4" : "max-h-0"}`}>
                <div className="flex flex-col gap-4 backdrop-blur-3xl py-5">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="uppercase"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}