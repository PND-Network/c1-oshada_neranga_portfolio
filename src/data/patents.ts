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
    date: "22/05/2024",
    status: "Patent Application Filed",
    title: "A bulb changing device for replacing bulbs fitted in permanently mounted holders or holders attached to the end of a wire.",
    notes: "First patent application filed with Sri Lanka Inventors Commission / IP authority.",
  },
  {
    jurisdiction: "Sri Lanka",
    flag: "🇱🇰",
    reference: "LK/P/1/23387",
    date: "13/12/2024",
    status: "Patent Application Filed",
    title: "Water-Storing Building Block with Internal Reservoirs",
    notes: "Second patent application filed with Sri Lanka IP authority for related technology.",
  },
  {
    jurisdiction: "Australia",
    flag: "🇦🇺",
    reference: "2026905817",
    date: "26/06/2026",
    status: "Patent Application Filed",
    title: "Eco-Friendly, High-Strength Construction Brick Manufactured from Waste Porcelain Using High-Pressure Cold-Bonding Technology with a Ball Clay Catalyst and Method of Production Thereof",
    featured: true,
    notes: "Filed with IP Australia. Application filed - not yet granted.",
  },
  {
    jurisdiction: "United Kingdom",
    flag: "🇬🇧",
    reference: "GB2613415.5",
    date: "11/06/2026",
    status: "Patent Application Filed",
    title: "Eco-Friendly, High-Strength Construction Brick Manufactured from Waste Porcelain Using High-Pressure Cold-Bonding Technology with a Ball Clay Catalyst and Method of Production Thereof",
    featured: true,
    notes: "Filed with UK Patents Office. Application filed - not yet granted.",
  },
];
