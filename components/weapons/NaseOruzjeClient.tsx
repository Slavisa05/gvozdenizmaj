"use client"

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { useState } from 'react';
import Button from "../ui/Button";
import WeaponsContainer from "./WeaponsContainer";
import { weaponCategories } from "@/data/weapons";

export default function NaseOruzjeClient() {
    const [activeTab, setActiveTab] = useState(0);
    
    return(
        <section className="w-full min-h-screen px-[5vw] pt-70 pb-10 flex items-center justify-center">
            <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                <TabList className="w-full grid grid-cols-2 md:flex md:flex-wrap gap-5 mb-15">
                    {weaponCategories.map((category, index) => (
                        <Tab key={category.label}>
                            <Button
                                className="w-full whitespace-normal leading-tight text-center"
                                text={category.label}
                                variant={activeTab === index ? "primary" : "secondary"}
                            />
                        </Tab>
                    ))}
                </TabList>

                {weaponCategories.map((category) => (
                    <TabPanel key={category.label}>
                        <WeaponsContainer weapons={category.weapons} />
                    </TabPanel>
                ))}
            </Tabs>
        </section>
    )
}