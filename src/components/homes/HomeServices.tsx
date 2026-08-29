"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties, type ComponentType } from "react";
import {
  Archive,
  ArrowLeftRight,
  ArrowRight,
  Boxes,
  Building2,
  Package,
  PackageCheck,
  Repeat,
  RotateCcw,
  ShoppingBag,
  Store,
  Undo2,
  Warehouse,
} from "lucide-react";
import { SERVICE_LANDINGS, servicePath } from "@/data/serviceLandings";
import { visualsForService } from "@/data/serviceVisuals";

type IconType = ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;

const SERVICE_ICONS: Record<string, { icon: IconType; color: string }> = {
  "ecommerce-fulfillment": { icon: ShoppingBag, color: "#2fd3c8" },
  "b2b-fulfillment": { icon: Store, color: "#60a5fa" },
  "amazon-fba-prep": { icon: Package, color: "#fbbf24" },
  warehousing: { icon: Warehouse, color: "#fb923c" },
  kitting: { icon: Boxes, color: "#a78bfa" },
  "pick-and-pack": { icon: PackageCheck, color: "#34d399" },
  "reverse-logistics": { icon: RotateCcw, color: "#f472b6" },
  "returns-management": { icon: Undo2, color: "#f87171" },
  "cross-docking": { icon: ArrowLeftRight, color: "#38bdf8" },
  "inventory-storage": { icon: Archive, color: "#c084fc" },
  "subscription-fulfillment": { icon: Repeat, color: "#2dd4bf" },
  "retail-fulfillment": { icon: Building2, color: "#fdba74" },
};

const HomeServices = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const page = SERVICE_LANDINGS[active];
  const visual = visualsForService(page.slug)[0];
  const accent = SERVICE_ICONS[page.slug]?.color ?? "#2fd3c8";

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SERVICE_LANDINGS.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="spatial-block"
      id="services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <header className="spatial-block__head home-services__head">
        <h2>Fulfillment services</h2>
        <p>Open a page for the operation you need—each one is a different floor workflow.</p>
      </header>

      <div className="home-services">
        <div className="home-services__rail" role="tablist" aria-label="Fulfillment services">
          {SERVICE_LANDINGS.map((item, index) => {
            const meta = SERVICE_ICONS[item.slug] ?? {
              icon: Package,
              color: "#2fd3c8",
            };
            const Icon = meta.icon;
            const isActive = active === index;
            return (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`home-services__item${isActive ? " is-active" : ""}`}
                style={{ "--svc-accent": meta.color } as CSSProperties}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className="home-services__icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span className="home-services__label">{item.name}</span>
              </button>
            );
          })}
        </div>

        <article
          className="home-services__stage"
          role="tabpanel"
          style={{ "--svc-accent": accent } as CSSProperties}
        >
          <figure className="spatial-photo home-services__photo">
            <Image
              key={page.slug}
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(min-width: 900px) 640px, 100vw"
            />
            <figcaption>{visual.caption}</figcaption>
          </figure>
          <div className="home-services__copy">
            <p className="home-services__eyebrow">Floor workflow</p>
            <h3>{page.name}</h3>
            <p>{page.definition.answer}</p>
            <Link className="home-services__cta" href={servicePath(page.slug)}>
              Open {page.name}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeServices;
