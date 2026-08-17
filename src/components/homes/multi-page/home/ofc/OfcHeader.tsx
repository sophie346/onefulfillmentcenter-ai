"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ofcNav } from "@/data/ofcNav";

const OfcHeader = () => {
  const [open, setOpen] = useState(false);

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
            <Link key={item.title} href={item.href} className="ofc-header__link">
              {item.title}
            </Link>
          ))}
        </nav>

        <Link className="ofc-btn ofc-btn--primary ofc-header__cta" href="/#newsletter">
          Request a Demo
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
          <Link key={item.title} href={item.href} onClick={() => setOpen(false)}>
            {item.title}
          </Link>
        ))}
        <Link
          className="ofc-btn ofc-btn--primary"
          href="/#newsletter"
          onClick={() => setOpen(false)}
        >
          Request a Demo
        </Link>
      </div>
    </header>
  );
};

export default OfcHeader;
