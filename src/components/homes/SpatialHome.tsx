import Image from "next/image";
import Link from "next/link";
import OfcTwHeader from "@/components/solutions/OfcTwHeader";
import { company, socialLinks } from "@/data/brandArchitecture";
import { SERVICE_LANDINGS, servicePath } from "@/data/serviceLandings";

const OPS = [
  {
    title: "Receive & store",
    copy: "ASN receiving, putaway, and location-level inventory.",
    href: "/warehousing/",
    src: "/assets/img/home/home-storage.jpg",
    alt: "Inventory put away into warehouse bin locations",
  },
  {
    title: "Pick, pack & ship",
    copy: "Scan-verified picking, packing, and carrier rate shopping.",
    href: "/pick-and-pack/",
    src: "/assets/img/home/home-wms.jpg",
    alt: "Warehouse associate scan-picking into a tote",
  },
  {
    title: "Dock & freight",
    copy: "Parcel, LTL, and FTL outbound from the same floor.",
    href: "/ecommerce-fulfillment/",
    src: "/assets/img/home/home-shipping.jpg",
    alt: "Pallet scanned onto a trailer at the shipping dock",
  },
  {
    title: "Returns & RMA",
    copy: "Inspect, restock, or disposition without stopping outbound.",
    href: "/returns-management/",
    src: "/assets/img/home/home-returns.jpg",
    alt: "Returned products inspected at a warehouse station",
  },
] as const;

const STEPS = [
  { n: "01", title: "Warehouse", copy: "Inbound freight is received, verified, and stored in tracked locations." },
  { n: "02", title: "Fulfill", copy: "Orders from storefronts and marketplaces pick, pack, and label in one queue." },
  { n: "03", title: "Deliver", copy: "Carriers take parcel, LTL, or FTL from the dock with tracking back to you." },
] as const;

const CHAIN = ["Vendor", "Warehouse", "OneFulfillCenter", "Retail / wholesale", "Customer"] as const;

const GAINS = [
  "B2B and B2C in one operation",
  "Live inventory across warehouses",
  "WMS, shipping, and returns connected",
  "Marketplace and storefront orders in one queue",
  "Rate shopping across parcel, LTL, and FTL",
  "Powered by OneChannelAdmin",
] as const;

const SpatialHome = () => {
  const phoneTel = `tel:${company.phone.replace(/[^+\d]/g, "")}`;

  return (
    <div className="ofc-tw spatial-page home-spatial">
      <OfcTwHeader activeHref="/" />

      <main>
        <section className="home-hero">
          <div className="spatial-wrap home-hero__grid">
            <div>
              <p className="spatial-kicker">One Fulfillment Center</p>
              <h1>Fulfillment that runs as one operation—not a stack of vendors.</h1>
              <p className="spatial-lede">
                Warehousing, inventory, pick and pack, shipping, and returns for B2B and B2C,
                on OneChannelAdmin. Orders from storefronts and marketplaces leave the same floor.
              </p>
              <div className="spatial-cta-row">
                <a className="spatial-btn spatial-btn--teal" href={`mailto:${company.investorEmail}`}>
                  Talk to a specialist
                </a>
                <Link className="spatial-btn spatial-btn--ghost" href="/ecommerce-fulfillment/">
                  Ecommerce fulfillment
                </Link>
              </div>
            </div>
            <figure className="spatial-photo home-hero__photo">
              <Image
                src="/assets/img/home/home-hero.jpg"
                alt="Fulfillment warehouse floor with pick aisles and packing stations"
                fill
                priority
                sizes="(min-width: 900px) 560px, 100vw"
              />
              <figcaption>One floor for storage, pick, pack, and outbound</figcaption>
            </figure>
          </div>
        </section>

        <div className="spatial-wrap home-stack">
          <section className="spatial-block" id="operations">
            <header className="spatial-block__head">
              <h2>What happens on the floor</h2>
              <p>Each block is a live warehouse motion—not a software mock.</p>
            </header>
            <div className="home-ops">
              {OPS.map((item) => (
                <Link key={item.title} href={item.href} className="home-ops__card">
                  <span className="home-ops__media">
                    <Image src={item.src} alt={item.alt} fill sizes="(min-width: 900px) 25vw, 50vw" />
                  </span>
                  <strong>{item.title}</strong>
                  <span>{item.copy}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="spatial-block" id="how-it-works">
            <div className="home-how">
              <div>
                <p className="spatial-kicker">How it works</p>
                <h2>Factory to customer on one network</h2>
                <ol className="spatial-spine">
                  {STEPS.map((step) => (
                    <li key={step.title}>
                      <span>{step.n}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <ul className="home-chain">
                  {CHAIN.map((node) => (
                    <li key={node}>{node}</li>
                  ))}
                </ul>
              </div>
              <figure className="spatial-photo home-how__photo">
                <Image
                  src="/assets/img/home/home-platform.jpg"
                  alt="Operations desk overlooking warehouse inventory"
                  fill
                  sizes="(min-width: 900px) 420px, 100vw"
                />
                <figcaption>Inventory, orders, and the floor on OneChannelAdmin</figcaption>
              </figure>
            </div>
          </section>

          <section className="spatial-block" id="services">
            <header className="spatial-block__head">
              <h2>Fulfillment services</h2>
              <p>Open a page for the operation you need—each one is a different floor workflow.</p>
            </header>
            <div className="home-services">
              {SERVICE_LANDINGS.map((item) => (
                <Link key={item.slug} href={servicePath(item.slug)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </section>

          <section className="spatial-block" id="why">
            <header className="spatial-block__head">
              <h2>Why brands run fulfillment here</h2>
            </header>
            <ul className="spatial-gain">
              {GAINS.map((item) => (
                <li key={item}>
                  <span className="home-gain-mark" aria-hidden="true" />
                  <div>
                    <strong>{item}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="spatial-block" id="connect">
            <header className="spatial-block__head">
              <p className="spatial-kicker">Channels</p>
              <h2>Connect what you already sell on</h2>
            </header>
            <div className="home-connect">
              <p>
                <strong>Storefronts</strong> Shopify, Shopify Plus, WooCommerce, BigCommerce, Magento
              </p>
              <p>
                <strong>Marketplaces</strong> Amazon, Walmart, eBay, TikTok Shop, Etsy
              </p>
              <p>
                <strong>ERP &amp; POS</strong> OneChannelAdmin, NetSuite, QuickBooks, Xero
              </p>
              <p>
                <strong>Carriers</strong> UPS, FedEx, USPS, DHL · parcel, LTL, FTL
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="home-foot">
        <div className="spatial-wrap home-foot__grid">
          <div>
            <Image
              src="/assets/img/logo/onefulfillcenter-logo.png"
              alt="One Fulfillment Center"
              width={168}
              height={36}
            />
            <p>
              {company.address}
              <br />
              <a href={phoneTel}>{company.phone}</a>
              <br />
              <a href={`mailto:${company.investorEmail}`}>{company.investorEmail}</a>
            </p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {SERVICE_LANDINGS.slice(0, 6).map((item) => (
                <li key={item.slug}>
                  <Link href={servicePath(item.slug)}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>More</h2>
            <ul>
              {SERVICE_LANDINGS.slice(6).map((item) => (
                <li key={item.slug}>
                  <Link href={servicePath(item.slug)}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
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
