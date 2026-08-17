import Link from "next/link";

const OfcSoftware = () => {
  return (
    <section className="ofc-section ofc-software" id="software">
      <div className="ofc-container">
        <div className="ofc-software__grid">
          <div className="ofc-software__copy">
            <span className="ofc-eyebrow">Platform</span>
            <h2 className="ofc-title">Onefulfillcenter Software For Your Supply Chain</h2>
            <p>
              An advanced, scalable platform that integrates across sales channels,
              3PL partners, shipping carriers, and marketing tools. Centralize
              inventory management with an intuitive dashboard built for everyday
              operations.
            </p>
            <Link className="ofc-btn ofc-btn--light" href="#newsletter">
              Get Started
            </Link>
          </div>

          <div className="ofc-phone" aria-hidden="true">
            <div className="ofc-phone__frame">
              <div className="ofc-phone__notch" />
              <div className="ofc-phone__screen">
                <div
                  className="ofc-phone__tile ofc-phone__tile--wide"
                  style={{ background: "linear-gradient(135deg,#e85d04,#f4a261)" }}
                >
                  <strong>Orders today</strong>
                  <span>1,284 fulfilled · 98% on-time</span>
                </div>
                <div
                  className="ofc-phone__tile"
                  style={{ background: "linear-gradient(135deg,#0f766e,#14b8a6)" }}
                >
                  <strong>Inventory</strong>
                  <span>Live SKU sync</span>
                </div>
                <div
                  className="ofc-phone__tile"
                  style={{ background: "linear-gradient(135deg,#0369a1,#38bdf8)" }}
                >
                  <strong>Returns</strong>
                  <span>42 in process</span>
                </div>
                <div
                  className="ofc-phone__tile"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#a78bfa)" }}
                >
                  <strong>Carriers</strong>
                  <span>UPS · FedEx · USPS</span>
                </div>
                <div
                  className="ofc-phone__tile"
                  style={{ background: "linear-gradient(135deg,#be185d,#f472b6)" }}
                >
                  <strong>Channels</strong>
                  <span>Amazon · Shopify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfcSoftware;
