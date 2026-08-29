"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ofcNav } from "@/data/ofcNav";
import { company } from "@/data/brandArchitecture";

type Props = {
  activeHref?: string;
};

const OfcTwHeader = ({ activeHref }: Props) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="spatial-header">
      <div className="spatial-wrap spatial-header__bar">
        <Link href="/" className="spatial-header__logo" aria-label="One Fulfillment Center">
          <Image
            src="/assets/img/logo/onefulfillcenter-logo-light.png"
            alt="One Fulfillment Center"
            width={170}
            height={36}
            priority
          />
        </Link>

        <nav className="spatial-header__nav" aria-label="Primary">
          {ofcNav.map((item) => {
            const isActive =
              activeHref === item.href ||
              item.children?.some((child) => child.href === activeHref);
            return (
              <div key={item.title} className="spatial-header__item">
                <Link href={item.href} className={isActive ? "is-active" : undefined}>
                  {item.title}
                  {item.children ? <ChevronDown size={14} aria-hidden="true" /> : null}
                </Link>
                {item.children ? (
                  <div className="spatial-header__menu">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <Link href={`mailto:${company.investorEmail}`} className="spatial-btn spatial-btn--teal spatial-header__cta">
          Talk to a specialist
        </Link>

        <button
          type="button"
          className="spatial-header__burger"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>

      {open ? (
        <div className="spatial-header__mobile">
          {ofcNav.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded((current) => (current === item.title ? null : item.title))
                    }
                  >
                    {item.title}
                    <ChevronDown size={16} />
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
          <Link href={`mailto:${company.investorEmail}`} className="spatial-btn spatial-btn--teal" onClick={() => setOpen(false)}>
            Talk to a specialist
          </Link>
        </div>
      ) : null}
    </header>
  );
};

export default OfcTwHeader;
