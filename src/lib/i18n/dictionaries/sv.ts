import type { Dict } from "./en";

// Swedish mirror of en.ts (the source-of-truth shape).
// Same voice: visionär, lugn, premium, mänsklig, intelligent, lite mystisk.
// Vi säljer ett tankesätt, inte teknik, vi berättar varför, inte hur.
export const sv: Dict = {
  brand: {
    name: "Identione",
    tagline: "Identitet borde anpassa sig efter din värld.",
  },
  metadata: {
    title: "Identione - Identitet borde anpassa sig efter din värld.",
    description:
      "Världen har förändrats. Det har inte identiteten. Identione är ett nytt sätt att tänka kring vilka människor är, och hur förtroende följer med dem.",
    ogTitle: "Identione",
    ogDescription:
      "Ett nytt sätt att tänka kring identitet. Förtroende borde följa personen.",
    htmlLang: "sv",
    ogLocale: "sv_SE",
  },
  nav: {
    home: "Hem",
    perspective: "Perspektiv",
    people: "Människor",
    about: "Om oss",
    contact: "Kontakt",
  },
  localeSwitcher: {
    label: "Språk",
    sv: "Svenska",
    en: "English",
    short: { sv: "SV", en: "EN" },
  },
  hero: {
    line1: "Identitet borde anpassa sig efter din värld.",
    line2: "Inte tvärtom.",
    body: "Världen har förändrats. Människor rör sig mellan roller och ansvar varje dag. De flesta identitetssystem behandlar dem fortfarande som statiska.",
    cta: "Upptäck vårt perspektiv",
  },
  problem: {
    label: "Problemet",
    questions: [
      "Är du samma person på jobbet som du är hemma?",
      "Är ditt körkort det viktigaste med dig när du kliver in på ditt kontor?",
      "Borde din identitet definieras av ett nummer, eller av situationen du befinner dig i?",
    ],
    closing:
      "Problemet är inte att dagens system är digitala. Problemet är att de fortfarande tänker analogt.",
  },
  perspective: {
    label: "Vårt perspektiv",
    headline: "Identitet är inte ett dokument. Det är sammanhang.",
    body: "Vi tror att identitet är föränderlig. Det som är viktigt om dig förändras beroende på var du är, vem du möter och vad du försöker uppnå. Den digitala världen borde inte tvinga in människor i rigida definitioner. Tekniken borde anpassa sig efter verkligheten, inte tvärtom.",
  },
  imagine: {
    label: "Tänk dig",
    cards: [
      "Tänk dig att kliva in i en byggnad utan att tänka på nycklar.",
      "Tänk dig att bevisa exakt det som spelar roll, och inget mer.",
      "Tänk dig att introducera internationell kompetens på minuter istället för veckor.",
      "Tänk dig att förtroendet följer personen istället för att stanna kvar i osammanhängande system.",
    ],
  },
  people: {
    label: "Byggt kring människor",
    headline:
      "Varje organisation definieras av människorna som rör sig genom den.",
    roles: [
      "Anställda",
      "Entreprenörer",
      "Besökare",
      "Partners",
      "Kunder",
      "Tillfällig personal",
    ],
    line: "Varje möte börjar med förtroende. Identitet borde göra det förtroendet enkelt.",
    statement:
      "En betrodd identitet för alla som kliver in i din organisation.",
  },
  where: {
    label: "Där det spelar roll",
    cards: [
      {
        title: "Arbetsstyrka",
        body: "Hjälp människor att röra sig tryggt mellan digitala och fysiska miljöer. Identiteten följer med dem mellan platser, team och system, så att tillgången håller jämna steg med hur de faktiskt arbetar.",
      },
      {
        title: "Besökare",
        body: "Skapa sömlösa upplevelser utan onödig friktion. En gäst ska känna sig väntad, inte hanterad. De känns igen från första mötet och delar bara det som spelar roll, inget mer.",
      },
      {
        title: "Tillträde",
        body: "Bygg förtroende från första mötet till sista dörren. Varje tröskel, digital eller fysisk, känner igen samma person, så att förtroendet byggs en gång och bärs hela vägen.",
      },
    ],
  },
  about: {
    label: "Om Identione",
    headline: "Identitet förtjänar en nystart.",
    body: "Identione finns för att vi tror att identitet förtjänar en nystart. Vi bygger för en värld där förtroende följer människor, inte dokument eller isolerade system. Vår ambition är inte bara att förbättra dagens lösningar. Den är att tänka om kring grunden de byggdes på.",
  },
  cta: {
    label: "Hör av dig",
    heading: "Nyfiken? Låt oss börja ett samtal.",
    body: "Vissa saker upplevs bättre än de förklaras. Om du vill utforska hur det här perspektivet kan appliceras på din organisation pratar vi gärna.",
    button: "Boka ett samtal",
  },
  footer: {
    tagline: "Identitet, omdefinierad.",
    rights: "Alla rättigheter förbehållna.",
  },
};
