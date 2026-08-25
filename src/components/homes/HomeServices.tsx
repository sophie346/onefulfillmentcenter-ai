"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICE_LANDINGS, servicePath } from "@/data/serviceLandings";
import { visualsForService } from "@/data/serviceVisuals";

const HomeServices = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const page = SERVICE_LANDINGS[active];
  const visual = visualsForService(page.slug)[0];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SERVICE_LANDINGS.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="spatial-block"
      id="services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <header className="spatial-block__head">
        <h2>Fulfillment services</h2>
        <p>Open a page for the operation you need—each one is a different floor workflow.</p>
      </header>

      <div className="home-services">
        <div className="home-services__tabs" role="tablist" aria-label="Fulfillment services">
          {SERVICE_LANDINGS.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? "is-active" : undefined}
              onClick={() => setActive(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="home-services__preview" role="tabpanel">
          <figure className="spatial-photo home-services__photo">
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(min-width: 900px) 520px, 100vw"
            />
            <figcaption>{visual.caption}</figcaption>
          </figure>
          <div>
            <h3>{page.name}</h3>
            <p>{page.definition.answer}</p>
            <Link className="spatial-text-link" href={servicePath(page.slug)}>
              Open {page.name} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
