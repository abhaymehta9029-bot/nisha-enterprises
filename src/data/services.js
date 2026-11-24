/**
 * Services Data for Nisha Enterprises
 * Clear industrial manufacturing and metal fabrication capabilities.
 * Note: Tank Fabrication and Drawing Support are marked subject to confirmation.
 */

export const SERVICES = [
  {
    id: "metal-fabrication",
    title: "Metal Fabrication",
    shortDesc: "End-to-end cutting, bending, rolling and plate assembly for mild steel and stainless steel.",
    confirmed: true,
    icon: "Layers",
    capabilities: [
      "Plate rolling up to heavy gauge thicknesses",
      "Precision Oxy-fuel and Plasma profile cutting",
      "Plate shearing, drilling, edge beveling & grinding",
      "Custom shell cylinder forming and cone fabrication"
    ],
    details: "With heavy-duty plate rolling machines and fabrication beds at our Dombivli workshop, we transform raw steel plates and structural profiles into finished cylindrical shells, cones, and rectangular assemblies."
  },
  {
    id: "industrial-welding",
    title: "Industrial Welding & Assembly",
    shortDesc: "High-integrity TIG, MIG, and Shielded Metal Arc (SMAW) welding for pressure containment and load structures.",
    confirmed: true,
    icon: "Flame",
    capabilities: [
      "TIG (GTAW) welding for clean stainless steel sanitary seams",
      "MIG / CO2 (GMAW) welding for heavy mild steel structures",
      "Dye Penetrant (DP) defect testing on all critical weld joints",
      "Sound full-penetration welding for leak-proof tanks"
    ],
    details: "Our skilled welders follow strict procedural standards to ensure porosity-free, crack-free welds capable of withstanding industrial operating pressures and dynamic operational loads."
  },
  {
    id: "custom-manufacturing",
    title: "Custom Manufacturing",
    shortDesc: "Bespoke engineering solutions manufactured to exact client dimensions, space constraints, and operational needs.",
    confirmed: true,
    icon: "Wrench",
    capabilities: [
      "Custom industrial equipment mounting skids",
      "Chemical agitator vessels and stirrer systems",
      "Tailored nozzle arrangements and piping manifolds",
      "One-off prototypes and small-to-medium manufacturing runs"
    ],
    details: "Every processing plant has unique floor layouts and piping setups. We customize heights, nozzle orientations, manhole locations, and mounting brackets to match your exact site conditions."
  },
  {
    id: "tank-fabrication",
    title: "Tank & Vessel Fabrication",
    shortDesc: "Fabrication of vertical, horizontal, filter, and process tanks in MS and SS grades.",
    confirmed: false,
    subjectToConfirmation: true,
    icon: "Shield",
    capabilities: [
      "Sand & Activated Carbon Filter tank shells and dish ends",
      "Water, chemical, and effluent storage containers",
      "Hydrostatic testing to ensure zero seepage",
      "Surface treatment: Red oxide primer, epoxy, or SS polishing"
    ],
    details: "Subject to final verification with the company. Covers specialized cylindrical pressure and atmospheric vessels with dished ends, internal distribution pipes, and external lifting lugs."
  },
  {
    id: "drawing-cad-support",
    title: "Engineering Drawing & Layout Support",
    shortDesc: "Technical fabrication drawing translation, dimensional verification, and shop-floor layout checks.",
    confirmed: false,
    subjectToConfirmation: true,
    icon: "FileText",
    capabilities: [
      "Fabrication shop drawings from conceptual client sketches",
      "Nozzle orientation and elevation verification",
      "Bill of Materials (BOM) optimization for steel plates",
      "Site fitment assessment prior to dispatch"
    ],
    details: "Subject to final confirmation with the company. We review technical client drawings and GA (General Arrangement) diagrams to ensure structural stability and seamless on-site installation."
  }
];
