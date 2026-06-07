export interface PricingGroup {
  heading: string;
  items: string[];
}

export interface PricingCardData {
  icon: string;
  title: string;
  groups: PricingGroup[];
}

export const pricingCards: PricingCardData[] = [
  {
    icon: "/gun.png",
    title: "Usluge Na Strelistu",
    groups: [
      {
        heading: "Usluge na strelistu",
        items: [
          "Koriscenje usluga strelista (1 osoba / 1 sat) - 1.500,00 din",
          "Iznajmljivanje vatrenog kratkog oruzja (pistolj/revolver) - 20,00 din po ispaljenom metku",
          "Iznajmljivanje dugog oruzja - 40,00 din po ispaljenom metku",
          "Iznajmljivanje puske sacmarice - 50,00 din po ispaljenom metku",
        ],
      },
      {
        heading: "Iznajmljivanje snajperskog oruzja",
        items: [
          "M76 7,9mm - 100,00 din po ispaljenom metku",
          "M77 7,62x51 - 100,00 din po ispaljenom metku",
          "M91 7,62x54R - 100,00 din po ispaljenom metku",
          "SAKO TRG 22 7,62x51 - 300,00 din po ispaljenom metku",
          "M12 12,7x108 - 500,00 din po ispaljenom metku",
        ],
      },
      {
        heading: "Cene meta",
        items: [
          "Meta 1/1 - 50,00 din",
          "Meta IPSC - 70,00 din",
          "Meta IDPA - 80,00 din",
          "Meta IASC - 80,00 din",
          "Meta USPA - 80,00 din",
          "Meta SILUETA T1 - 60,00 din",
          "Meta za retifikaciju - 50,00 din",
          "Metalne mete - BESPLATNO KORISCENJE",
        ],
      },
    ],
  },
  {
    icon: "/bullet.png",
    title: "Cene Municije",
    groups: [
      {
        heading: "Cene municije",
        items: [
          ".22 LR - 40.00 din",
          "6,35mm - 70.00 din",
          "7,65mm - 80.00 din",
          "7,62 TT - 90.00 din",
          "9mm K - 80.00 din",
          "9x19mm - 80.00 din",
          ".40 SW - 90.00 din",
          ".45 ACP - 120.00 din",
          ".38 SPL - 100.00 din",
          ".357 Magnum - 110.00 din",
          ".44 Magnum - 120.00 din",
          ".223 Remington - 150.00 din",
          "5,56x45mm SS109 - 170.00 din",
          "7,62x39mm - 160.00 din",
          "8x57/7,9mm - 200.00 din",
          "7,62x54 R - 200.00 din",
          ".308 WIN/7,62x51 - 200.00 din",
          "12,7x108 - 1500.00 din",
          ".12 TRAP - 90.00 din",
          ".12 SLUG - 250.00 din",
        ],
      },
    ],
  },
  {
    icon: "/info.png",
    title: "Minimalne Kolicine I Info",
    groups: [
      {
        heading: "Minimalne kolicine municije",
        items: [
          "Kratko oruzje - 50 kom",
          "Dugo oruzje - 30 kom",
          "Sacmeno oruzje - 20 kom",
        ],
      },
      {
        heading: "Napomena",
        items: [
          "Zastitna oprema: naocare + stitnici sluha (antifoni) - BESPLATNO KORISCENJE",
          "Minimalno koriscenje strelista: 1 sat",
        ],
      },
      {
        heading: "Info",
        items: [
          "Za sve clanove saveza i kluba popust 20% na iznajmljivanje strelista i municije",
          "Za sve pripadnike policije, vojske i sluzbe bezbednosti popust 20% na iznajmljivanje strelista i municije",
        ],
      },
    ],
  },
];
