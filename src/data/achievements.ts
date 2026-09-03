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
        award: "Gold Award",
        name: "Eco-Friendly Porcelain Brick",
        description: "National-level gold recognition at the Ruhuna Invention & Innovation Competition (RIIE 2023), organised by University of Ruhuna and Sri Lanka Inventors Commission.",
      },
      {
        award: "National Recognition",
        name: "Grass Cutter Between Interlock",
        description: "National-level recognition at RIIE 2023 for the practical engineering invention addressing pavement maintenance.",
      },
      {
        award: "Recognition",
        name: "Luminous Torch",
        description: "Presented and recognised at RIIE 2023, Ruhuna Invention & Innovation Competition.",
      },
      {
        award: "Recognition",
        name: "Night Visible Number Plate",
        description: "Presented at RIIE 2023 for road safety improvement, subsequently recognised in the Road Safety Invention and Innovation Challenge.",
      },
      {
        award: "Recognition",
        name: "Wide-Angle Rotating Camera System",
        description: "Presented at RIIE 2023 for surveillance and public safety innovation.",
      },
      {
        award: "Recognition",
        name: "Porcelain as Replacement for Sand and Shingle",
        description: "Sustainable construction innovation presented at RIIE 2023, exploring waste porcelain as a construction aggregate.",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        award: "Gold Award",
        name: "Recycled Porcelain Brick",
        description: "Gold recognition for the continued development of the recycled porcelain brick technology at national-level innovation competition.",
      },
      {
        award: "Bronze Award",
        name: "Emergency Water Storage Tap",
        description: "Bronze recognition for the disaster-preparedness invention at national-level innovation competition.",
      },
      {
        award: "Recognition",
        name: "Night Visible Number Plate",
        description: "Selected and recognised in the Road Safety Invention and Innovation Challenge for contribution to road safety.",
      },
      {
        award: "National Exhibition",
        name: "High Voltage Sparker",
        description: "Engineering innovation presented at national-level exhibition and competition.",
      },
      {
        award: "IP Development",
        name: "Patent Applications Filed — Sri Lanka",
        description: "Two patent applications filed with Sri Lanka authorities: LK/P/1/23235 and LK/P/1/23387 for the porcelain brick technology.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        award: "Recognition",
        name: "Flood Warning / Alert Unit",
        description: "Pre-warning flood detection and alert system presented at innovation and entrepreneurship exhibition, receiving recognition.",
      },
      {
        award: "Exhibition",
        name: "Recycled Porcelain Brick",
        description: "Continued presentation and recognition of the porcelain brick innovation at entrepreneurship and innovation exhibitions.",
      },
      {
        award: "International IP Activity",
        name: "Australian & UK Patent Applications",
        description: "International patent applications filed — Australia (Application 2026905817, 26 June 2026) and United Kingdom (GB2613415.5, 11 June 2026) — for the eco-friendly porcelain brick technology.",
      },
    ],
  },
];

export const statsData = [
  { value: "Multiple", label: "Innovation Awards" },
  { value: "6+", label: "Documented Inventions" },
  { value: "National &\nProvincial", label: "Recognition Levels" },
  { value: "3 Jurisdictions", label: "Patent Applications" },
];
