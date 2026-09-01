"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const GROUPS = [
  {
    id: "warehouse",
    label: "Warehouse Expenses",
    src: "/assets/img/home/home-process-expenses.jpg",
    alt: "Warehouse facility systems including security and maintenance",
    items: [
      "Utilities",
      "Security",
      "Insurance",
      "Licenses and Repairs",
      "Waste Disposal",
      "HR, Legal, Compliance and more",
      "Employee Wages and Benefits",
      "Lease",
      "Maintenance and Repairs",
      "Automation Technology",
      "Major Repairs or Upgrades",
      "Supplies",
      "Equipment Rentals",
      "Training",
      "Equipment Depreciation",
    ],
  },
  {
    id: "software",
    label: "Software & Technology",
    src: "/assets/img/home/home-platform.jpg",
    alt: "Warehouse operations software at the control desk",
    items: [
      "WMS Software Subscription",
      "Training & Development & more",
      "Shipping Carriers Integration",
      "3PL Software Subscription",
    ],
  },
  {
    id: "marketplaces",
    label: "Selling on Marketplaces",
    src: "/assets/img/home/home-process-marketplaces.jpg",
    alt: "Marketplace orders packed and labeled at the station",
    items: [
      "Sales Channels Integration",
      "Product Marketing",
      "SEO",
      "E-commerce Digital Marketing",
    ],
  },
  {
    id: "fulfillment",
    label: "Fulfillment",
    src: "/assets/img/home/home-wms.jpg",
    alt: "Pick and pack work on the fulfillment floor",
    items: [
      "Unloading",
      "Picking",
      "Batch picking",
      "Single-order picking",
      "SKU accuracy checks",
      "Pick path optimization",
      "Packing & More",
      "Custom packaging",
      "Branded inserts",
      "Kitting & assembly",
      "Fragile handling",
      "Custom labeling",
      "Gift wrap options",
      "Quality inspection",
      "Daily reporting",
      "Latest Automation AI Robots",
      "Technology and Equipment Maintenance",
      "Return authorization",
      "Inspection & grading",
      "Restock workflows",
    ],
  },
] as const;

const columnsFrom = (items: readonly string[]) => {
  const columns: string[][] = [[], [], []];
  items.forEach((item, index) => {
    columns[index % 3].push(item);
  });
  return columns;
};

const HomeProcess = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % GROUPS.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const group = GROUPS[active];

  return (
    <section
      className="spatial-block home-process-section"
      id="processes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="home-process__intro home-process__intro--center">
        <h2>All these processes &amp; Expenses are taken care by Onefulfillcenter</h2>
      </div>

      <div className="home-process__tabs" role="tablist" aria-label="Process categories">
        {GROUPS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "is-active" : undefined}
            onClick={() => setActive(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="home-process__panel" role="tabpanel">
        <div className="home-process__cols">
          {columnsFrom(group.items).map((column, index) => (
            <ul key={index}>
              {column.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <figure className="spatial-photo home-process__photo">
          <Image src={group.src} alt={group.alt} fill sizes="(min-width: 900px) 380px, 100vw" />
        </figure>
      </div>
    </section>
  );
};

export default HomeProcess;
