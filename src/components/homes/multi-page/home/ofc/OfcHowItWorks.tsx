import Image from "next/image";

const STEPS = [
  {
    index: "01",
    title: "Warehouse",
    copy: "Our network of secure, scalable warehouses across multiple locations ensures faster delivery, reduced shipping costs, and optimized regional coverage with real-time inventory management.",
  },
  {
    index: "02",
    title: "Fulfillment",
    copy: "Efficient order processing includes accurate picking, packing, and shipping, with add-ons like custom labeling, kitting, and packaging options for reliable, personalized fulfillment.",
  },
  {
    index: "03",
    title: "Logistics",
    copy: "End-to-end logistics includes direct delivery via OneFulfillmentCenter and carriers like UPS, FedEx, and USPS for flexible, timely, and cost-effective shipping.",
  },
] as const;

const OfcHowItWorks = () => {
  return (
    <section className="ofc-section" id="how-it-works">
      <div className="ofc-container">
        <div className="ofc-how__grid">
          <div>
            <span className="ofc-eyebrow">Process</span>
            <h2 className="ofc-title">How It Works</h2>
            <p className="ofc-lead">
              Simplify order fulfillment for B2B and D2C businesses across all
              sales channels with a distributed warehouse network built for fast
              delivery and worry-free expansion.
            </p>

            <div className="ofc-how__steps">
              {STEPS.map((step) => (
                <div className="ofc-how__step" key={step.title}>
                  <div className="ofc-how__index">{step.index}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ofc-how__media">
            <Image
              src="/src/assets/images/warehouse-fulfillment-overview-hero.png"
              alt="Automated warehouse fulfillment operations"
              width={900}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfcHowItWorks;
