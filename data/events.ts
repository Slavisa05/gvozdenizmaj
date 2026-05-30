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
        link: "#",
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