"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ofcNav } from "@/data/ofcNav";

const OfcHeader = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="ofc-header">
      <div className="ofc-container ofc-header__inner">
        <Link className="ofc-header__logo" href="/" aria-label="One Fulfillment Center">
          <Image
            src="/assets/img/logo/onefulfillcenter-logo-light.png"
            alt="One Fulfillment Center"
            width={188}
            height={40}
            priority
          />
        </Link>

        <nav className="ofc-header__nav" aria-label="Primary">
          {ofcNav.map((item) => (
            <div
              key={item.title}
              className={`ofc-header__item ${item.children ? "has-dropdown" : ""}`}
            >
              <Link href={item.href} className="ofc-header__link">
                <span>{item.title}</span>
                {item.children ? <ChevronDown size={14} aria-hidden="true" /> : null}
              </Link>
              {item.children ? (
                <div className="ofc-header__dropdown ofc-header__dropdown--solutions" role="menu">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      role="menuitem"
                      className="ofc-header__dropdown-link"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <Link className="ofc-btn ofc-btn--primary ofc-header__cta" href="/ecommerce-fulfillment/#quote">
          Get a Quote
        </Link>

        <button
          type="button"
          className="ofc-header__menu-btn"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>

      <div className={`ofc-header__drawer ${open ? "is-open" : ""}`}>
        {ofcNav.map((item) => (
          <div key={item.title} className="ofc-header__drawer-group">
            {item.children ? (
              <>
                <button
                  type="button"
                  className="ofc-header__drawer-toggle"
                  onClick={() =>
                    setExpanded((current) => (current === item.title ? null : item.title))
                  }
                >
                  <span>{item.title}</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </button>
                {expanded === item.title
                  ? item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                        {child.title}
                      </Link>
                    ))
                  : null}
              </>
            ) : (
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.title}
              </Link>
            )}
          </div>
        ))}
        <Link className="ofc-btn ofc-btn--primary" href="/ecommerce-fulfillment/#quote" onClick={() => setOpen(false)}>
          Get a Quote
        </Link>
      </div>
    </header>
  );
};

export default OfcHeader;
