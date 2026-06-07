"use client"

import { useState } from "react";
import type { WeaponProps } from "@/data/weapons";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface WeaponsContainerProps {
    weapons: WeaponProps[];
}

export default function WeaponsContainer({ weapons }: WeaponsContainerProps) {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = weapons.map((weapon) => ({
        src: weapon.src,
        alt: weapon.title,
    }));
    
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {weapons.map((weapon, index) => (
                <Image
                    onClick={() => {
                        setCurrentIndex(index);
                        setOpen(true);
                    }}
                    key={weapon.src}
                    src={weapon.src}
                    alt={weapon.title}
                    width={600} height={600}
                    className="w-full h-[80%] cursor-pointer"
                />
            ))}

            <Lightbox 
                open={open}
                close={() => setOpen(false)}
                index={currentIndex}
                slides={slides}
            />
        </div>
    )
}