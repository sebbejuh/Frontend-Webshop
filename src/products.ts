export const PRODUCTS: ProductInterface[] = [
  {
    id: 1,
    name: "Iphone",
    price: 9000,
    imgURL: "https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_1280.png",
    description: "iPhone. Det mest avancerade dubbelkamerasystemet någonsin på en iPhone. Blixtsnabbt A15 Bionic-chip. Ett stort språng för batteritiden. Tålig design. Supersnabbt 5G1. Och en ljusare Super Retina XDR-skärm."
  },
  {
    id: 2,
    name: "Samsung",
    price: 8000,
    imgURL: "https://cdn.pixabay.com/photo/2016/05/07/06/35/pawn-1377128_1280.png",
    description: "Samsung. Telefonen har en skarp trippelkamera och en selfiekamera på hela 32 MP, och med flera avancerade AI-funktioner kan vem som helst få till foton och videos av proffskvalitet. Skärmen har en uppdateringsfrekvens på 120 Hz, vilket ger dig en behaglig och uppslukande upplevelse oavsett om du gamear eller scrollar."
  },
  {
    id: 3,
    name: "Nokia",
    price: 2100,
    imgURL: "https://cdn.pixabay.com/photo/2013/07/12/16/01/smartphone-150753_1280.png",
    description: "Nokia är en stryktålig telefon med mycket lång batteritid. Tillverkad i hållbart material som tål vardagen. Telefonen är inte större än att den får plats i handflatan och i ergonomiskt böjd form. Upp till 15 timmars samtalstid eller nästan en månad i standby. Spela nya generationen snake."
  },
  {
    id: 4,
    name: "Google Pixel",
    price: 560,
    imgURL: "https://cdn.pixabay.com/photo/2018/10/11/05/11/google-pixel-3-3738925_1280.png",
    description: "Google Pixel är både smal och stark. Designen imponerar med ett mycket tunnare utseende och skärmen har också blivit större. (5,5 tum) Alltså: Tunnare, samma mått men större skärm. Skärmen är också ljusare och har bättre kontrast i sin upplösning."
  }
]
export const extendedPRODUCTS: ExtendedProductInterface[] = [
  {
    id: 5,
    name: "Razer Raptor Skärm",
    price: 9500,
    imgURL: "https://cdn.inet.se/product/1600x900/2223074_3.png",
    description: "En spelskärm kräver extrem prestanda med snabbhet och tydlighet, så att du kan reagera på direkten.",
    frequency: "265"
  },
  {
    id: 6,
    name: "AOC AGON Skärm",
    price: 12899,
    imgURL: "https://cdn.inet.se/product/1600x900/2222834_6.png",
    description: "AGON OLED innebär blixtsnabb responstid och oändlig kontrast med perfekt svärta. Dessutom får du en fantastisk HDR-upplevelse där spelen verkligen kommer till liv.",
    frequency: "240"
  }
]

export const allProducts:(ProductInterface | ExtendedProductInterface)[] = [  //merges both arrays together
  ...PRODUCTS,
  ...extendedPRODUCTS,
];