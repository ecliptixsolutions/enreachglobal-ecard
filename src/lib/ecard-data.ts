const logo = "/assets/enreach-global-emblem.jpg";
import kishan from "@/assets/kishan.jpg";
import heroZorba from "@/assets/hero-aluminium-zorba.jpg";
import heroUbc from "@/assets/hero-aluminium-ubc.jpg";
import heroCopperWire from "@/assets/hero-copper-wire.jpg";
import heroTransformers from "@/assets/hero-copper-transformers.jpg";
import p01 from "@/assets/p01.jpg";
import p03 from "@/assets/p03.jpg";
import p09 from "@/assets/p09.jpg";
import p11 from "@/assets/p11.jpg";
import p12 from "@/assets/p12.jpg";
import p16 from "@/assets/p16.jpg";
import p19 from "@/assets/p19.jpg";
import p22 from "@/assets/p22.jpg";
import p23 from "@/assets/p23.jpg";
import p24 from "@/assets/p24.jpg";
import p25 from "@/assets/p25.jpg";
// Copper scrap product images sourced from enreachglobal.com
import copper27 from "@/assets/copper-27.jpg"; // Millberry – Bare Bright Copper Wire
import copper28 from "@/assets/copper-28.jpg"; // Birch / Cliff – No. 1 Copper
import copper31 from "@/assets/copper-31.jpg"; // Candy – No. 2 Copper
import copper35 from "@/assets/copper-35.jpg"; // Berry – Copper Wire
import copper39 from "@/assets/copper-39.jpg"; // Copper Chops
import copper41 from "@/assets/copper-41.jpg"; // Copper Radiators
import copper44 from "@/assets/copper-44.jpg"; // Copper Motors
import copper48 from "@/assets/copper-48.jpg"; // Copper Transformers
import copper50 from "@/assets/copper-50.jpg"; // Tinned Copper

export const profile = {
  name: "Kishan Hirpara",
  title: "Founder",
  company: "Enreach Global Inc.",
  tagline: "Global Metal Trade",
  description:
    "Premium metal scrap trading company specializing in aluminium, copper, and brass.",
  phoneDisplay: "+1 (403) 991-7498",
  phoneHref: "tel:+14039917498",
  whatsapp: "https://wa.me/14039917498",
  email: "Info@Enreachglobal.com",
  website: "https://www.enreachglobal.com/",
  websiteLabel: "enreachglobal.com",
  location: "Canada",
  roots: "Calgary, Alberta, Canada",
  logo: logo,
  photo: kishan,
};

export const heroSlides = [
  { src: heroZorba, alt: "Aluminium Zorba scrap prepared for export" },
  { src: heroCopperWire, alt: "Bundled copper wire scrap" },
  { src: heroUbc, alt: "Baled used beverage cans aluminium scrap" },
  { src: heroTransformers, alt: "Copper transformer scrap material" },
];

export const about = {
  eyebrow: "About",
  heading: "Connecting reliable scrap with global demand",
  body: "Enreach Global Inc. is a Canadian metal trading company founded in 2023 in Calgary, Alberta. We source, purchase and export aluminium, copper and brass scrap for suppliers, recyclers, manufacturers and international buyers — with transparent grading, dependable logistics and responsive communication.",
  stats: [
    { value: "12+", label: "Trade relationships supported" },
    { value: "3", label: "Core metal categories managed" },
    { value: "Global", label: "Sourcing and buyer reach" },
    { value: "End-to-End", label: "Enquiry to shipment" },
  ],
};

export const services = [
  "Global Scrap Sourcing",
  "Export Documentation",
  "Industrial Buyer Matching",
  "Sourcing Support",
  "Export Coordination",
  "Shipment Planning",
  "Supplier Network Coordination",
  "Buyer & Supplier Trade Support",
];

export type ProductCategory = {
  key: string;
  label: string;
  items: { name: string; image: string; note: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    key: "aluminium",
    label: "Aluminium Scrap",
    items: [
      { name: "6063 Extrusion", image: p01, note: "Straight extruded sections" },
      { name: "6061 Structural Aluminum", image: p11, note: "Heavier structural profiles" },
      { name: "Taint/Tabor", image: p03, note: "Mixed sheet aluminium" },
      { name: "Cast Aluminum", image: p09, note: "Moulded cast components" },
      { name: "Aluminum Wheels", image: p12, note: "Used alloy wheels" },
      { name: "Used Beverage Cans (UBC)", image: p16, note: "Baled or loose cans" },
      { name: "EC Aluminum Wire", image: p19, note: "Clean conductor wire" },
      { name: "Aluminum Foil", image: p22, note: "Thin foil fractions" },
      { name: "Aluminum Turnings", image: p25, note: "Machining shavings" },
      { name: "Zorba", image: p23, note: "Mixed non-ferrous shredder fraction" },
      { name: "Zurik Scrap", image: p24, note: "Non-ferrous recovery fraction" },
    ],
  },
  {
    key: "copper",
    label: "Copper Scrap",
    items: [
      { name: "Millberry", image: copper27, note: "Bare bright copper wire" },
      { name: "Birch / Cliff — No. 1 Copper", image: copper28, note: "Clean No. 1 grade" },
      { name: "Candy — No. 2 Copper", image: copper31, note: "Unalloyed No. 2 grade" },
      { name: "Berry — Copper Wire", image: copper35, note: "Clean copper wire" },
      { name: "Copper Chops", image: copper39, note: "Granulated copper" },
      { name: "Copper Radiators", image: copper41, note: "Recovered radiator units" },
      { name: "Copper Motors", image: copper44, note: "Electric motor scrap" },
      { name: "Copper Transformers", image: copper48, note: "Transformer copper" },
      { name: "Tinned Copper", image: copper50, note: "Tin-coated copper" },
    ],
  },
];

export const whyUs = [
  {
    title: "Disciplined Material Grading",
    body: "Clearer sorting and practical, commercially accurate quality expectations.",
  },
  {
    title: "Export-Ready Coordination",
    body: "Documentation, shipment planning and buyer communication handled consistently.",
  },
  {
    title: "Responsive Commercial Support",
    body: "Faster quoting and clearer trade communication from enquiry to execution.",
  },
  {
    title: "Global Sourcing",
    body: "Supplier relationships maintained across international scrap markets.",
  },
  {
    title: "Reliable Trade Partnerships",
    body: "Transparency, reliability and long-term relationships before volume.",
  },
];

export const presence = [
  {
    title: "Global Sourcing",
    body: "Collaboration with suppliers worldwide for a consistent procurement network.",
  },
  {
    title: "Cross-Border Documentation",
    body: "Compliance and shipment planning support for seamless international trade.",
  },
  {
    title: "Industrial Buyer Alignment",
    body: "Supplying refineries, smelters and processors with reliable bulk material.",
  },
];

export const founderBio =
  "Kishan Hirpara brings a strong technical foundation and strategic mindset to Enreach Global, with experience across metal recycling, logistics and international trade. His leadership focuses on transparent supplier relationships, disciplined operations and long-term value creation for global buyers.";

export const vcard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  `N:Hirpara;Kishan;;;`,
  `FN:${profile.name}`,
  `ORG:${profile.company}`,
  `TITLE:${profile.title}`,
  `TEL;TYPE=CELL,VOICE:${profile.phoneDisplay}`,
  `EMAIL;TYPE=INTERNET,WORK:${profile.email}`,
  `URL:${profile.website}`,
  `ADR;TYPE=WORK:;;;Calgary;Alberta;;Canada`,
  "END:VCARD",
].join("\r\n");
