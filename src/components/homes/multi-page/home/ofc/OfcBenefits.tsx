import {
  Boxes,
  Globe2,
  Layers3,
  PackageCheck,
  RotateCcw,
  Ship,
  ShoppingBag,
  Store,
  Truck,
  Warehouse,
} from "lucide-react";

const BENEFITS = [
  { title: "Multiple warehouses", icon: Warehouse, color: "#0f766e" },
  { title: "Best shipping prices", icon: Ship, color: "#e85d04" },
  { title: "Unlimited products", icon: Boxes, color: "#0369a1" },
  { title: "Robust fulfillment software", icon: Layers3, color: "#7c3aed" },
  { title: "Inventory management", icon: PackageCheck, color: "#15803d" },
  { title: "Grow your business globally", icon: Globe2, color: "#b45309" },
  { title: "Order processing", icon: ShoppingBag, color: "#be185d" },
  { title: "Wholesale fulfillment", icon: Store, color: "#0e7490" },
  { title: "Returns processing", icon: RotateCcw, color: "#b91c1c" },
  { title: "Carrier-ready logistics", icon: Truck, color: "#4338ca" },
] as const;

const OfcBenefits = () => {
  return (
    <section className="ofc-section" id="benefits">
      <div className="ofc-container">
        <div className="ofc-section__head ofc-section__head--center">
          <h2 className="ofc-title">Benefits</h2>
          <p className="ofc-lead">
            Your one-stop fulfillment hub for seamless success, handling both B2B
            and B2C orders with comprehensive solutions for storage, fulfillment,
            and shipping.
          </p>
        </div>

        <div className="ofc-benefits__grid">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div className="ofc-benefit" key={benefit.title}>
                <div className="ofc-benefit__icon" style={{ color: benefit.color }}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{benefit.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfcBenefits;
