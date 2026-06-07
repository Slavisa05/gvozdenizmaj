export interface Event {
    key?: string,
    upcoming?: boolean;
    date?: string;
    image: string;
    alt: string;
    heading: string;
    link: string;
    course?: boolean;
    courseDescription?: string;
}

export const Events: Event[] = [
    {
        upcoming: false,
        date: "29.03.2026.",
        image: "/iv-1.jpg",
        alt: "čovek puca iz pištolja",
        heading: "IDPA Meč sezona 2026",
        link: "/docs/poziv29.pdf",
    },
    {
        upcoming: false,
        date: "22.03.2026.",
        image: "/dr-pistol.jpg",
        alt: "muškarac puca iza barijere",
        heading: "I IDPA Meč - Sezona 2026 - Level I",
        link: "/docs/poziv22.pdf",
    },
    {
        upcoming: false,
        date: "21.12.2025.",
        image: "/man-behind-barrel.jpg",
        alt: "muškarac kleči iza bureta i nišani",
        heading: "NOVOGODIŠNJI MEČ Pištolj - Puška",
        link: "/docs/poziv-ng.pdf",
    },
     {
        image: "/advanced-sacmarica.jpg",
        alt: "čovek drži sačmaricu",
        heading: "TAKTIČKA PUŠKA SAČMARICA - NAPREDNI TAKTIČKI KURS",
        course: true,
        courseDescription: `**Sistem rada:** Tim za Taktički Trening

**Neophodno predznanje:** TAKTIČKA PUŠKA SAČMARICA Osnovni Kurs

**Broj polaznika u klasi:** maksimalno 12

**Način rada:** individualni, timski

**Kurs je namenjen:** aktivnom osoblju policije, vojske, privatnim vojnim/bezbednosnim kompanijama i civilnog sektora. Kurs je projektovan da ponudi informacije i da razvije progresivnu veštinu u taktičkoj upotrebi taktičke puške sačmarice u različitim taktičkim situacijama. Učesnici stiču napredna znanja i taktičku rutinu u upotrebi taktičke puške sačmarice primenjujući taktička pravila i procedure.

**Sadržaj:**
- bezbednosne procedure u radu sa vatrenim oružjem, taktičkom puškom sačmaricom
- napredne tehnike nošenje oružja i municije – izborodeće i opreme i njeno prilagođavanje taktičkim situacijama)
- tehnike punjenja i prepunjavanja
- upotreba vozila kao zaklona
- gađanje iz vozila
- gađanje u uslovima smanjene vidljivosti
- balistički efekat sačmene municije na meti
- gađanje pod zaštitnom hemijskom maskom
- taktičke vežbe
- gađanje sa partnerom/timom

**Neophodna oprema:**
- 350 metaka (250 Trap, 50 Slug, 50 .00)
- taktička puška sačmarica pump-gun/semi-auto
- taktički remnik
- nosač municije

**Radna odeća:**
- uniforma/odelo /neformalna odeća
- obuća

**Zaštitna oprema:**
- naočare
- zaštita sluha/antifoni
- taktički kačket
- jakna otporna na vetar
- zaštita za kolena i laktove (preporučuje se)
- komplet za čišćenje oružja
- flaša/tremos/camelback za vodu
- sveska i olovka (preporučuje se)
- mali taktički leđni ranac (preporučuje se )
- IFAK – komplet prve pomoći (preporučuje se)

**Kotizacija za učešće na kursu: 70.000,00 dinara (uključen PDV 20%)**

**Cena uključuje:**
- angažovanje instruktora
- iznajmljivanje/korišćenje puške, municije, nosač municije,  taktički remnik, taktički prsluk, zaštitu sluha/aktivni antifoni PELTOR i zaštitne naočare
- taktički kačket sa znakom/vezom TTT
- učesnički sertifikat/diploma i sva ostala MTS koja su neophodna za bezbedan i efikasan rad na kursu

**Način plaćanja:** avansno prilikom prijave za kurs

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [www.tacticalttt.com](https://tacticalttt.com/) [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
        link: "#",
    },
    {
        upcoming: false,
        date: "08.11.2025.",
        image: "/man-with-shotgun.jpg",
        alt: "muškarac puca iz sačmarice",
        heading: "Puška SAČMARICA + PIŠTOLJ",
        link: "/docs/poziv-sacmarica.pdf",
    },
    {
        upcoming: false,
        date: "18.10.2025.",
        image: "/stra-3.jpg",
        alt: "čovek drži roni i nišani",
        heading: "IDPA Meč sezona 2025 - Level I",
        link: "/docs/poziv.pdf",
    },
    {
        image: "/aleks.jpg",
        alt: "čovek drži pištolj sa lampom u mraku",
        heading: "Taktičko svetlo",
        course: true,
        courseDescription: `**Sistem rada:** Tim za Taktički Trening

**Neophodno predznanje:** završen PIŠTOLJ Osnovni Kurs, preporuka PIŠTOLJ Viši Taktički Kurs

**Broj polaznika u klasi:** maksimalno 12

**Sadržaj:**
- bezbednosne procedure pri radu sa oružijem u uslovima smanjene vidljivosti - nošenje, potezanje i rukovanje sa oružjem u uslovima smanjene vidljivosti
- nišanjenje i gađanje u uslovima nedostatka prirodne/veštačke svetlosti - vrste i načini korišćenja mehaničkih nišana - vrste i tehničko-taktičke karakteristike taktičkog svetla, lampe - izbor i načini korišćenja taktičke lampe - gađanje korišćenjem različitih tehnika upotrebe taktičkog svetla (FBI tehnika, Harries, Rogers/Surefire, Index tehnika...)
- tehnike gađanja upotrebom lampe iz ruke
- tehnike gađanja upotrebom lampe postavljene na oružiju
- upotreba lampe u pretrazi prostora
- upotreba lampe kao sredstva za detekciju
- zamena magacina u uslovima nedostatka prirodne/veštačke svetlosti
- otklanjanje zastoja u uslovima nedostatka prirodne/veštačke svetlosti
- individualana/timska upotreba taktičkog svetla
- taktičke funkcije
- taktičke vežbe (individualne/sa partnerom/timske)

**Neophodna oprema:**
- minimalno 150 metaka u pripadajućem kalibru oružija
- pištolj/revolver
- nosač za pištolj/revolver
- dodatni magacini/brzo-punjači za pištolj/revolver (2 + 1)
- nosač za magacine/brzo-punjače (2)
- taktička lampa sa kompletom rezervnih baterija
- odeća za trening: uniforma, civilna odeća, kombinovana odeća...
- obuća
- zaštitna oprema za rad na strelištu/poligonu: naočari, antifoni, kačket...
- jakna za vetar/kišu
- štitnici za kolena, laktove (preporuka)
- oprema za čišćenje oružja
- nosač za vodu, camel-bak, termos, čuturica... (preporuka)
- sveska i olovka (preporuka)
- mali ranac (preporuka)
- IFAK komplet za prvu pomoć (preporuka)

**Kotizacija za učešće na kursu: 30.000,00 dinara**

**Cena uključuje:**
- korišćenje oružija pištolj/revolver
- magacini/brzo-punjači
- nosač za pištolj/revolver
- nosači magacina/brzo-punjača
- taktička lampa sa kompletom rezervnih baterija
- naočari za gađanje
- antifoni
- osveženje tokom učešća na kursu (sok, kafa, čaj)
- certifikat o učešću na kursu

**Cena ne uključuje municiju!**

**Način plaćanja:** avansno prilikom prijave za kurs

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [www.tacticalttt.com](https://tacticalttt.com/) [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
        link: "##",
    },
    {
        upcoming: false,
        date: "30.08.2025.",
        image: "/iv-1.jpg",
        alt: "čovek puca iz pištolja",
        heading: "V IDPA Meč - Sezona 2025 - Level I",
        link: "https://practiscore.com/results/new/4b50b803-6260-4f90-8001-d7bb009d01cb",
    },
]