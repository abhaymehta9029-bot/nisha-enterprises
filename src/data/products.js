/**
 * Product Catalogue for Nisha Enterprises
 * Real industrial products based on workshop specializations, filter tanks,
 * mixing machines, and structural fabrication.
 * Note: Marked as provisional categories subject to final company verification.
 */

export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "tanks", name: "Industrial Storage Tanks" },
  { id: "filters-etp", name: "Filter & ETP/STP Tanks" },
  { id: "structures", name: "Fabricated Steel Structures" },
  { id: "equipment", name: "Industrial Equipment & Stirrers" },
  { id: "custom", name: "Custom Metal Components" }
];

export const PRODUCTS = [
  {
    id: "sand-carbon-filter-tanks",
    name: "MS Sand & Carbon Filter Tanks",
    category: "filters-etp",
    categoryName: "Filter & ETP/STP Tanks",
    provisional: true,
    featured: true,
    tagline: "High-pressure vertical vessels with frontal pipe manifolds",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    description: "Heavy-duty mild steel (MS) multi-grade sand filter (MGF) and activated carbon filter (ACF) vessels manufactured with dished heads, internal collection laterals, inspection manholes, and multi-port valve piping.",
    specifications: [
      { label: "MOC (Material)", value: "Mild Steel IS 2062 Grade B / SS 304" },
      { label: "Design Pressure", value: "3.5 kg/cm² to 10 kg/cm²" },
      { label: "Internal Coating", value: "FRP Lined / Epoxy Food Grade" },
      { label: "Testing", value: "100% Hydrostatic Pressure Tested" },
      { label: "Dish Ends", value: "Torispherical / Ellipsoidal Dished Heads" }
    ],
    applications: ["Water Treatment Plants (WTP)", "ETP & STP Filter Stages", "Industrial Process Water", "Boiler Feed Filtration"]
  },
  {
    id: "ss-stirrer-mixing-machine",
    name: "SS Industrial Stirrer Mixing Vessel",
    category: "equipment",
    categoryName: "Industrial Equipment & Stirrers",
    provisional: true,
    featured: true,
    tagline: "Precision motorized agitation vessel for chemicals & pharma",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    description: "Stainless steel jacketed or non-jacketed mixing vessel equipped with top-mounted reduction gearbox, mechanical seal, and custom impeller blades (anchor, propeller, or turbine) for homogenous blending.",
    specifications: [
      { label: "MOC", value: "Stainless Steel 304 / 316 / 316L" },
      { label: "Capacity Range", value: "100 Litres to 10,000 Litres" },
      { label: "Surface Finish", value: "Internal Mirror Polish (Ra < 0.4µm), External Matt" },
      { label: "Agitator Drive", value: "Geared Motor with Variable Frequency Drive (VFD)" },
      { label: "Jacket Options", value: "Dimple Jacket / Plain Shell / Limpet Coil" }
    ],
    applications: ["Chemical Processing", "Paint & Resin Blending", "Liquid Detergents & Cosmetics", "Pharma Formulations"]
  },
  {
    id: "ms-etp-stp-systems",
    name: "MS ETP & STP Treatment Plant Vessels",
    category: "filters-etp",
    categoryName: "Filter & ETP/STP Tanks",
    provisional: true,
    featured: true,
    tagline: "Effluent & sewage treatment tanks with corrosion protection",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Modular and Skid-mounted steel vessels for Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP), including aeration tanks, clarifiers, flocculators, and sludge settling hoppers.",
    specifications: [
      { label: "Construction", value: "Heavy Plate Welded Steel with External Stiffeners" },
      { label: "Corrosion Barrier", value: "Anti-corrosive Coal Tar Epoxy / Polyurethane Coat" },
      { label: "Configurations", value: "Cylindrical Vertical / Rectangular Compartmented" },
      { label: "Testing", value: "Dye Penetrant (DP) Testing on Seams & Hydrotest" }
    ],
    applications: ["Industrial Effluent Treatment", "Commercial STP Plants", "Textile & Dyeing Wash Units", "Dombivli MIDC Units"]
  },
  {
    id: "industrial-storage-tanks",
    name: "Heavy Industrial Liquid Storage Tanks",
    category: "tanks",
    categoryName: "Industrial Storage Tanks",
    provisional: true,
    featured: true,
    tagline: "Horizontal & vertical storage vessels for chemicals, oils & water",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description: "Custom-engineered storage tanks built to customer specifications for above-ground storage of industrial fluids, fuels, chemical solutions, and process water with customized nozzle orientations.",
    specifications: [
      { label: "Orientation", value: "Horizontal with Saddle Supports or Vertical" },
      { label: "Plate Thickness", value: "4 mm to 16 mm (as per volumetric head)" },
      { label: "Accessories", value: "Caged Ladder, Handrail, Level Indicator, Dip Hatch" },
      { label: "Standard", value: "Fabricated as per IS 2825 / BS 5500 Good Practice" }
    ],
    applications: ["Bulk Chemical Storage", "Diesel & Lubricant Storage", "Demineralized (DM) Water", "Factory Utility Tanks"]
  },
  {
    id: "fabricated-steel-structures",
    name: "Heavy Fabricated Steel Structures & Skids",
    category: "structures",
    categoryName: "Fabricated Steel Structures",
    provisional: true,
    featured: false,
    tagline: "Precision welded skids, platforms, mezzanines & support frames",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    description: "Engineered structural steel fabrication including equipment base skids, piping racks, industrial walkways, ladders, access platforms, and heavy equipment mounting frames.",
    specifications: [
      { label: "Structural Sections", value: "ISMB Beams, Channels (ISMC), Angles & Plates" },
      { label: "Welding Process", value: "Certified MIG / SMAW Arc Welds by Skilled Welder" },
      { label: "Surface Prep", value: "Wire Brushed / Grit Cleaned with Zinc Phosphate Primer" },
      { label: "Load Capacity", value: "Engineered to client load & footprint criteria" }
    ],
    applications: ["Process Machinery Base Skids", "Plant Maintenance Walkways", "Tank Access Platforms", "Factory Structural Upgrades"]
  },
  {
    id: "custom-metal-components",
    name: "Custom Metal Components & Flange Assemblies",
    category: "custom",
    categoryName: "Custom Metal Components",
    provisional: true,
    featured: false,
    tagline: "Precision plate cutting, rolling, nozzle welding & custom parts",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
    description: "Custom sheet metal rolling, plate forming, weld-neck flange attachments, reducer cones, dish pressing components, and machine mounting plates tailored to customer engineering drawings.",
    specifications: [
      { label: "Process Capabilities", value: "Plate Rolling, Plasma Cutting, Grinding, Drilling" },
      { label: "Tolerances", value: "Close dimensional tolerance per fabrication specs" },
      { label: "Materials", value: "Carbon Steel, Stainless Steel (304, 316), Boiler Plate" },
      { label: "Batch Size", value: "Prototyping, Single-Piece Custom & Production Batches" }
    ],
    applications: ["OEM Machinery Builders", "Replacement Fabrication Parts", "Pipeline Manifolds", "Industrial Assembly Mounts"]
  }
];
