export interface Patent {
  jurisdiction: string;
  flag: string;
  reference: string;
  date: string;
  status: string;
  title: string;
  notes?: string;
  featured?: boolean;
}

export const patents: Patent[] = [
  {
    jurisdiction: "Sri Lanka",
    flag: "🇱🇰",
    reference: "LK/P/1/23235",
    date: "2024",
    status: "Patent Application Filed",
    title: "Eco-Friendly Construction Brick from Waste Porcelain",
    notes: "First patent application filed with Sri Lanka Inventors Commission / IP authority.",
  },
  {
    jurisdiction: "Sri Lanka",
    flag: "🇱🇰",
    reference: "LK/P/1/23387",
    date: "2024",
    status: "Patent Application Filed",
    title: "Eco-Friendly Construction Brick from Waste Porcelain",
    notes: "Second patent application filed with Sri Lanka IP authority for related technology.",
  },
  {
    jurisdiction: "Australia",
    flag: "🇦🇺",
    reference: "Application No. 2026905817",
    date: "26 June 2026",
    status: "Patent Application Filed",
    title: "Eco-Friendly, High-Strength Construction Brick Manufactured from Waste Porcelain Using High-Pressure Cold-Bonding Technology with a Ball Clay Catalyst and Method of Production Thereof",
    featured: true,
    notes: "Filed with IP Australia. Application filed — not yet granted.",
  },
  {
    jurisdiction: "United Kingdom",
    flag: "🇬🇧",
    reference: "Application GB2613415.5",
    date: "11 June 2026",
    status: "Patent Application Filed",
    title: "Eco-Friendly, High-Strength Construction Brick Manufactured from Waste Porcelain Using High-Pressure Cold-Bonding Technology with a Ball Clay Catalyst and Method of Production Thereof",
    featured: true,
    notes: "Filed with UK Patents Office. Application filed — not yet granted.",
  },
];
