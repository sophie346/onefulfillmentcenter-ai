import {
  Car,
  Flower2,
  Hammer,
  HeartPulse,
  Mountain,
  Package,
  Shirt,
  Sparkles,
} from "lucide-react";

const INDUSTRIES = [
  {
    title: "Apparel",
    copy: "Designate product variations like color or size and fulfill fashion orders with speed and accuracy.",
    icon: Shirt,
    color: "#be185d",
  },
  {
    title: "Arts & Crafts Supply",
    copy: "Handle diverse craft inventory—from beads to kits—with organized storage and flexible shipping.",
    icon: Sparkles,
    color: "#7c3aed",
  },
  {
    title: "Auto Spare Parts",
    copy: "Support growing demand for eCommerce car parts with reliable SKU tracking and wholesale fulfillment.",
    icon: Car,
    color: "#0369a1",
  },
  {
    title: "Beauty & Cosmetics",
    copy: "Scale beauty supply fulfillment as social-driven demand grows, with careful packaging and returns support.",
    icon: Flower2,
    color: "#db2777",
  },
  {
    title: "Building Supplies",
    copy: "Ship interior and exterior project materials with warehouse capacity built for bulkier goods.",
    icon: Hammer,
    color: "#b45309",
  },
  {
    title: "Camping & Outdoor",
    copy: "Keep outdoor and hunting equipment moving through peak seasons with multi-warehouse coverage.",
    icon: Mountain,
    color: "#15803d",
  },
  {
    title: "Consumer Goods",
    copy: "Stay ahead of short shelf-life inventory with real-time stock visibility and fast order turnaround.",
    icon: Package,
    color: "#0f766e",
  },
  {
    title: "Dental & Medical",
    copy: "Fulfill specialized equipment and supplies where availability and delivery timing matter most.",
    icon: HeartPulse,
    color: "#b91c1c",
  },
] as const;

const OfcIndustries = () => {
  return (
    <section className="ofc-section" id="industries">
      <div className="ofc-container">
        <div className="ofc-section__head ofc-section__head--center">
          <h2 className="ofc-title">Industries</h2>
          <p className="ofc-lead">
            Companies across many industries use the Onefulfillcenter growth
            platform to reach their eCommerce goals.
          </p>
        </div>

        <div className="ofc-industries__grid">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <article className="ofc-industry" key={industry.title}>
                <div
                  className="ofc-industry__icon"
                  style={{ background: `${industry.color}14`, color: industry.color }}
                >
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3>{industry.title}</h3>
                  <p>{industry.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfcIndustries;
