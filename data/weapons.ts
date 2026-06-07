export interface WeaponProps {
    title: string;
    src: string;
}

const PIŠTOLJI: WeaponProps[] = [
    { title: "Bereta 92FS 9x19", src: "/oruzje/pistolji/Bereta 92FS 9x19.png"},
    { title: "Bereta 98FS 9x21", src: "/oruzje/pistolji/Bereta 98FS 9x21.png"},
    { title: "Beretta M70 7.65mm", src: "/oruzje/pistolji/Beretta M70 7.65mm.png"},
    { title: "Beretta M72 .22LR", src: "/oruzje/pistolji/Beretta M72 .22LR.png"},
    { title: "Beretta M81 7.65mm", src: "/oruzje/pistolji/Beretta M81 7.65mm.png"},
    { title: "Beretta M950b 6.35mm", src: "/oruzje/pistolji/Beretta M950B 6.35.png"},
    { title: "Colt 1903 .32ACP 7.65", src: "/oruzje/pistolji/Colt 1903 .32ACP 7.65.png"},
    { title: "CZ 75 9x19mm", src: "/oruzje/pistolji/CZ 75 9x19mm.png"},
    { title: "CZ 75 Compact", src: "/oruzje/pistolji/CZ 75 Compact.png"},
    { title: "CZ 75 SP-01 Shadow", src: "/oruzje/pistolji/CZ 75 SP-01 Shadow.png"},
    { title: "CZ 75 ST IPSC .40S&W", src: "/oruzje/pistolji/CZ 75 ST IPSC .40S&W.png"},
    { title: "CZ M100 9x19", src: "/oruzje/pistolji/CZ M100 9x19.png"},
    { title: "CZ VZ-36 6.35", src: "/oruzje/pistolji/CZ VZ-36 6.35.png"},
    { title: "CZ VZOR 50 7.65mm", src: "/oruzje/pistolji/CZ VZOR 50 7.65mm.png"},
    { title: "Desert Eagle .44 Magnum", src: "/oruzje/pistolji/Desert Eagle .44 Magnum.png"},
    { title: "Glock 17 9x19", src: "/oruzje/pistolji/Glock 17 9x19.png"},
    { title: "Glock 19 9x19", src: "/oruzje/pistolji/Glock 19 9x19.png"},
    { title: "Glock 21 .45 ACP", src: "/oruzje/pistolji/Glock 21 .45 ACP.png"},
    { title: "Glock 28 .380ACP 9K", src: "/oruzje/pistolji/Glock 28 .380ACP 9K.png"},
    { title: "Glock 36 .45 ACP", src: "/oruzje/pistolji/Glock 36 .45 ACP.png"},
    { title: "GSG .22LR", src: "/oruzje/pistolji/GSG .22LR.png"},
    { title: "Maueser 1932 7.65", src: "/oruzje/pistolji/Maueser 1932 7.65.png"},
    { title: "Mauser K96 7.63x25mm", src: "/oruzje/pistolji/Mauser K96 7.63x25mm.png"},
    { title: "Parabelum Luger P08 9x19", src: "/oruzje/pistolji/Parabelum Luger P08 9x19.png"},
    { title: "Prabelum Luger P08 7.65", src: "/oruzje/pistolji/Prabelum Luger P08 7.65.png"},
    { title: "STI EDGE .40S&W9", src: "/oruzje/pistolji/STI EDGE .40S&W9.png"},
    { title: "Tanfogli limited .40S&W", src: "/oruzje/pistolji/Tanfogli limited .40S&W.png"},
    { title: "Walter TPH 6.35mm", src: "/oruzje/pistolji/Walter TPH 6.35mm.png"},
    { title: "WALTHER PPK 7.65", src: "/oruzje/pistolji/WALTHER PPK 7.65.png"},
    { title: "ZASTAVA CZ99 9x19mm", src: "/oruzje/pistolji/ZASTAVA CZ99 9x19mm.png"},
    { title: "ZASTAVA CZ999 9x19", src: "/oruzje/pistolji/ZASTAVA CZ999 9x19.png"},
    { title: "ZASTAVA M57 7.62 TT", src: "/oruzje/pistolji/ZASTAVA M57 7.62 TT.png"},
    { title: "ZASTAVA M70 .380ACP9m K", src: "/oruzje/pistolji/ZASTAVA M70 .380ACP9m K.png"},
    { title: "ZASTAVA M70 7.65mm", src: "/oruzje/pistolji/ZASTAVA M70 7.65mm.png"},
    { title: "ZASTAVA P25 6.35", src: "/oruzje/pistolji/ZASTAVA P25 6.35.png"},
]

const REVOLVERI: WeaponProps[] = [
    { title: "COLT Army Special .38 Specila", src: "/oruzje/revolveri/COLT Army Special .38 Specila.png"},
    { title: "COLT Detectiv Specila .38 Special", src: "/oruzje/revolveri/COLT Detectiv Specila .38 Special.png"},
    { title: "COLT Lawman MKIII .357 Magnum", src: "/oruzje/revolveri/COLT Lawman MKIII .357 Magnum.png"},
    { title: "LAMA Komancha III .357 magnum", src: "/oruzje/revolveri/LAMA Komancha III .357 magnum.png"},
    { title: "Manurhin 73 .357 Magnum", src: "/oruzje/revolveri/Manurhin 73 .357 Magnum.png"},
    { title: "RUGER GP100 .357 Magnum", src: "/oruzje/revolveri/RUGER GP100 .357 Magnum.png"},
    { title: "S&W 10 .38 Special", src: "/oruzje/revolveri/S&W 10 .38 Special.png"},
    { title: "S&W 19 .357 Magnum", src: "/oruzje/revolveri/S&W 19 .357 Magnum.png"},
    { title: "S&W 686 .357 Magnum", src: "/oruzje/revolveri/S&W 686 .357 Magnum.png"},
    { title: "S&W GOVERNER .45 Colt.45ACP.410", src: "/oruzje/revolveri/S&W GOVERNER .45 Colt.45ACP.410.png"},
    { title: "TAURUS M608 .357 Magnum", src: "/oruzje/revolveri/TAURUS M608 .357 Magnum.png"},
    { title: "Webly-Scott MARK IV .38 S&W", src: "/oruzje/revolveri/Webly-Scott MARK IV .38 S&W.png"},
]

const RONI: WeaponProps[] = [
    { title: "Mikro Roni", src: "/oruzje/roni/Mikro Roni.png" },
    { title: "Roni", src: "/oruzje/roni/Roni.png" },
]

const SAČMARICE: WeaponProps[] = [
    { title: "BENELLI M3 SUPER 90 .12 – repetirka pump gun – semi auto", src: "/oruzje/sacmarice/BENELLI M3 SUPER 90 .12 – repetirka pump gun – semi auto.png" },
    { title: "BENELLI M3 SUPER 90 .12 тАУ repetirka pump gun тАУ semi auto", src: "/oruzje/sacmarice/BENELLI M3 SUPER 90 .12 тАУ repetirka pump gun тАУ semi auto.png" },
    { title: "BENELLI NOVA TACTICAL .12", src: "/oruzje/sacmarice/BENELLI NOVA TACTICAL .12.png" },
    { title: "FRACHI SPAS-12 .12", src: "/oruzje/sacmarice/FRACHI SPAS-12 .12.png" },
    { title: "Kel-Tec KSG .12 repetirka pump-gun", src: "/oruzje/sacmarice/Kel-Tec KSG .12 repetirka pump-gun.png" },
    { title: "MAVERIC 88 .12 repetirka pump-gun", src: "/oruzje/sacmarice/MAVERIC 88 .12 repetirka pump-gun.png" },
    { title: "MOSSBERG 500 .12 repetirka pump-gun", src: "/oruzje/sacmarice/MOSSBERG 500 .12 repetirka pump-gun.png" },
    { title: "SAIGA 12S EXP", src: "/oruzje/sacmarice/SAIGA 12S EXP.png" },
    { title: "Winchester 1300 .12", src: "/oruzje/sacmarice/Winchester 1300 .12.png" },
]

const PUŠKE_REPERTIRKE: WeaponProps[] = [
    { title: "NAGAN M38 7.62x54R", src: "/oruzje/repertirke/NAGAN M38 7.62x54R.png" },
    { title: "Puska M24 7.9", src: "/oruzje/repertirke/Puska M24 7.9.png" },
    { title: "Puska M44 7.62x54R", src: "/oruzje/repertirke/Puska M44 7.62x54R.png" },
    { title: "Puska M44 7.62x54r9", src: "/oruzje/repertirke/Puska M44 7.62x54r9.png" },
    { title: "Puska M48 7.9", src: "/oruzje/repertirke/Puska M48 7.9.png" },
    { title: "Puska MAUSER K98 7.9", src: "/oruzje/repertirke/Puska MAUSER K98 7.9.png" },
    { title: "Puska MOSIN NAGAN M18 91", src: "/oruzje/repertirke/Puska MOSIN NAGAN M18 91.png" },
    { title: "Puska MOSIN NAGAN M44", src: "/oruzje/repertirke/Puska MOSIN NAGAN M44.png" },
    { title: "Puska ZASTAVA CZ99 .22LR", src: "/oruzje/repertirke/Puska ZASTAVA CZ99 .22LR.png" },
    { title: "ZASTAVA M70", src: "/oruzje/repertirke/ZASTAVA M70.png" },
    { title: "ZBROJOVKA CZ550 .375 H&H", src: "/oruzje/repertirke/ZBROJOVKA CZ550 .375 H&H.png" },
]

const POLUAUTOMATKSE_PUŠKE: WeaponProps[] = [
    { title: "Browning Bar", src: "/oruzje/poluautomatske-puske/Browning Bar.png" },
    { title: "EVO SCORPION EVO3 Carabin", src: "/oruzje/poluautomatske-puske/EVO SCORPION EVO3 Carabin.png" },
    { title: "EVO SCORPION EVO3 S1", src: "/oruzje/poluautomatske-puske/EVO SCORPION EVO3 S1.png" },
    { title: "GSG M15 .22LR", src: "/oruzje/poluautomatske-puske/GSG M15 .22LR.png" },
    { title: "MODIFIKOVANA-M4", src: "/oruzje/poluautomatske-puske/MODIFIKOVANA-M4.png" },
    { title: "MODIFIKOVANA-ZASTAVA-M70", src: "/oruzje/poluautomatske-puske/MODIFIKOVANA-ZASTAVA-M70.png" },
    { title: "MODIFIKOVANA-ZASTAVA-M92", src: "/oruzje/poluautomatske-puske/MODIFIKOVANA-ZASTAVA-M92.png" },
    { title: "PENA M7", src: "/oruzje/poluautomatske-puske/PENA M7.png" },
    { title: "ZASTAVA M21 A", src: "/oruzje/poluautomatske-puske/ZASTAVA M21 A.png" },
    { title: "ZASTAVA M21 S", src: "/oruzje/poluautomatske-puske/ZASTAVA M21 S.png" },
    { title: "ZASTAVA M70 AB2", src: "/oruzje/poluautomatske-puske/ZASTAVA M70 AB2.png" },
    { title: "ZASTAVA M70", src: "/oruzje/poluautomatske-puske/ZASTAVA M70.png" },
    { title: "ZASTAVA M77 7.62x51", src: "/oruzje/poluautomatske-puske/ZASTAVA M77 7.62x51.png" },
    { title: "ZASTAVA M84 SCORPION 7.65", src: "/oruzje/poluautomatske-puske/ZASTAVA M84 SCORPION 7.65.png" },
    { title: "ZASTAVA M92", src: "/oruzje/poluautomatske-puske/ZASTAVA M92.png" },
    { title: "ZASTAVA M5966 7.62x39", src: "/oruzje/poluautomatske-puske/ZASTAVA M5966 7.62x39.png" },
]

const SNAJPERSKE_PUŠKE: WeaponProps[] = [
    { title: "MODIFIKOVANA-ZASTAVA-M77", src: "/oruzje/snajperske-puske/MODIFIKOVANA-ZASTAVA-M77.png" },
    { title: "SAKO TRG22 .308 WIN", src: "/oruzje/snajperske-puske/SAKO TRG22 .308 WIN.png" },
    { title: "ZASTAVA M12 12.7mm", src: "/oruzje/snajperske-puske/ZASTAVA M12 12.7mm.png" },
    { title: "ZASTAVA M76 7.9", src: "/oruzje/snajperske-puske/ZASTAVA M76 7.9.png" },
    { title: "ZASTAVA M91 7.62x54R", src: "/oruzje/snajperske-puske/ZASTAVA M91 7.62x54R.png" },
]

const NIŠANI: WeaponProps[] = [
    { title: "Aimpoint Patrol Rifle Optic", src: "/oruzje/nisani/Aimpoint Patrol Rifle Optic.png" },
    { title: "EoTech EXPS3 na sacmarici KEL-Tec KSG", src: "/oruzje/nisani/EoTech EXPS3 na sacmarici KEL-Tec KSG.png" },
    { title: "EoTech EXPS3 u kombinaciji sa G33", src: "/oruzje/nisani/EoTech EXPS3 u kombinaciji sa G33.png" },
    { title: "EoTech G33 3x", src: "/oruzje/nisani/EoTech G33 3x.png" },
    { title: "EoTech XPS2", src: "/oruzje/nisani/EoTech XPS2.png" },
    { title: "Nisan ES-C Teleoptik", src: "/oruzje/nisani/Nisan ES-C Teleoptik.png" },
    { title: "SureFire X400 U u kombinaciji sa vidljivim laserskim markerom", src: "/oruzje/nisani/SureFire X400 U u kombinaciji sa vidljivim laserskim markerom.png" },
    { title: "Takticka lampa Sure Fire X300U-A", src: "/oruzje/nisani/Takticka lampa Sure Fire X300U-A.png" },
    { title: "Teleoptik M20", src: "/oruzje/nisani/Teleoptik M20.png" },
    { title: "Termovizijski nisan NT-35 Teleoptik", src: "/oruzje/nisani/Termovizijski nisan NT-35 Teleoptik.png" },
    { title: "Trijicon Acog", src: "/oruzje/nisani/Trijicon Acog.png" },
]

const METE: WeaponProps[] = [
    { title: "IDPA-Meta", src: "/oruzje/mete/IDPA-Meta.png" },
    { title: "IPSC-meta", src: "/oruzje/mete/IPSC-meta.jpg" },
    { title: "Kruzna ploca", src: "/oruzje/mete/Kruzna ploca.png" },
    { title: "Meta 1 kroz 1", src: "/oruzje/mete/Meta 1 kroz 1.png" },
    { title: "Meta 25m SRB", src: "/oruzje/mete/Meta 25m SRB.png" },
    { title: "Meta RPG7", src: "/oruzje/mete/Meta RPG7.png" },
    { title: "Meta silueta", src: "/oruzje/mete/Meta silueta.png" },
    { title: "Meta za ispitivanje tacnosti i preciznosti PA 5,56mm M21", src: "/oruzje/mete/Meta za ispitivanje tacnosti i preciznosti PA 5,56mm M21.png" },
    { title: "Meta za retifikaciju", src: "/oruzje/mete/Meta za retifikaciju.png" },
    { title: "Metalna meta Poper", src: "/oruzje/mete/Metalna meta Poper.png" },
    { title: "Metalna meta TAOC", src: "/oruzje/mete/Metalna meta TAOC.png" },
    { title: "USPSA-meta", src: "/oruzje/mete/USPSA-meta.jpg" },
]

export const weaponCategories = [
    { label: "PIŠTOLJI", weapons: PIŠTOLJI },
    { label: "REVOLVERI", weapons: REVOLVERI },
    { label: "RONI KONVERZIJA", weapons: RONI },
    { label: "SAČMARICE", weapons: SAČMARICE },
    { label: "PUŠKE REPERTIRKE", weapons: PUŠKE_REPERTIRKE },
    { label: "POLUAUTOMATSKE PUŠKE", weapons: POLUAUTOMATKSE_PUŠKE },
    { label: "SNAJPERSKE PUŠKE", weapons: SNAJPERSKE_PUŠKE },
    { label: "NIŠANI", weapons: NIŠANI },
    { label: "METE", weapons: METE },
] as const;