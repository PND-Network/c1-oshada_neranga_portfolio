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

/**
 * Ordering:
 *  1. Patent applications first (by filing jurisdiction scope, broadest first)
 *  2. Then by highest award (Gold > National/Bronze > Certificate of Excellence > Participation)
 */
export const inventions: Invention[] = [

  /* ── PATENT APPLICATIONS ───────────────────────────────────────────── */

  {
    id: 1,
    category: "Sustainable Construction",
    title: "Eco-Friendly High-Strength Construction Brick",
    problem: "Porcelain waste generated during manufacturing is voluminous, difficult to dispose of, and highly damaging to the environment when landfilled.",
    concept: "A construction brick manufactured from waste porcelain using high-pressure cold-bonding technology with a ball clay catalyst. The method utilises a bimodal particle distribution of waste porcelain (55% coarse, 37% fine) mixed with 5% dry ball clay and 3% liquid sodium silicate, compacted under 20–40 MPa hydraulic pressure at ambient temperature - no Portland cement or kiln firing required.",
    value: "An eco-friendly, high-strength construction brick utilising over 90% recycled waste porcelain. The resulting product is a low-cost, high-load-bearing green building material that reduces landfill burden and provides an environmentally sustainable alternative to conventional bricks, with practical application in the brick manufacturing industry.",
    awards: ["STIC Commendation"],
    ipStatus: "Patent Applications Filed: Australia (Patent No: 2026905817), United Kingdom (Patent No: GB2613415.5)",
    hasEvidence: true,
  },

  {
    id: 2,
    category: "Electrical Safety",
    title: "Bulb-Changing Device for Permanently Mounted or Wire-End Bulbs",
    problem: "Replacing light bulbs that are permanently mounted or directly attached to the end of a wire is hazardous and often requires disconnecting live wiring, posing a significant electrical safety risk during routine maintenance.",
    concept: "A specialised hand-held device that enables safe removal and replacement of permanently mounted or wire-end light bulbs using an integrated connected holder mechanism, eliminating the need to handle live wiring or dismount fixed fittings.",
    value: "Improves electrical safety and maintenance convenience by enabling bulb replacement without direct contact with live wiring, reducing the risk of electrical accidents and simplifying routine lighting maintenance in domestic and commercial settings.",
    awards: [],
    ipStatus: "Patent Application Filed: Sri Lanka (Patent No: LK/P/1/23235)",
    hasEvidence: true,
  },

  {
    id: 3,
    category: "Sustainable Construction",
    title: "Water-Storing Building Block with Internal Reservoirs",
    problem: "Conventional building blocks serve a purely structural purpose and contribute nothing to on-site water storage or resource management, leaving buildings unprepared for water shortages or emergencies.",
    concept: "A structural building block incorporating internal hollow reservoirs designed to store water within the body of the block itself, integrating passive water storage directly into the building fabric without reducing structural integrity.",
    value: "Provides dual-function construction elements that serve both structural and water-storage purposes, enabling buildings and infrastructure to contribute to water resilience - particularly valuable in areas prone to water shortages or emergency disruptions.",
    awards: [],
    ipStatus: "Patent Application Filed: Sri Lanka (Patent No: LK/P/1/23387)",
    hasEvidence: true,
  },

  /* ── GOLD AWARDS ────────────────────────────────────────────────────── */

  {
    id: 4,
    category: "Sustainable Construction",
    title: "Recycled Porcelain Brick",
    problem: "Industrial porcelain waste is generated in large quantities during manufacturing and is difficult to repurpose through conventional means, creating an ongoing environmental and waste-management burden.",
    concept: "A high-strength construction brick engineered primarily from recycled waste porcelain, optimised through controlled particle grading and binding to achieve superior compressive strength and durability without reliance on traditional raw materials.",
    value: "Strong porcelain brick technology utilising recycled porcelain waste for sustainable construction - reducing industrial waste, lowering material costs, and providing an environmentally responsible alternative to conventional bricks.",
    awards: [
      "Ruhuna Invention & Innovation Competition: Gold Award",
      "National & Provincial Recognition",
      "Sahasak Nimavum: Certificate of Excellence",
      "STIC Commendation",
    ],
    hasEvidence: true,
  },

  {
    id: 5,
    category: "Sustainable Construction",
    title: "Porcelain as a Replacement for Sand and Shingle",
    problem: "Natural sand and shingle used in construction are being depleted through excessive extraction, driving environmental degradation of riverbeds and coastlines and increasing material costs.",
    concept: "A construction aggregate solution using crushed and graded waste porcelain particles as a direct replacement for natural sand and shingle in concrete, mortar, and other construction mixes, leveraging the material properties of ceramic waste for structural applications.",
    value: "Replaces finite natural aggregates with abundantly available recycled porcelain waste, simultaneously addressing resource depletion and the environmental burden of industrial ceramic waste disposal - contributing to a circular economy in the construction sector.",
    awards: [
      "Ruhuna Invention & Innovation Exhibition: Gold Award",
    ],
    hasEvidence: true,
  },

  /* ── BRONZE / NATIONAL-LEVEL AWARDS ────────────────────────────────── */

  {
    id: 6,
    category: "Engineering Innovation",
    title: "Grass Cutter Between Interlocking Pavement Blocks",
    problem: "Grass and weeds growing through the narrow gaps of interlocking paving blocks are extremely difficult to remove using conventional mowers or hand tools without damaging or displacing the surface.",
    concept: "A specialised device engineered to cut and remove grass growing within the narrow gaps of interlocking pavement blocks - a purpose-built, practical engineering solution to a recurring and costly maintenance challenge faced by municipalities and private installations.",
    value: "Reduces manual maintenance time and cost for municipalities, public spaces, and private installations that use interlocking pavement systems, extending the functional life of paved surfaces.",
    awards: [
      "Ruhuna Invention & Innovation Exhibition: Bronze Award",
      "Ruhuna Invention & Innovation Competition: Certificate of Excellence",
      "National-level Recognition",
      "STIC Commendation",
    ],
    hasEvidence: true,
  },

  {
    id: 7,
    category: "Disaster Preparedness",
    title: "Emergency Water Storage Tap",
    problem: "During natural disasters and emergencies, conventional water supply infrastructure is frequently disrupted, leaving communities without access to safe water for essential needs including drinking, sanitation, and first aid.",
    concept: "An emergency water storage tap designed to enable reliable, controlled access to pre-stored water supplies during crisis events, engineered for simplicity and durability to support humanitarian response and community resilience when grid supply fails.",
    value: "Supports disaster preparedness and emergency response by ensuring communities retain access to stored water when conventional supply infrastructure is disrupted - improving resilience for households, communities, and emergency relief operations.",
    awards: [
      "Ruhuna Invention & Innovation Exhibition: Bronze Award",
      "SAHASAK NIMAVUM 2024 — National Exhibition for Inventions & Innovations: National Level Recognition",
      "Ruhuna Invention & Innovation Competition: Certificate of Excellence",
      "STIC Commendation",
    ],
    hasEvidence: true,
  },

  /* ── CERTIFICATE OF EXCELLENCE ──────────────────────────────────────── */

  {
    id: 8,
    category: "Road Safety",
    title: "Night Visible Number Plate",
    problem: "Poor visibility of vehicle number plates at night contributes significantly to road safety challenges, hindering law enforcement identification and accident investigation in low-light conditions.",
    concept: "An innovation improving the visibility of vehicle number plates in low-light and night-time conditions through enhanced reflective or luminescent design, enabling reliable vehicle identification without requiring external lighting infrastructure.",
    value: "Contributes to improved road safety through enhanced vehicle identification in low-light environments, supporting law enforcement, accident investigation, and the prevention of road incidents.",
    awards: [
      "Road Safety Invention and Innovation Challenge: Certificate of Excellence",
      "Ruhuna Invention & Innovation Competition: Certificate of Excellence",
    ],
    hasEvidence: true,
  },

  {
    id: 9,
    category: "Surveillance & Monitoring",
    title: "Wide-Angle Rotating Camera System",
    problem: "Fixed-position security cameras have an inherently limited field of view, creating blind spots in surveillance coverage that can be exploited or leave areas unmonitored.",
    concept: "An innovative camera system that extends monitoring coverage through a motorised rotating mechanism, providing a wider effective surveillance angle without requiring multiple fixed cameras or complex multi-device infrastructure.",
    value: "Improves surveillance effectiveness for security, public safety, and monitoring applications by maximising coverage area with a single device, reducing installation cost and complexity while eliminating fixed-camera blind spots.",
    awards: [
      "Ruhuna Invention & Innovation Competition: Certificate of Excellence",
      "STIC Commendation",
    ],
    hasEvidence: true,
  },

  {
    id: 10,
    category: "Disaster Management",
    title: "Pre-Warning Flood Detection and Alert System",
    problem: "Communities in flood-prone areas often receive insufficient advance warning before flood events, critically limiting evacuation time and the effectiveness of emergency disaster response.",
    concept: "A flood detection and alert system using water-level sensors to monitor rising water in real time and automatically trigger early warnings to communities and emergency services, enabling timely evacuation and coordinated disaster response before flood conditions become critical.",
    value: "Improves community disaster preparedness by extending the available warning time before flood events, potentially saving lives, reducing property damage, and enabling more effective emergency response operations.",
    awards: [
      "Entrepreneurship Skills Exhibition and Competition: Certificate of Excellence",
      "STIC Commendation",
    ],
    hasEvidence: false,
  },

  {
    id: 11,
    category: "Safety & Emergency",
    title: "Luminous Torch",
    problem: "In dark environments - particularly during power outages and emergencies - conventional torches are extremely difficult to locate quickly, defeating their purpose precisely when they are most needed.",
    concept: "A torch incorporating luminous materials that absorb ambient light and emit a visible glow in darkness, allowing users to locate the device instantly without requiring external illumination or prior knowledge of its exact position.",
    value: "In darkness it is difficult to find the torch - the luminous torch solves this fundamental problem by being self-locatable in the dark, significantly improving safety and response time during power outages, emergencies, and night-time use.",
    awards: [
      "Ruhuna Invention & Innovation Competition: Certificate of Excellence",
    ],
    hasEvidence: true,
  },

  /* ── CERTIFICATE OF PARTICIPATION ──────────────────────────────────── */

  {
    id: 12,
    category: "Engineering Innovation",
    title: "High Voltage Sparker",
    problem: "Generating reliable, controlled high-voltage sparks for ignition and electrical testing applications typically requires specialised, expensive equipment that is not readily accessible for practical or field-based use.",
    concept: "A compact high-voltage sparker device designed to produce controlled electrical sparks through a stepped-up voltage mechanism, providing a practical and accessible tool for ignition systems, laboratory demonstration, and applied electrical testing.",
    value: "Provides an accessible, portable solution for generating high-voltage sparks, applicable across ignition systems, engineering education, and practical electrical testing - reducing reliance on bulky or costly laboratory equipment.",
    awards: [
      "Ruhuna Invention & Innovation Exhibition: Certificate of Participation",
    ],
    hasEvidence: true,
  },

  {
    id: 13,
    category: "Engineering Innovation",
    title: "Thread Seal Cutting Machine",
    problem: "Cutting PTFE thread seal tape (plumber's tape) precisely and cleanly during pipe-fitting and plumbing operations is time-consuming when done by hand, producing inconsistent lengths and wasted material.",
    concept: "A dedicated mechanical device engineered to cut thread seal tape quickly, cleanly, and to consistent lengths - a focused engineering solution to a recurring, practical challenge in plumbing, pipe-fitting, and maintenance work.",
    value: "To cut tap tape efficiently - reduces time and material waste in plumbing and pipe-fitting tasks by providing a dedicated, consistent cutting mechanism for thread seal tape, improving the quality and speed of pipe-joint preparation.",
    awards: [
      "Ruhuna Invention & Innovation Competition: Certificate of Participation",
    ],
    hasEvidence: true,
  },
];

export const additionalInventions: string[] = [];
