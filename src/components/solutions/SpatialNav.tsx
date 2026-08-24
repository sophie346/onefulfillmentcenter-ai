"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#process", label: "Process" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#platform", label: "Platform" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

const SpatialNav = () => {
  const [active, setActive] = useState("#overview");

  useEffect(() => {
    const ids = LINKS.map((link) => link.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="spatial-nav" aria-label="On this page">
      <div className="spatial-nav__track">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "is-active" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SpatialNav;
