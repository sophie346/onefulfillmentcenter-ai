import Link from "next/link";
import {
  Boxes,
  CheckCircle2,
  Cpu,
  Plug,
  ShieldCheck,
  Truck,
} from "lucide-react";
import OfcTwHeader from "./OfcTwHeader";
import QuoteForm from "./QuoteForm";
import {
  relatedServices,
  servicePath,
  type ServiceLanding,
} from "@/data/serviceLandings";
import { company } from "@/data/brandArchitecture";

const TRUST = [
  "Fast onboarding",
  "Real-time inventory visibility",
  "Multi-channel fulfillment",
  "B2B + B2C",
  "API & ecommerce integrations",
];

const BENEFITS = [
  { title: "Faster fulfillment", copy: "Reduce time between order creation and carrier handoff." },
  { title: "Lower operational complexity", copy: "Avoid running warehouse staffing, systems, and infrastructure yourself." },
  { title: "Better inventory accuracy", copy: "Know what is available and where it is stored." },
  { title: "Lower shipping complexity", copy: "Compare services and route orders efficiently." },
  { title: "Easier scaling", copy: "Grow SKUs, channels, and volume without rebuilding operations." },
  { title: "Better customer experience", copy: "Accurate orders, faster delivery, and easier returns." },
];

const TECH = [
  { title: "Connected inventory", copy: "Real-time inventory across warehouses and channels." },
  { title: "Order management", copy: "B2B, B2C, and marketplace orders in one environment." },
  { title: "Warehouse management", copy: "Receiving, putaway, picking, packing, and inventory movement." },
  { title: "AI inventory intelligence", copy: "Forecast demand and identify replenishment needs." },
  { title: "Shipping automation", copy: "Carrier selection, labels, tracking, and delivery status." },
  { title: "Analytics", copy: "Monitor orders, inventory, speed, shipping cost, returns, and warehouse performance." },
];

const INTEGRATIONS = [
  { title: "Ecommerce", items: ["Shopify", "Shopify Plus", "WooCommerce", "BigCommerce", "Magento"] },
  { title: "Marketplaces", items: ["Amazon", "Walmart", "eBay", "TikTok Shop", "Etsy"] },
  { title: "ERP & accounting", items: ["OneChannelAdmin", "NetSuite", "QuickBooks", "Xero"] },
  { title: "Shipping", items: ["UPS", "FedEx", "USPS", "DHL"] },
];

const AUDIENCES = [
  { title: "Ecommerce brands", copy: "Direct-to-consumer businesses scaling order volume." },
  { title: "B2B companies", copy: "Wholesalers, distributors, and dealer networks." },
  { title: "Marketplace sellers", copy: "Amazon, Walmart, eBay, and TikTok sellers." },
  { title: "Retail brands", copy: "Store replenishment and retail distribution." },
  { title: "Manufacturers", copy: "Finished-goods storage and distribution." },
  { title: "Enterprise businesses", copy: "Complex multi-channel and multi-location fulfillment." },
];

const INDUSTRIES = [
  "Apparel",
  "Beauty & Cosmetics",
  "Consumer Electronics",
  "Auto Parts",
  "Health & Wellness",
  "Home & Garden",
  "Jewelry",
  "Toys",
  "Sporting Goods",
  "Pet Products",
  "Medical Equipment",
  "CPG",
];

const WHY = [
  { title: "One connected platform", copy: "Inventory, orders, warehouse operations, and fulfillment work together." },
  { title: "B2B + B2C", copy: "Support wholesale, retail, ecommerce, and marketplace fulfillment." },
  { title: "Multi-channel operations", copy: "Manage multiple commerce channels from one fulfillment environment." },
  { title: "Advanced inventory tracking", copy: "SKU, lot, serial, batch, and expiration tracking." },
  { title: "Flexible fulfillment services", copy: "Warehousing, kitting, marketplace prep, returns, and distribution." },
  { title: "Data visibility", copy: "Track warehouse and fulfillment performance in real time." },
];

const COMPARISON = [
  ["Inventory management", "Yes", "Varies"],
  ["B2B fulfillment", "Yes", "Varies"],
  ["B2C fulfillment", "Yes", "Varies"],
  ["Marketplace fulfillment", "Yes", "Varies"],
  ["Returns", "Yes", "Varies"],
  ["Kitting", "Yes", "Varies"],
  ["Technology platform", "Integrated", "Varies"],
  ["Multi-channel", "Yes", "Varies"],
];

const ONBOARDING = [
  { title: "Fulfillment assessment", copy: "We review order volume, SKUs, storage, channels, shipping, and returns." },
  { title: "Integration", copy: "Connect ecommerce, marketplace, or ERP systems." },
  { title: "Send inventory", copy: "Coordinate receiving and warehouse intake." },
  { title: "Test orders", copy: "Verify inventory and order workflows." },
  { title: "Go live", copy: "Begin processing production orders." },
];

const PRICING_FACTORS = [
  "Monthly order volume",
  "Number of SKUs",
  "Product dimensions and weight",
  "Storage requirements",
  "Average items per order",
  "Packaging",
  "Shipping destinations",
  "Returns volume",
  "Kitting requirements",
];

const COST_CATEGORIES = [
  "Receiving",
  "Storage",
  "Pick and pack",
  "Packaging",
  "Shipping",
  "Kitting",
  "Returns",
  "Special projects",
];

const ServiceLandingPage = ({ page }: { page: ServiceLanding }) => {
  const related = relatedServices(page);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="ofc-tw min-h-screen bg-[#070b12] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <OfcTwHeader activeHref={servicePath(page.slug)} />

      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/55">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="px-2">→</span>
            <span>Fulfillment Services</span>
            <span className="px-2">→</span>
            <span className="text-white">{page.name}</span>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,106,61,0.16),transparent_55%),radial-gradient(ellipse_at_15%_80%,rgba(47,211,200,0.1),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#2fd3c8]">
                {page.primaryKeyword}
              </p>
              <h1 className="max-w-[16ch] text-4xl font-extrabold tracking-[-0.05em] md:text-6xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#9aa6b8] md:text-lg">
                {page.heroCopy}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#quote" className="rounded-full bg-[#2fd3c8] px-6 py-3 text-sm font-bold text-[#04201e]">
                  Get a Fulfillment Quote
                </Link>
                <Link href={`mailto:${company.investorEmail}`} className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold">
                  Talk to a Fulfillment Specialist
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-bold text-[#2fd3c8]">{page.definition.question}</p>
              <p className="mt-3 text-sm leading-7 text-white/80">{page.definition.answer}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0b1220]">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-6 py-6">
            {TRUST.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/80">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{page.problemsTitle}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {page.problems.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-4 text-lg font-bold">{group.title}</h3>
                  <ul className="space-y-2 text-sm text-[#9aa6b8]">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#ff6a3d]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-7 text-white/70">
              OneFulfillCenter brings warehousing, inventory, fulfillment, shipping, and returns together into one operation.
            </p>
            <Link href="#how-it-works" className="mt-6 inline-flex text-sm font-bold text-[#2fd3c8]">
              See How 1FC Can Help
            </Link>
          </div>
        </section>

        <section id="how-it-works" className="border-b border-white/10 bg-[#0b1220] px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{page.processTitle}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {page.process.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff6a3d]">
                    {index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9aa6b8]">{step.copy}</p>
                </div>
              ))}
            </div>
            <Link href="#quote" className="mt-8 inline-flex rounded-full bg-[#ff6a3d] px-6 py-3 text-sm font-bold">
              Start Fulfillment With 1FC
            </Link>
          </div>
        </section>

        <section className="border-b border-white/10 px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{page.featuresTitle}</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {page.features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-3 flex items-center gap-2 text-[#2fd3c8]">
                    <Boxes size={18} />
                    <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-[#9aa6b8]">{feature.copy}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {feature.items.map((item) => (
                      <li key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0b1220] px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              What Your Business Gains With OneFulfillCenter
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 p-6">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9aa6b8]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-3">
              <Cpu className="text-[#ff6a3d]" />
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Fulfillment Powered by OneChannelAdmin Technology
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {TECH.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 p-6">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9aa6b8]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0b1220] px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-3">
              <Plug className="text-[#2fd3c8]" />
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Connect Your Existing Sales Channels
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {INTEGRATIONS.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 p-6">
                  <h3 className="mb-3 text-lg font-bold">{group.title}</h3>
                  <ul className="space-y-2 text-sm text-[#9aa6b8]">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Fulfillment Built for Growing Businesses
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {AUDIENCES.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 p-6">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9aa6b8]">{item.copy}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-12 text-2xl font-bold">Fulfillment Expertise Across Industries</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {INDUSTRIES.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0b1220] px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-3">
              <ShieldCheck className="text-[#2fd3c8]" />
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Why Businesses Choose OneFulfillCenter
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {WHY.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 p-6">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9aa6b8]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Looking for an Alternative Fulfillment Provider?
            </h2>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3 font-bold">Capability</th>
                    <th className="px-4 py-3 font-bold">OneFulfillCenter</th>
                    <th className="px-4 py-3 font-bold">Traditional warehouse</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row[0]} className="border-t border-white/10">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3 text-white/80">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0b1220] px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Get Started Without Disrupting Your Business
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {ONBOARDING.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 p-5">
                  <p className="text-xs font-bold text-[#ff6a3d]">Step {index + 1}</p>
                  <h3 className="mt-2 font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9aa6b8]">{step.copy}</p>
                </div>
              ))}
            </div>
            <Link href="#quote" className="mt-8 inline-flex rounded-full bg-[#2fd3c8] px-6 py-3 text-sm font-bold text-[#04201e]">
              Start Your Fulfillment Assessment
            </Link>
          </div>
        </section>

        <section className="border-b border-white/10 px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Fulfillment Pricing Built Around Your Operation
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#9aa6b8]">
              {page.costAnswer}
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-bold">Pricing depends on</h3>
                <ul className="space-y-2 text-sm text-[#9aa6b8]">
                  {PRICING_FACTORS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-bold">Common cost categories</h3>
                <ul className="space-y-2 text-sm text-[#9aa6b8]">
                  {COST_CATEGORIES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="#quote" className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-bold">
              Request Pricing
            </Link>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0b1220] px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Built for Real Fulfillment Operations
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#9aa6b8]">
              Customer stories and verified operating metrics will be published here as they are available. We do not invent order counts, accuracy rates, or case studies.
            </p>
          </div>
        </section>

        <section className="border-b border-white/10 px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {page.faqs.map((item) => (
                <details key={item.q} className="rounded-2xl border border-white/10 p-5">
                  <summary className="cursor-pointer font-bold">{item.q}</summary>
                  <p className="mt-3 text-sm leading-7 text-[#9aa6b8]">{item.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 p-6 text-sm leading-7 text-white/80">
              <p><strong className="text-white">{page.definition.question}</strong> {page.definition.answer}</p>
              <p><strong className="text-white">How does {page.name.toLowerCase()} work?</strong> {page.howItWorksAnswer}</p>
              <p><strong className="text-white">Who needs {page.name.toLowerCase()}?</strong> {page.whoNeedsAnswer}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0b1220] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold">Related fulfillment services</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={servicePath(item.slug)}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:border-[#2fd3c8] hover:text-[#2fd3c8]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Truck className="mb-4 text-[#ff6a3d]" />
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Ready to Simplify Your Fulfillment Operation?
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#9aa6b8]">
                Tell us about your products, order volume, sales channels, and shipping requirements. Our fulfillment team can help build an operation around your business.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#quote" className="rounded-full bg-[#2fd3c8] px-6 py-3 text-sm font-bold text-[#04201e]">
                  Get My Fulfillment Quote
                </Link>
                <Link href={`mailto:${company.investorEmail}`} className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold">
                  Talk to a Fulfillment Specialist
                </Link>
              </div>
            </div>
            <QuoteForm defaultService={page.name} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceLandingPage;
