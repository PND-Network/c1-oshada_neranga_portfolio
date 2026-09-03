export interface Invention {
  id: number;
  category: string;
  title: string;
  problem: string;
  concept: string;
  value: string;
  awards: string[];
  ipStatus?: string;
  hasEvidence?: boolean;
}

export const inventions: Invention[] = [
  {
    id: 1,
    category: "Sustainable Construction",
    title: "Eco-Friendly High-Strength Construction Brick",
    problem: "Porcelain waste from manufacturing is voluminous, difficult to dispose of, and damaging to the environment when landfilled.",
    concept: "A construction brick manufactured from waste porcelain using high-pressure cold-bonding technology with a ball clay catalyst. This process converts industrial ceramic waste into a durable, high-strength building material.",
    value: "Converts waste porcelain into valuable construction materials, reducing landfill burden and providing an environmentally sustainable alternative to conventional bricks. The technology has found practical application in the brick manufacturing industry in Sri Lanka.",
    awards: ["Gold Award — Ruhuna Invention & Innovation Competition", "National & Provincial Recognition", "STIC Commendation"],
    ipStatus: "Patent Applications Filed: Sri Lanka (LK/P/1/23235, LK/P/1/23387), Australia, United Kingdom",
    hasEvidence: true,
  },
  {
    id: 2,
    category: "Road Safety",
    title: "Night Visible Number Plate",
    problem: "Poor visibility of vehicle number plates at night contributes to road safety challenges, hindering law enforcement and accident investigation.",
    concept: "An innovation to improve the visibility of vehicle number plates in low-light and night conditions, enhancing road safety and vehicle identification.",
    value: "Contributes to improved road safety through enhanced vehicle identification in low-light environments, supporting law enforcement and accident prevention.",
    awards: ["Road Safety Invention and Innovation Challenge — Recognition"],
    hasEvidence: true,
  },
  {
    id: 3,
    category: "Surveillance & Monitoring",
    title: "Wide-Angle Rotating Camera System",
    problem: "Fixed-position security cameras have limited field of view, creating blind spots in surveillance coverage.",
    concept: "An innovative camera system that provides a wider monitoring angle through a rotating mechanism, extending surveillance coverage without requiring multiple fixed cameras.",
    value: "Improves surveillance effectiveness for security, public safety, and monitoring applications by maximising coverage area with a single device.",
    awards: ["Ruhuna Invention & Innovation Competition — Recognition"],
    hasEvidence: true,
  },
  {
    id: 4,
    category: "Engineering Innovation",
    title: "Grass Cutter Between Interlocking Pavement Blocks",
    problem: "Grass and weeds growing through the gaps of interlocking paving blocks are difficult to remove using conventional mowers or tools without damaging the surface.",
    concept: "A specialised device engineered to cut and remove grass growing within the narrow gaps of interlocking pavement blocks — a specific and practical engineering solution to a recurring maintenance challenge.",
    value: "Reduces manual maintenance time and cost for municipalities, public spaces, and private installations that use interlocking pavement systems.",
    awards: ["Ruhuna Invention & Innovation Competition — National-level Recognition"],
    hasEvidence: true,
  },
  {
    id: 5,
    category: "Disaster Preparedness",
    title: "Emergency Water Storage Tap",
    problem: "During emergencies and disasters, access to stored water is often disrupted, leaving communities without safe water for essential needs.",
    concept: "An emergency water storage tap designed to enable reliable access to stored water supplies during crisis events, supporting humanitarian response and community resilience.",
    value: "Supports disaster preparedness and emergency response by ensuring communities retain access to stored water when conventional supply infrastructure is disrupted.",
    awards: ["Ruhuna Invention & Innovation Competition 2024 — Bronze Recognition"],
    hasEvidence: true,
  },
  {
    id: 6,
    category: "Disaster Management",
    title: "Pre-Warning Flood Detection and Alert System",
    problem: "Communities in flood-prone areas often receive insufficient advance warning before flood events, limiting evacuation time and disaster response.",
    concept: "A flood detection and alert system designed to provide communities with early warning of rising water levels, enabling timely emergency response and evacuation.",
    value: "Improves community disaster preparedness by extending the available warning time for flood events, potentially saving lives and reducing property damage.",
    awards: ["Innovation Exhibition — 2025 Recognition"],
    hasEvidence: false,
  },
];

export const additionalInventions: string[] = [
  "Luminous Torch — an innovation presented at RIIE 2023",
  "High Voltage Sparker — presented at innovation competition 2024",
  "Porcelain as a Replacement for Sand and Shingle — sustainable construction innovation",
];
