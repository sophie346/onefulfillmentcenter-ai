import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  Car,
  Flower2,
  Globe2,
  Hammer,
  HeartPulse,
  Layers3,
  Mountain,
  Package,
  PackageCheck,
  RotateCcw,
  Shirt,
  Ship,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Warehouse,
} from "lucide-react";
import OfcTwHeader from "@/components/solutions/OfcTwHeader";
import HomeProcess from "@/components/homes/HomeProcess";
import HomeServices from "@/components/homes/HomeServices";
import HomeNewsletter from "@/components/homes/HomeNewsletter";
import { company, socialLinks } from "@/data/brandArchitecture";
import { SERVICE_NAV } from "@/data/ofcNav";

const HOW_STEPS = [
  {
    index: "01",
    title: "Warehouse",
    copy: "Our network of secure, scalable warehouses across multiple locations ensures faster delivery, reduced shipping costs, and optimized regional coverage with real-time inventory management.",
  },
  {
    index: "02",
    title: "Fulfillment",
    copy: "Efficient order processing includes accurate picking, packing, and shipping, with add-ons like custom labeling, kitting, and packaging options for reliable, personalized fulfillment.",
  },
  {
    index: "03",
    title: "Logistics",
    copy: "End-to-end logistics includes direct delivery via OneFulfillmentCenter and carriers like UPS, FedEx, and USPS for flexible, timely, and cost-effective shipping.",
  },
] as const;

const CHAIN = [
  "Manufacturer / Vendor",
  "Warehouse",
  "One Fulfillment Center",
  "Retailers / Wholesale",
  "Customers",
] as const;

const BENEFITS = [
  { title: "Multiple warehouses", icon: Warehouse, color: "#0f766e" },
  { title: "Best shipping prices", icon: Ship, color: "#e85d04" },
  { title: "Unlimited products", icon: Boxes, color: "#0369a1" },
  { title: "Robust fulfillment software", icon: Layers3, color: "#7c3aed" },
  { title: "Inventory management", icon: PackageCheck, color: "#15803d" },
  { title: "Grow your business globally", icon: Globe2, color: "#b45309" },
  { title: "Order processing", icon: ShoppingBag, color: "#be185d" },
  { title: "Wholesale fulfillment", icon: Store, color: "#0e7490" },
  { title: "Returns processing", icon: RotateCcw, color: "#b91c1c" },
  { title: "Carrier-ready logistics", icon: Truck, color: "#4338ca" },
] as const;

const SOFTWARE_TILES = [
  { title: "Orders today", copy: "1,284 fulfilled · 98% on-time" },
  { title: "Inventory", copy: "Live SKU sync" },
  { title: "Returns", copy: "42 in process" },
  { title: "Carriers", copy: "UPS · FedEx · USPS" },
  { title: "Channels", copy: "Amazon · Shopify" },
] as const;

const LOGOS = [
  { src: "/assets/img/brand/one/brand-logo-1.png", alt: "Integration partner 1" },
  { src: "/assets/img/brand/one/brand-logo-2.png", alt: "Integration partner 2" },
  { src: "/assets/img/brand/one/brand-logo-3.png", alt: "Integration partner 3" },
  { src: "/assets/img/brand/one/brand-logo-4.png", alt: "Integration partner 4" },
  { src: "/assets/img/brand/one/brand-logo-5.png", alt: "Integration partner 5" },
  { src: "/assets/img/brand/one/brand-logo-6.png", alt: "Integration partner 6" },
  { src: "/assets/img/brand/one/brand-logo-7.png", alt: "Integration partner 7" },
] as const;

const INDUSTRIES = [
  {
    title: "Apparel",
    copy: "Designate product variations like color or size and fulfill fashion orders with speed and accuracy.",
    icon: Shirt,
    color: "#be185d",
  },
  {
    title: "Arts & Crafts Supply",
    copy: "Handle diverse craft inventory—from beads to kits—with organized storage and flexible shipping.",
    icon: Sparkles,
    color: "#7c3aed",
  },
  {
    title: "Auto Spare Parts",
    copy: "Support growing demand for eCommerce car parts with reliable SKU tracking and wholesale fulfillment.",
    icon: Car,
    color: "#0369a1",
  },
  {
    title: "Beauty & Cosmetics",
    copy: "Scale beauty supply fulfillment as social-driven demand grows, with careful packaging and returns support.",
    icon: Flower2,
    color: "#db2777",
  },
  {
    title: "Building Supplies",
    copy: "Ship interior and exterior project materials with warehouse capacity built for bulkier goods.",
    icon: Hammer,
    color: "#b45309",
  },
  {
    title: "Camping & Outdoor",
    copy: "Keep outdoor and hunting equipment moving through peak seasons with multi-warehouse coverage.",
    icon: Mountain,
    color: "#15803d",
  },
  {
    title: "Consumer Goods",
    copy: "Stay ahead of short shelf-life inventory with real-time stock visibility and fast order turnaround.",
    icon: Package,
    color: "#0f766e",
  },
  {
    title: "Dental & Medical",
    copy: "Fulfill specialized equipment and supplies where availability and delivery timing matter most.",
    icon: HeartPulse,
    color: "#b91c1c",
  },
] as const;

const phoneTel = `tel:${company.phone.replace(/[^+\d]/g, "")}`;

const FOOTER_COLS = [
  {
    title: "Fulfillment",
    links: SERVICE_NAV.slice(0, 6).map((item) => ({ label: item.title, href: item.href })),
  },
  {
    title: "More services",
    links: SERVICE_NAV.slice(6).map((item) => ({ label: item.title, href: item.href })),
  },
  {
    title: "Get Started",
    links: [{ label: "Request a Demo", href: "#newsletter" }],
  },
  {
    title: "Contact",
    links: [
      { label: company.phone, href: phoneTel },
      { label: company.investorEmail, href: `mailto:${company.investorEmail}` },
    ],
  },
] as const;

const SpatialHome = () => {
  return (
    <div className="ofc-tw spatial-page home-spatial">
      <OfcTwHeader activeHref="/" />

      <main>
        <section className="home-hero">
          <div className="spatial-wrap home-hero__grid">
            <div>
              <p className="spatial-kicker">
                One <span>Fulfillment</span> Center
              </p>
              <h1>
                Next Generation <em>Fulfillment</em> Center
              </h1>
              <p className="spatial-lede">
                For eCommerce business — omni-channel fulfillment with a distributed warehouse
                network that helps you grow, reach more customers, and deliver orders swiftly.
              </p>
              <div className="spatial-cta-row">
                <Link className="spatial-btn spatial-btn--teal" href="#newsletter">
                  Request a Demo
                </Link>
                <Link className="spatial-btn spatial-btn--ghost" href="#how-it-works">
                  How it works
                </Link>
              </div>
            </div>
            <figure className="spatial-photo home-hero__photo">
              <Image
                src="/assets/img/home/home-hero.jpg"
                alt="Fulfillment warehouse floor with pick aisles and packing stations"
                fill
                priority
                sizes="(min-width: 900px) 640px, 100vw"
              />
            </figure>
          </div>
        </section>

        <div className="spatial-wrap home-stack">
          <HomeProcess />
          <HomeServices />

          <section className="spatial-block" id="how-it-works">
            <div className="home-how">
              <div>
                <p className="spatial-kicker">Process</p>
                <h2>How It Works</h2>
                <p className="spatial-lede">
                  Simplify order fulfillment for B2B and D2C businesses across all sales channels
                  with a distributed warehouse network built for fast delivery and worry-free
                  expansion.
                </p>
                <ol className="spatial-spine">
                  {HOW_STEPS.map((step) => (
                    <li key={step.title}>
                      <span>{step.index}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <figure className="spatial-photo home-how__photo">
                <Image
                  src="/assets/img/home/home-shipping.jpg"
                  alt="Outbound freight staged at the shipping dock"
                  fill
                  sizes="(min-width: 900px) 480px, 100vw"
                />
              </figure>
            </div>
          </section>

          <section className="spatial-block" id="supply-chain">
            <div className="home-chain-block">
              <div>
                <h2>Products Supply Chain From Factory to Customers</h2>
                <p className="spatial-lede">
                  Move inventory from factory to warehouse to fulfillment to customers with one
                  operating network for B2B and D2C commerce.
                </p>
              </div>
              <div className="home-chain-block__stage">
                <figure className="spatial-photo home-chain-block__photo">
                  <Image
                    src="/assets/img/home/home-supply-chain.jpg"
                    alt="Inbound pallets moving from factory freight into warehouse fulfillment"
                    fill
                    sizes="(min-width: 900px) 1400px, 100vw"
                  />
                </figure>
                <ol className="home-chain">
                  {CHAIN.map((node, index) => (
                    <li key={node}>
                      <span>{index + 1}</span>
                      {node}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className="spatial-block" id="benefits">
            <header className="spatial-block__head">
              <h2>Benefits</h2>
              <p>
                Your one-stop fulfillment hub for seamless success, handling both B2B and B2C
                orders with comprehensive solutions for storage, fulfillment, and shipping.
              </p>
            </header>
            <div className="home-benefits">
              {BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.title}>
                    <Icon size={20} style={{ color: benefit.color }} aria-hidden="true" />
                    <h3>{benefit.title}</h3>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="spatial-block" id="software">
            <div className="home-software">
              <div className="home-software__copy">
                <div>
                  <p className="spatial-kicker">Platform</p>
                  <h2>Onefulfillcenter Software For Your Supply Chain</h2>
                  <p className="spatial-lede">
                    An advanced, scalable platform that integrates across sales channels, 3PL
                    partners, shipping carriers, and marketing tools. Centralize inventory
                    management with an intuitive dashboard built for everyday operations.
                  </p>
                </div>
                <Link className="spatial-btn spatial-btn--teal" href="#newsletter">
                  Get Started
                </Link>
              </div>
              <div className="home-software__stage">
                <figure className="spatial-photo home-software__photo">
                  <Image
                    src="/assets/img/home/home-platform.jpg"
                    alt="Operations desk overlooking warehouse inventory"
                    fill
                    sizes="(min-width: 900px) 1400px, 100vw"
                  />
                </figure>
                <ul className="home-software__tiles">
                  {SOFTWARE_TILES.map((tile) => (
                    <li key={tile.title}>
                      <strong>{tile.title}</strong>
                      <span>{tile.copy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="spatial-block" id="integrations">
            <header className="spatial-block__head">
              <p className="spatial-kicker">Connections</p>
              <h2>
                Connect to your <em>favourite apps</em>
              </h2>
              <p>
                Plug Onefulfillcenter into the sales channels, carriers, and tools your team
                already runs.
              </p>
            </header>
            <div className="home-logos">
              {LOGOS.map((logo) => (
                <div key={logo.src}>
                  <Image src={logo.src} alt={logo.alt} width={72} height={40} />
                </div>
              ))}
            </div>
          </section>

          <section className="spatial-block" id="warehouse-locations">
            <div className="home-locations">
              <figure className="spatial-photo home-locations__photo">
                <Image
                  src="/assets/img/home/home-locations.jpg"
                  alt="Operations map of United States warehouse coverage"
                  fill
                  sizes="(min-width: 900px) 720px, 100vw"
                />
                <figcaption>Coverage planned across the United States</figcaption>
              </figure>
              <div>
                <p className="spatial-kicker">Network</p>
                <h2>Warehouse Locations</h2>
                <p className="spatial-lede">
                  Distributed warehouse coverage across the United States for faster regional
                  delivery, lower shipping friction, and scalable inventory placement.
                </p>
                <ul className="home-locations__points">
                  <li>
                    <strong>Faster regional delivery</strong>
                    <span>Place inventory closer to demand across the country.</span>
                  </li>
                  <li>
                    <strong>Lower shipping friction</strong>
                    <span>Shorter lanes and fewer hops from warehouse to customer.</span>
                  </li>
                  <li>
                    <strong>Scalable inventory placement</strong>
                    <span>Grow storage where order volume needs it.</span>
                  </li>
                </ul>
                <p className="home-locations__hq">
                  Operations office: {company.address}
                </p>
              </div>
            </div>
          </section>

          <section className="spatial-block" id="industries">
            <header className="spatial-block__head">
              <h2>Industries</h2>
              <p>
                Companies across many industries use the Onefulfillcenter growth platform to
                reach their eCommerce goals.
              </p>
            </header>
            <div className="home-industries">
              {INDUSTRIES.map((industry) => {
                const Icon = industry.icon;
                return (
                  <article key={industry.title}>
                    <div style={{ background: `${industry.color}14`, color: industry.color }}>
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{industry.title}</h3>
                      <p>{industry.copy}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <HomeNewsletter />
        </div>
      </main>

      <footer className="home-foot">
        <div className="spatial-wrap home-foot__grid home-foot__grid--wide">
          <div>
            <Link href="/">
              <Image
                src="/assets/img/logo/onefulfillcenter-logo.png"
                alt="One Fulfillment Center"
                width={180}
                height={38}
              />
            </Link>
            <p>
              Distributed fulfillment infrastructure for brands and retailers: warehousing,
              inventory storage, B2B/B2C order fulfillment, reverse logistics, and shipping
              support.
            </p>
            <p>
              <Link href={phoneTel}>{company.phone}</Link>
            </p>
            <p>
              <Link href={`mailto:${company.investorEmail}`}>{company.investorEmail}</Link>
            </p>
            <p>{company.address}</p>
          </div>
          {FOOTER_COLS.map((column) => (
            <div key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="spatial-wrap home-foot__bottom">
          <p>© {new Date().getFullYear()} One Fulfillment Center</p>
          <div className="home-foot__social">
            {socialLinks.map((item) => (
              <Link key={item.title} href={item.href} aria-label={item.title} target="_blank" rel="noreferrer">
                <i className={item.icon} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpatialHome;
