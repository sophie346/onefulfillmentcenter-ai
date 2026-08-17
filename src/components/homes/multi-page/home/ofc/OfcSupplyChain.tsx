const NODES = [
  "Manufacturer / Vendor",
  "Warehouse",
  "One Fulfillment Center",
  "Retailers / Wholesale",
  "Customers",
] as const;

const OfcSupplyChain = () => {
  return (
    <section className="ofc-section ofc-section--tight" id="supply-chain">
      <div className="ofc-container">
        <div className="ofc-section__head ofc-section__head--center">
          <h2 className="ofc-title">Products Supply Chain From Factory to Customers</h2>
          <p className="ofc-lead">
            Move inventory from factory to warehouse to fulfillment to customers
            with one operating network for B2B and D2C commerce.
          </p>
        </div>

        <div className="ofc-chain__flow">
          {NODES.map((node) => (
            <div className="ofc-chain__node" key={node}>
              <span className="ofc-chain__dot" aria-hidden="true" />
              <strong>{node}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfcSupplyChain;
