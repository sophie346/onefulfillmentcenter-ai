import Image from "next/image";

const LOGOS = [
  { src: "/assets/img/brand/one/brand-logo-1.png", alt: "Integration partner 1" },
  { src: "/assets/img/brand/one/brand-logo-2.png", alt: "Integration partner 2" },
  { src: "/assets/img/brand/one/brand-logo-3.png", alt: "Integration partner 3" },
  { src: "/assets/img/brand/one/brand-logo-4.png", alt: "Integration partner 4" },
  { src: "/assets/img/brand/one/brand-logo-5.png", alt: "Integration partner 5" },
  { src: "/assets/img/brand/one/brand-logo-6.png", alt: "Integration partner 6" },
  { src: "/assets/img/brand/one/brand-logo-7.png", alt: "Integration partner 7" },
] as const;

const OfcIntegrations = () => {
  return (
    <section className="ofc-section" id="integrations">
      <div className="ofc-container">
        <div className="ofc-integrations__stage">
          <div className="ofc-integrations__copy">
            <span className="ofc-eyebrow">Connections</span>
            <h2 className="ofc-title">
              Connect to your <span>favourite apps</span>
            </h2>
            <p className="ofc-lead">
              Plug Onefulfillcenter into the sales channels, carriers, and tools
              your team already runs.
            </p>
          </div>

          <div className="ofc-integrations__logos">
            {LOGOS.map((logo) => (
              <div className="ofc-integrations__logo" key={logo.src}>
                <Image src={logo.src} alt={logo.alt} width={56} height={36} />
              </div>
            ))}
            <div className="ofc-integrations__logo" aria-hidden="true">
              <Image
                src="/assets/img/logo/onefulfillcenter-logo.png"
                alt=""
                width={56}
                height={28}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfcIntegrations;
