export interface Document {
  id: string;
  title: string;
  organisation: string;
  date: string;
  category: string;
  image?: string;
  description?: string;
}

export const documents: Document[] = [
  {
    id: "stic-commendation",
    title: "Commendation Letter — Southern Technology Incubation Centre",
    organisation: "University of Ruhuna / STIC",
    date: "2024–2025",
    category: "Professional Recognition",
    description: "A formal commendation letter from Prof. KKLB Adikaram, Director of the Southern Technology Incubation Centre, University of Ruhuna, recognising Oshada's innovation capabilities and achievements.",
  },
  {
    id: "slic-awards",
    title: "Sri Lanka Inventors Commission — Awards Confirmation",
    organisation: "Sri Lanka Inventors Commission (SLIC)",
    date: "2023–2024",
    category: "National Recognition",
    image: "certificates",
    description: "Official awards documentation from the Sri Lanka Inventors Commission for recognised inventions at national-level competitions.",
  },
  {
    id: "riie-certificates",
    title: "RIIE 2023 — Participation & Recognition Certificates",
    organisation: "University of Ruhuna & Sri Lanka Inventors Commission",
    date: "2023",
    category: "Competition Certificates",
    image: "certificates",
    description: "Multiple certificates from the Ruhuna Invention & Innovation Exhibition (RIIE) 2023, co-organised by University of Ruhuna and Sri Lanka Inventors Commission.",
  },
  {
    id: "au-patent",
    title: "Australian Patent Application Receipt",
    organisation: "IP Australia",
    date: "26 June 2026",
    category: "Patents",
    description: "Official filing receipt for Patent Application No. 2026905817 filed with IP Australia for the Eco-Friendly High-Strength Construction Brick technology.",
  },
  {
    id: "uk-patent",
    title: "UK Patents Office — Patent Application",
    organisation: "UK Patents Office",
    date: "11 June 2026",
    category: "Patents",
    description: "Official filing receipt for Application GB2613415.5 filed with the UK Patents Office for the Eco-Friendly High-Strength Construction Brick technology.",
  },
  {
    id: "road-safety",
    title: "Road Safety Invention & Innovation Challenge — Recognition",
    organisation: "Road Safety Authority / Organising Committee",
    date: "2024",
    category: "Competition Certificates",
    description: "Recognition certificate for the Night Visible Number Plate innovation in the Road Safety Invention and Innovation Challenge.",
  },
  {
    id: "award-ceremony",
    title: "Award Ceremony — National-Level Recognition",
    organisation: "Innovation Competition Organising Committee",
    date: "2023–2024",
    category: "Award Documentation",
    image: "ceremony",
    description: "Photographic and documentary evidence of award ceremony participation and national-level recognition.",
  },
  {
    id: "sl-patents",
    title: "Sri Lanka Patent Applications — LK/P/1/23235 & LK/P/1/23387",
    organisation: "Sri Lanka Inventors Commission / NIPO",
    date: "2024",
    category: "Patents",
    description: "Official documentation for two patent applications filed in Sri Lanka for the eco-friendly porcelain brick technology.",
  },
];
