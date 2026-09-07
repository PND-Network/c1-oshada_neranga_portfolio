export interface AchievementItem {
  award?: string;
  name: string;
  description: string;
}

export interface YearGroup {
  year: string;
  items: AchievementItem[];
}

export const achievementTimeline: YearGroup[] = [
  {
    year: "2023",
    items: [
      {
        award: "Certificate",
        name: "Eco-Friendly Porcelain Brick",
        description: "Ruhuna Invention & Innovation Competition - Provincial Level. Selected for national level.",
      },
      {
        award: "Certificate",
        name: "Luminous Torch",
        description: "Ruhuna Invention & Innovation Competition - Provincial Level. Selected for national level.",
      },
      {
        award: "Certificate",
        name: "Thread Seal Cutting Machine",
        description: "Ruhuna Invention & Innovation Competition - Provincial Level.",
      },
      {
        award: "Certificate",
        name: "Night Visible Number Plate",
        description: "Ruhuna Invention & Innovation Competition - Provincial Level. Selected for further modifications.",
      },
      {
        award: "Certificate",
        name: "Wide-Angle Rotation Camera",
        description: "Ruhuna Invention & Innovation Competition - Provincial Level.",
      },
      {
        award: "Certificate",
        name: "Grass Cutter Between Interlock",
        description: "Ruhuna Invention & Innovation Competition - Provincial Level. Selected for national level.",
      },
      {
        award: "Gold Award — 1st Place",
        name: "Porcelain Instead of Sand and Shingle",
        description: "Ruhuna Invention & Innovation Exhibition - Provincial Level. Selected for national level.",
      },
      {
        award: "Bronze Award — 3rd Place",
        name: "Grass Cutter Between Interlock",
        description: "Ruhuna Invention & Innovation Exhibition - Provincial Level. Selected for national level.",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        award: "Certificate",
        name: "Recycled Porcelain Brick",
        description: "Ruhuna Invention & Innovation Exhibition - Zonal Level. Selected for provincial level.",
      },
      {
        award: "Certificate",
        name: "Luminous Torch",
        description: "Ruhuna Invention & Innovation Exhibition - Zonal Level.",
      },
      {
        award: "Certificate",
        name: "High Voltage Sparker",
        description: "Ruhuna Invention & Innovation Exhibition - Zonal Level.",
      },
      {
        award: "Certificate",
        name: "Water Stock Tap for Emergency Use",
        description: "Ruhuna Invention & Innovation Exhibition - Zonal Level. Selected for provincial level.",
      },
      {
        award: "Certificate",
        name: "Recycled Porcelain Brick",
        description: "SAHASAK NIMAVUM 2024 - National Exhibition for Inventions & Innovations, Provincial Level. Selected for national level.",
      },
      {
        award: "Certificate",
        name: "Water Stock Tap for Emergency Use",
        description: "SAHASAK NIMAVUM 2024 - National Exhibition for Inventions & Innovations, Provincial Level. Selected for national level.",
      },
      {
        award: "Gold Award — 1st Place",
        name: "Recycled Porcelain Brick",
        description: "Ruhuna Invention & Innovation Exhibition - Provincial Level. Selected for national level.",
      },
      {
        award: "Bronze Award — 3rd Place",
        name: "Water Stock Tap for Emergency Use",
        description: "Ruhuna Invention & Innovation Exhibition - Provincial Level. Selected for national level.",
      },
      {
        award: "Certificate",
        name: "Night Visible Number Plate",
        description: "Road Safety Invention and Innovation Challenge - National Level. Selected for further modifications.",
      },
      {
        award: "Certificate",
        name: "Recycled Porcelain Brick",
        description: "Sahasak Nimavum - National Level. Selected for further modifications.",
      },
      {
        award: "Certificate",
        name: "Water Stock Tap for Emergency Use",
        description: "Sahasak Nimavum - National Level. Selected for further modifications.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        award: "Certificate",
        name: "Pre-Warning Flood Detection and Alert System",
        description: "Entrepreneurship Skills Exhibition and Competition - Provincial Level. Selected for further modifications.",
      },
      {
        award: "Certificate",
        name: "Recycled Porcelain Brick",
        description: "Entrepreneurship Skills Exhibition and Competition - Provincial Level. Selected for further modifications.",
      },
    ],
  },
];

export const statsData = [
  { value: "Multiple", label: "Awards" },
  { value: "12+", label: "Inventions" },
  { value: "National &\nProvincial", label: "Recognition Levels" },
  { value: "3 Jurisdictions", label: "Patent Applications" },
];