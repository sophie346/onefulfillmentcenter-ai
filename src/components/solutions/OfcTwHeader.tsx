"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ofcNav } from "@/data/ofcNav";

type Props = {
  activeHref?: string;
};

const OfcTwHeader = ({ activeHref }: Props) => {
  const [open, setOpen] = useState(false);

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
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  isActive ? "text-[#ff6a3d]" : "text-white/85 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#newsletter"
          className="hidden rounded-full bg-[#2fd3c8] px-5 py-2.5 text-sm font-bold text-[#04201e] shadow-[0_10px_28px_rgba(47,211,200,0.25)] transition hover:-translate-y-0.5 md:inline-flex"
        >
          Request a Demo
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
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-sm font-semibold text-white"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/#newsletter"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#2fd3c8] px-5 py-3 text-sm font-bold text-[#04201e]"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default OfcTwHeader;
