"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ofcNav } from "@/data/ofcNav";

type Props = {
  activeHref?: string;
};

const OfcTwHeader = ({ activeHref }: Props) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b12]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="w-[170px] shrink-0" aria-label="One Fulfillment Center">
          <Image
            src="/assets/img/logo/onefulfillcenter-logo-light.png"
            alt="One Fulfillment Center"
            width={170}
            height={36}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {ofcNav.map((item) => {
            const isActive =
              activeHref === item.href ||
              item.children?.some((child) => child.href === activeHref);
            return (
              <div key={item.title} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    isActive ? "text-[#ff6a3d]" : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.title}
                  {item.children ? <ChevronDown size={14} aria-hidden="true" /> : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-50 grid min-w-[520px] grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-[#101826] p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-xl px-3 py-2 text-sm text-white/85 hover:bg-white/5 hover:text-white"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <Link
          href="#quote"
          className="hidden rounded-full bg-[#2fd3c8] px-5 py-2.5 text-sm font-bold text-[#04201e] md:inline-flex"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white xl:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="block h-0.5 w-4 bg-current shadow-[0_-6px_0_currentColor,0_6px_0_currentColor]" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#070b12] px-6 py-4 xl:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {ofcNav.map((item) => (
              <div key={item.title}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left text-sm font-semibold text-white"
                      onClick={() =>
                        setExpanded((current) => (current === item.title ? null : item.title))
                      }
                    >
                      {item.title}
                      <ChevronDown size={16} />
                    </button>
                    {expanded === item.title
                      ? item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-4 py-2 text-sm text-white/70"
                          >
                            {child.title}
                          </Link>
                        ))
                      : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-sm font-semibold text-white"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#2fd3c8] px-5 py-3 text-sm font-bold text-[#04201e]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default OfcTwHeader;
