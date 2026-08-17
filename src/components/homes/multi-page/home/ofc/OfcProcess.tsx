"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const TABS = [
  {
    id: "picking",
    label: "Picking & Packing",
    columns: [
      {
        title: "Picking",
        items: ["Batch picking", "Single-order picking", "SKU accuracy checks", "Pick path optimization"],
      },
      {
        title: "Packing",
        items: ["Custom packaging", "Branded inserts", "Kitting & assembly", "Fragile handling"],
      },
      {
        title: "Add-ons",
        items: ["Custom labeling", "Gift wrap options", "Quality inspection", "Daily reporting"],
      },
    ],
  },
  {
    id: "storage",
    label: "Storage Per Unit",
    columns: [
      {
        title: "Storage",
        items: ["Bin & shelf storage", "Pallet storage", "Climate-aware options", "Scalable capacity"],
      },
      {
        title: "Inventory",
        items: ["Real-time stock counts", "Lot & serial tracking", "Cycle counting", "Low-stock alerts"],
      },
      {
        title: "Facility",
        items: ["Utilities covered", "Security & insurance", "Compliance support", "Waste disposal"],
      },
    ],
  },
  {
    id: "returns",
    label: "Return Process",
    columns: [
      {
        title: "Returns",
        items: ["Return authorization", "Inspection & grading", "Restock workflows", "Disposition rules"],
      },
      {
        title: "Aftercare",
        items: ["Repairs", "Warranty handling", "Refurbishment", "Customer notifications"],
      },
      {
        title: "Coverage",
        items: ["Insurance options", "Damage reporting", "Carrier claims support", "Refund-ready ops"],
      },
    ],
  },
] as const;

const OfcProcess = () => {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].id);
  const [query, setQuery] = useState("");

  const active = useMemo(
    () => TABS.find((tab) => tab.id === activeTab) ?? TABS[0],
    [activeTab],
  );

  const filteredColumns = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return active.columns;
    return active.columns
      .map((column) => ({
        ...column,
        items: column.items.filter((item) => item.toLowerCase().includes(needle)),
      }))
      .filter((column) => column.items.length > 0);
  }, [active, query]);

  return (
    <section className="ofc-process" id="processes">
      <div className="ofc-container">
        <div className="ofc-process__panel">
          <div className="ofc-process__intro">
            <h2>All storage processes &amp; expenses are taken care of by Onefulfillcenter.</h2>
            <label className="ofc-process__search">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search processes"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search processes"
              />
            </label>
          </div>

          <div className="ofc-process__tabs" role="tablist" aria-label="Process categories">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`ofc-process__tab ${activeTab === tab.id ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="ofc-process__body">
            {filteredColumns.map((column) => (
              <div className="ofc-process__col" key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {filteredColumns.length === 0 && (
              <div className="ofc-process__col">
                <h3>No matches</h3>
                <ul>
                  <li>Try another search term.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfcProcess;
