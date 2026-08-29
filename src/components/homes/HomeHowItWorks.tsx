"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

const STEPS = [
  {
    id: "warehouse",
    title: "Warehouse",
    color: "#3b82f6",
    icon: "/assets/img/home/how/icon-warehouse.png",
    visual: "/assets/img/home/how/visual-warehouse.png",
    alt: "Warehouse robotics and aisle operations",
    copy: "Our network of secure, scalable warehouses across multiple locations ensures faster delivery, reduced shipping costs, and optimized regional coverage with real-time inventory management.",
  },
  {
    id: "fulfillment",
    title: "Fulfillment",
    color: "#f97316",
    icon: "/assets/img/home/how/icon-fulfillment.png",
    visual: "/assets/img/home/how/visual-fulfillment.png",
    alt: "Automated fulfillment and last-mile delivery",
    copy: "Efficient order processing includes accurate picking, packing, and shipping, with add-ons like custom labeling, kitting, and packaging options, ensuring reliable, personalized fulfillment to meet brand needs",
  },
  {
    id: "logistics",
    title: "Logistics",
    color: "#22c55e",
    icon: "/assets/img/home/how/icon-logistics.png",
    visual: "/assets/img/home/how/visual-logistics.png",
    alt: "Local delivery and multimodal logistics network",
    copy: "End-to-end logistics includes direct delivery via OneFulfillmentCenter and using carriers like UPS, FedEx, and USPS, ensuring flexible, timely, and cost-effective solutions tailored to your needs.",
  },
] as const;

const HomeHowItWorks = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const step = STEPS[active];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % STEPS.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="spatial-block home-how-section"
      id="how-it-works"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <header className="home-how__head">
        <h2>How It Works</h2>
        <p className="spatial-lede">
          Simplify order fulfillment for B2B and D2C businesses across all sales channels with
          OneChannelAdmin&apos;s distributed warehouse network, enabling fast delivery and
          worry-free business expansion.
        </p>
      </header>

      <div className="home-how__panel">
        <div className="home-how__steps" role="tablist" aria-label="How it works steps">
          {STEPS.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`home-how__step${isActive ? " is-active" : ""}`}
                style={{ "--how-accent": item.color } as CSSProperties}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className="home-how__icon" aria-hidden="true">
                  <Image src={item.icon} alt="" width={72} height={72} />
                </span>
                <span className="home-how__copy">
                  <strong>{item.title}</strong>
                  <span>{item.copy}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="home-how__visual" role="tabpanel" aria-live="polite">
          <Image
            key={step.id}
            src={step.visual}
            alt={step.alt}
            width={600}
            height={520}
            className="home-how__visual-img"
            sizes="(min-width: 900px) 520px, 100vw"
            priority={active === 0}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
