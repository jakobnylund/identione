// English source-of-truth dictionary.
// All user-facing strings live here; sv.ts mirrors this shape (Dict).
//
// Voice (Communication Manifesto): visionary, calm, premium, human, intelligent,
// a little mysterious. We sell a perspective, not technology, say why, not how.
// Every sentence should make the visitor more curious, not more informed. Never
// expose implementation (PKI, attributes, offline, NFC, Open Banking, etc.).
export const en = {
  brand: {
    name: "Identione",
    tagline: "Identity should adapt to your world.",
  },
  metadata: {
    title: "Identione - Identity should adapt to your world.",
    description:
      "The world has changed. Identity hasn't. Identione is a new way to think about who people are, and how trust moves with them.",
    ogTitle: "Identione",
    ogDescription:
      "A new way to think about identity. Trust should follow the person.",
    htmlLang: "en",
    ogLocale: "en_US",
  },
  nav: {
    home: "Home",
    perspective: "Perspective",
    people: "People",
    about: "About",
    contact: "Contact",
  },
  localeSwitcher: {
    label: "Language",
    sv: "Svenska",
    en: "English",
    short: { sv: "SV", en: "EN" },
  },
  hero: {
    line1: "Identity should adapt to your world.",
    line2: "Not the other way around.",
    body: "The world has changed. People move between organizations, relationships and responsibilities every day. Yet most identity systems still treat them as if they were static. We believe it's time to rethink identity.",
    cta: "Discover our perspective",
  },
  problem: {
    label: "The Problem",
    questions: [
      "Are you the same person at work as you are at home?",
      "Is your driver's license the most important thing about you when you enter your office?",
      "Should your identity be defined by a number, or by the situation you're in?",
    ],
    closing:
      "The problem isn't that today's systems are digital. The problem is that they still think analog.",
  },
  perspective: {
    label: "Our Perspective",
    headline: "Identity isn't a document. It's context.",
    body: "We believe identity is fluid. What matters about you changes depending on where you are, who you're interacting with and what you're trying to achieve. The digital world shouldn't force people into rigid definitions. Technology should adapt to reality, not the other way around.",
  },
  imagine: {
    label: "Imagine If",
    cards: [
      "Imagine entering a building without worrying about keys.",
      "Imagine proving exactly what matters, and nothing more.",
      "Imagine onboarding international talent in minutes instead of weeks.",
      "Imagine trust following the person instead of staying inside disconnected systems.",
    ],
  },
  people: {
    label: "Built Around People",
    headline:
      "Every organization is defined by the people who move through it.",
    roles: [
      "Employees",
      "Contractors",
      "Visitors",
      "Partners",
      "Customers",
      "Temporary staff",
    ],
    line: "Every interaction begins with trust. Identity should make that trust effortless.",
    statement:
      "One trusted identity for everyone who enters your organization.",
  },
  where: {
    label: "Where It Matters",
    cards: [
      {
        title: "Workforce",
        body: "Help people move securely between digital and physical environments. Their identity travels with them across sites, teams and systems, so access keeps up with the way they actually work.",
      },
      {
        title: "Visitors",
        body: "Create seamless experiences without unnecessary friction. A guest should feel expected, not processed. They are recognized from the first interaction, sharing only what matters and nothing more.",
      },
      {
        title: "Access",
        body: "Build trust from the first interaction to the final doorway. Every threshold, digital or physical, recognizes the same person, so trust is established once and carried all the way through.",
      },
    ],
  },
  about: {
    label: "About Identione",
    headline: "Identity deserves a fresh start.",
    body: "Identione exists because we believe identity deserves a fresh start. We are building for a world where trust moves with people, not with documents or isolated systems. Our ambition is not simply to improve today's solutions. It's to rethink the foundation they were built upon.",
  },
  cta: {
    label: "Get in touch",
    heading: "Curious? Let's start a conversation.",
    body: "Some things are better experienced than explained. If you'd like to explore how this perspective could apply to your organization, we'd love to talk.",
    button: "Book a conversation",
  },
  footer: {
    tagline: "Identity, redefined.",
    rights: "All rights reserved.",
  },
};

export type Dict = typeof en;
