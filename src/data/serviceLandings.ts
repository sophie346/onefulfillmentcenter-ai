export type ServiceLanding = {
  slug: string;
  name: string;
  primaryKeyword: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroCopy: string;
  definition: { question: string; answer: string };
  howItWorksAnswer: string;
  whoNeedsAnswer: string;
  costAnswer: string;
  problemsTitle: string;
  problems: { title: string; items: string[] }[];
  processTitle: string;
  process: { title: string; copy: string }[];
  featuresTitle: string;
  features: { title: string; copy: string; items: string[] }[];
  related: string[];
  faqs: { q: string; a: string }[];
};

const path = (slug: string) => `/${slug}/`;

export const SERVICE_LANDINGS: ServiceLanding[] = [
  {
    slug: "ecommerce-fulfillment",
    name: "Ecommerce Fulfillment",
    primaryKeyword: "ecommerce fulfillment services",
    seoTitle: "Ecommerce Fulfillment Services | Fast, Accurate Shipping | OneFulfillCenter",
    metaDescription:
      "Scale ecommerce operations with accurate pick and pack, real-time inventory, fast shipping, and returns management. Get a fulfillment quote from OneFulfillCenter.",
    h1: "Ecommerce Fulfillment Built to Help Your Business Scale",
    heroCopy:
      "Store inventory, automate order fulfillment, and ship customer orders from one connected fulfillment network. OneFulfillCenter helps growing brands reduce operational complexity while improving inventory accuracy and delivery speed.",
    definition: {
      question: "What is ecommerce fulfillment?",
      answer:
        "Ecommerce fulfillment is the process of storing inventory, receiving online orders, picking and packing products, and shipping them to consumers through ecommerce stores and marketplaces.",
    },
    howItWorksAnswer:
      "Inventory is received into the warehouse, orders sync from your store or marketplace, then OneFulfillCenter picks, packs, ships, and tracks each order while updating inventory in real time.",
    whoNeedsAnswer:
      "Ecommerce brands, DTC sellers, and marketplace merchants need ecommerce fulfillment when order volume, SKU count, or shipping complexity outgrows in-house packing.",
    costAnswer:
      "Ecommerce fulfillment pricing depends on monthly order volume, SKUs, product size and weight, storage needs, packaging, destinations, and returns. OneFulfillCenter quotes around your operation rather than a one-size rate card.",
    problemsTitle: "Fulfillment Gets More Complex as Your Ecommerce Business Grows",
    problems: [
      { title: "Inventory problems", items: ["Inventory spread across rooms and 3PLs", "Stock discrepancies and overselling", "Poor live inventory visibility"] },
      { title: "Fulfillment problems", items: ["Slow order processing", "Picking and packing errors", "Rising labor and packing space needs"] },
      { title: "Shipping problems", items: ["Expensive parcel rates", "Delivery delays", "Fragmented carrier tracking"] },
      { title: "Customer experience problems", items: ["Late shipments", "Incorrect orders", "Painful returns"] },
    ],
    processTitle: "One Ecommerce Fulfillment Operation From Inventory to Delivery",
    process: [
      { title: "Send your inventory", copy: "Products arrive at the OneFulfillCenter warehouse with receiving instructions." },
      { title: "We receive and store it", copy: "Inventory is scanned, verified, and put away into optimized storage locations." },
      { title: "Orders sync automatically", copy: "Orders flow from Shopify, marketplaces, and other ecommerce channels." },
      { title: "We pick and pack", copy: "Warehouse teams pick, verify, and package each consumer order." },
      { title: "We ship", copy: "The right carrier and service are selected for cost and delivery speed." },
      { title: "You track everything", copy: "Inventory, orders, shipments, and returns stay visible in one platform." },
    ],
    featuresTitle: "Everything You Need for Ecommerce Fulfillment",
    features: [
      { title: "Real-time inventory management", copy: "Keep quantities synchronized across warehouses and sales channels.", items: ["SKU-level tracking", "Availability by channel", "Safety stock alerts"] },
      { title: "Fast pick & pack", copy: "Improve fulfillment speed while reducing packing errors.", items: ["Barcode verification", "Scan-to-pack", "Packing checks"] },
      { title: "Smart shipping", copy: "Identify cost-effective carrier and service options for each order.", items: ["Rate shopping", "UPS, FedEx, USPS, DHL", "Tracking and notifications"] },
      { title: "Returns management", copy: "Process consumer returns without stopping outbound ecommerce orders.", items: ["RMA intake", "Inspection", "Restock or disposition"] },
    ],
    related: ["warehousing", "pick-and-pack", "returns-management", "inventory-storage", "kitting"],
    faqs: [
      { q: "What is ecommerce fulfillment?", a: "Ecommerce fulfillment is storing products, processing online orders, picking and packing, and shipping to consumers." },
      { q: "How does ecommerce fulfillment work?", a: "You send inventory to OneFulfillCenter, orders sync from your channels, and we pick, pack, ship, and update inventory automatically." },
      { q: "How much does ecommerce fulfillment cost?", a: "Cost depends on order volume, SKUs, dimensions, weight, storage, packaging, destinations, and returns. Request a custom quote." },
      { q: "What is a 3PL fulfillment provider?", a: "A 3PL stores inventory and fulfills orders on behalf of a brand so you do not run the warehouse yourself." },
      { q: "When should a business outsource fulfillment?", a: "Outsource when packing time, error rates, shipping cost, or space start limiting growth." },
      { q: "Does OneFulfillCenter integrate with Shopify?", a: "Yes. Shopify and other ecommerce platforms can sync orders and inventory into the fulfillment network." },
      { q: "Can OneFulfillCenter fulfill Amazon orders?", a: "Yes. Marketplace orders, including Amazon, can flow through the same fulfillment operation, with FBA prep available when needed." },
      { q: "Does OneFulfillCenter support B2B orders?", a: "Yes. B2C ecommerce and B2B wholesale orders can run in one connected operation." },
      { q: "Does OneFulfillCenter manage returns?", a: "Yes. Returns can be inspected, restocked, or dispositioned without disrupting outbound fulfillment." },
      { q: "How quickly can fulfillment begin?", a: "Go-live depends on integrations, SKU setup, and inbound inventory. Onboarding starts with a fulfillment assessment." },
    ],
  },
  {
    slug: "b2b-fulfillment",
    name: "B2B Fulfillment",
    primaryKeyword: "B2B fulfillment services",
    seoTitle: "B2B Fulfillment Services for Brands & Wholesalers | OneFulfillCenter",
    metaDescription:
      "Wholesale and B2B fulfillment with case and pallet shipping, EDI-ready workflows, inventory control, and retail distribution. Get a B2B fulfillment quote.",
    h1: "B2B Fulfillment Built for Wholesale Speed and Accuracy",
    heroCopy:
      "Process wholesale, distributor, and dealer orders with case picks, pallet builds, labeling, and outbound freight from one warehouse network. OneFulfillCenter supports B2B and B2C together so brands do not run two disconnected operations.",
    definition: {
      question: "What is B2B fulfillment?",
      answer:
        "B2B fulfillment is storing inventory, processing wholesale or business orders, picking and packing cases or pallets, and shipping products to retailers, distributors, dealers, or other businesses.",
    },
    howItWorksAnswer:
      "Wholesale orders arrive from ERP, EDI, or B2B portals. Inventory is allocated, then cases or pallets are picked, labeled, and shipped to business destinations with the documentation each buyer requires.",
    whoNeedsAnswer:
      "Wholesalers, distributors, manufacturers, and brands selling to retailers or dealers need B2B fulfillment when carton and pallet work outgrows a consumer-only warehouse.",
    costAnswer:
      "B2B fulfillment pricing depends on case vs pallet mix, order lines, labeling, freight destinations, storage, and special handling. Quotes are built around your wholesale profile.",
    problemsTitle: "Wholesale Fulfillment Breaks When Consumer Warehouses Are Forced to Scale",
    problems: [
      { title: "Order problems", items: ["Mixed case and pallet requirements", "Retail routing guides", "EDI and portal order errors"] },
      { title: "Inventory problems", items: ["Allocations colliding with DTC demand", "Lot and expiration requirements", "Incomplete carton-level visibility"] },
      { title: "Shipping problems", items: ["LTL and FTL coordination", "Appointment delivery", "Chargebacks from labeling mistakes"] },
      { title: "Operations problems", items: ["Separate B2B and B2C warehouses", "Slow wholesale cutoffs", "Limited ASN and packing-slip control"] },
    ],
    processTitle: "Wholesale Orders From Allocation to Delivery",
    process: [
      { title: "Receive wholesale demand", copy: "Orders enter from ERP, EDI, dealer portals, or sales teams." },
      { title: "Allocate inventory", copy: "Available inventory is reserved without overselling ecommerce channels." },
      { title: "Pick cases or pallets", copy: "Teams pick by case, inner pack, or pallet according to the order." },
      { title: "Label and document", copy: "Carton labels, packing lists, and shipping documents are applied." },
      { title: "Ship freight or parcel", copy: "LTL, FTL, or parcel is selected based on destination and cube." },
      { title: "Confirm and track", copy: "Ship confirmations and inventory updates return to your systems." },
    ],
    featuresTitle: "Everything You Need for B2B Fulfillment",
    features: [
      { title: "Case and pallet fulfillment", copy: "Support wholesale units of measure, not only each-picks.", items: ["Case picks", "Pallet builds", "Mixed SKU pallets"] },
      { title: "Retail-ready labeling", copy: "Reduce chargebacks with compliant labels and packing documents.", items: ["Carton labels", "Packing slips", "ASN support"] },
      { title: "Channel inventory control", copy: "Protect wholesale and DTC availability in one inventory pool.", items: ["Allocations", "Channel rules", "Safety stock"] },
      { title: "Freight handling", copy: "Move larger B2B orders with the right outbound mode.", items: ["LTL", "FTL", "Appointment shipping"] },
    ],
    related: ["ecommerce-fulfillment", "warehousing", "retail-fulfillment", "cross-docking", "inventory-storage"],
    faqs: [
      { q: "What is B2B fulfillment?", a: "B2B fulfillment stores inventory and ships wholesale or business orders in cases or pallets to retailers, distributors, and dealers." },
      { q: "How is B2B fulfillment different from ecommerce fulfillment?", a: "B2B typically ships larger units, freight, and retail documentation, while ecommerce focuses on each-picks and parcel." },
      { q: "Can OneFulfillCenter handle B2B and B2C together?", a: "Yes. One connected operation can fulfill wholesale and consumer orders from shared inventory." },
      { q: "Do you support EDI orders?", a: "B2B orders can flow from ERP, EDI, and portals so warehouse teams receive structured work." },
      { q: "Can you ship pallets and LTL?", a: "Yes. Pallet builds, LTL, and FTL are part of wholesale fulfillment." },
      { q: "How do you prevent DTC from stealing wholesale inventory?", a: "Inventory can be allocated and reserved by channel so ecommerce and wholesale do not oversell each other." },
      { q: "What causes retail chargebacks?", a: "Missing labels, wrong carton content, late appointments, and incomplete documents. Compliant packing reduces that risk." },
      { q: "How much does B2B fulfillment cost?", a: "Pricing depends on case/pallet mix, lines per order, storage, labeling, and freight. Request a custom quote." },
    ],
  },
  {
    slug: "amazon-fba-prep",
    name: "Amazon FBA Prep",
    primaryKeyword: "Amazon FBA prep services",
    seoTitle: "Amazon FBA Prep Services | Labeling, Bagging & Shipping | OneFulfillCenter",
    metaDescription:
      "Amazon FBA prep with labeling, polybagging, bundling, inspection, and inbound shipment support. Get FBA-ready inventory into Amazon faster with OneFulfillCenter.",
    h1: "Amazon FBA Prep Built to Get Inventory Inbound Without Delays",
    heroCopy:
      "Receive products, apply Amazon-compliant labels, bag, bundle, and ship FBA inbound shipments from a fulfillment warehouse that already understands multi-channel inventory. OneFulfillCenter helps sellers avoid rejected cartons and slow Amazon check-in.",
    definition: {
      question: "What is Amazon FBA prep?",
      answer:
        "Amazon FBA prep is the labeling, packaging, bundling, and documentation work required before inventory can be sent into Amazon fulfillment centers.",
    },
    howItWorksAnswer:
      "Inventory arrives at OneFulfillCenter, is inspected and prepped to Amazon requirements, then inbound shipments are labeled and sent to the assigned Amazon fulfillment centers.",
    whoNeedsAnswer:
      "Amazon sellers, brands using FBA, and hybrid FBA/FBM merchants need prep when they cannot keep up with labeling, polybagging, or inbound shipment rules.",
    costAnswer:
      "FBA prep pricing depends on units, labeling, bagging, bundling, inspection, and inbound carton work. Quotes follow your SKU and prep mix.",
    problemsTitle: "Amazon Inbound Gets Expensive When Prep Is Rushed or Incomplete",
    problems: [
      { title: "Prep problems", items: ["Missing FNSKU labels", "Incorrect polybagging", "Unapproved bundling"] },
      { title: "Inbound problems", items: ["Rejected shipments", "Slow Amazon check-in", "Split destination complexity"] },
      { title: "Inventory problems", items: ["Units prepped for the wrong marketplace", "No visibility into prep WIP", "FBA and FBM stock mixed poorly"] },
      { title: "Operations problems", items: ["Last-minute labeling sprints", "Inconsistent carton content", "No audit trail"] },
    ],
    processTitle: "From Receipt to Amazon-Ready Cartons",
    process: [
      { title: "Receive seller inventory", copy: "Inbound goods are counted and checked against the expected SKU list." },
      { title: "Inspect and sort", copy: "Damaged, incomplete, or noncompliant units are flagged before prep." },
      { title: "Label and package", copy: "FNSKU labels, polybags, suffocation warnings, and bundles are applied." },
      { title: "Build inbound cartons", copy: "Cartons are packed to Amazon carton and shipment rules." },
      { title: "Ship to Amazon", copy: "Inbound shipments move to the assigned fulfillment centers." },
      { title: "Report status", copy: "Prep counts and shipment details stay visible to your team." },
    ],
    featuresTitle: "Everything You Need for Amazon FBA Prep",
    features: [
      { title: "Unit labeling", copy: "Apply the right identifiers before inventory leaves the warehouse.", items: ["FNSKU labels", "Barcode checks", "Expiration labeling"] },
      { title: "Protective packaging", copy: "Meet Amazon packaging rules for the product type.", items: ["Polybagging", "Suffocation warnings", "Bubble wrap where required"] },
      { title: "Bundles and kits", copy: "Create Amazon-ready sets without mixing unfinished inventory.", items: ["Multi-packs", "Kitting", "Bundle labels"] },
      { title: "Inbound shipment support", copy: "Move prepped inventory into Amazon with carton discipline.", items: ["Carton labels", "Shipment grouping", "Carrier handoff"] },
    ],
    related: ["ecommerce-fulfillment", "kitting", "pick-and-pack", "warehousing", "inventory-storage"],
    faqs: [
      { q: "What is Amazon FBA prep?", a: "FBA prep is labeling, packaging, and carton work required before sending inventory into Amazon fulfillment centers." },
      { q: "Do you apply FNSKU labels?", a: "Yes. Units can be labeled and verified before inbound shipment." },
      { q: "Can you polybag products?", a: "Yes. Polybagging and required warnings can be applied during prep." },
      { q: "Can OneFulfillCenter also fulfill non-Amazon orders?", a: "Yes. FBA prep can sit beside ecommerce and B2B fulfillment in the same network." },
      { q: "What happens if units fail inspection?", a: "Noncompliant or damaged units are flagged so they are not sent inbound." },
      { q: "How fast can FBA prep start?", a: "After SKU setup and inbound receipt, prep can begin as part of standard warehouse receiving." },
      { q: "Do you handle expiration-dated products?", a: "Expiration labeling and lot handling can be included when the product requires it." },
      { q: "How is FBA prep priced?", a: "Pricing depends on units, prep tasks, bundling, and inbound carton work. Request a quote." },
    ],
  },
  {
    slug: "warehousing",
    name: "Warehousing",
    primaryKeyword: "warehousing services",
    seoTitle: "Warehousing Services | Secure Storage & Distribution | OneFulfillCenter",
    metaDescription:
      "Outsourced warehousing with secure storage, receiving, putaway, and fulfillment-ready inventory. Get a warehousing quote from OneFulfillCenter.",
    h1: "Warehousing Built to Store Inventory and Move Orders Faster",
    heroCopy:
      "Replace scattered storage with a fulfillment-ready warehouse network. OneFulfillCenter receives, stores, and stages inventory so B2B and B2C orders can leave the building without a separate 3PL scramble.",
    definition: {
      question: "What is warehousing?",
      answer:
        "Warehousing is the storage and handling of inventory in a facility that receives goods, puts them away, tracks location, and stages products for fulfillment or distribution.",
    },
    howItWorksAnswer:
      "Inbound freight is received and put away into tracked locations. Inventory stays available for pick, pack, kitting, cross-dock, or outbound shipping as orders arrive.",
    whoNeedsAnswer:
      "Brands, retailers, and manufacturers need warehousing when inventory volume, locations, or security requirements exceed spare rooms, trailers, or ad-hoc storage.",
    costAnswer:
      "Warehousing cost depends on pallet or bin storage, inbound volume, special handling, and how often inventory turns. Quotes follow space plus activity.",
    problemsTitle: "Storage Without Warehouse Discipline Creates Fulfillment Delay",
    problems: [
      { title: "Space problems", items: ["Overflow in offices and trailers", "Seasonal peaks with nowhere to put stock", "Poor slotting"] },
      { title: "Control problems", items: ["Unknown on-hand quantities", "Lost pallets", "Weak access control"] },
      { title: "Inbound problems", items: ["Unverified receipts", "Slow putaway", "No ASN matching"] },
      { title: "Outbound problems", items: ["Long pick paths", "Inventory in the wrong zone", "Orders waiting on putaway"] },
    ],
    processTitle: "From Dock Door to Fulfillment-Ready Locations",
    process: [
      { title: "Receive inbound freight", copy: "Shipments are checked in against expected receipts." },
      { title: "Verify and label", copy: "Quantities, lots, and labels are confirmed before putaway." },
      { title: "Put away", copy: "Inventory is placed into optimized bin, shelf, or pallet locations." },
      { title: "Track on-hand", copy: "Location-level inventory stays visible for every SKU." },
      { title: "Stage for fulfillment", copy: "Stock is ready for pick, pack, kitting, or cross-dock." },
      { title: "Report inventory", copy: "You see what is stored, reserved, and available." },
    ],
    featuresTitle: "Everything You Need for Warehousing",
    features: [
      { title: "Secure storage", copy: "Protect inventory with controlled access and disciplined locations.", items: ["Zoned racking", "Access control", "Cycle counts"] },
      { title: "Receiving and putaway", copy: "Get inbound inventory into tracked locations quickly.", items: ["ASN receiving", "Scan putaway", "Exception handling"] },
      { title: "Fulfillment-ready layout", copy: "Store product where pick paths support B2B and B2C.", items: ["Forward pick", "Reserve storage", "Bulk locations"] },
      { title: "Network capacity", copy: "Place inventory closer to demand across the fulfillment network.", items: ["Distributed storage", "Transfer support", "Peak overflow"] },
    ],
    related: ["inventory-storage", "ecommerce-fulfillment", "cross-docking", "kitting", "b2b-fulfillment"],
    faqs: [
      { q: "What is warehousing?", a: "Warehousing is receiving, storing, tracking, and staging inventory so it can be fulfilled or distributed." },
      { q: "Is warehousing the same as fulfillment?", a: "Warehousing is storage and handling. Fulfillment adds pick, pack, and ship against orders." },
      { q: "Can stored inventory also be fulfilled?", a: "Yes. OneFulfillCenter warehouses are built to pick and ship, not only hold pallets." },
      { q: "Do you support pallet and bin storage?", a: "Yes. Storage can include pallets, shelves, and bin locations based on the SKU." },
      { q: "How is warehouse inventory tracked?", a: "Inventory is tracked at SKU and location level with receiving and movement scans." },
      { q: "Can you handle B2B and B2C from the same warehouse?", a: "Yes. Wholesale and consumer inventory can share a connected operation." },
      { q: "What security measures are in place?", a: "Facilities use controlled access and inventory discipline designed for warehouse environments." },
      { q: "How is warehousing priced?", a: "Pricing typically combines storage and inbound/outbound activity. Request a custom quote." },
    ],
  },
  {
    slug: "kitting",
    name: "Kitting",
    primaryKeyword: "kitting services",
    seoTitle: "Kitting Services | Bundles, Assembly & Subscription Kits | OneFulfillCenter",
    metaDescription:
      "Warehouse kitting and assembly for bundles, subscription boxes, and retail packs. Reduce last-mile complexity with OneFulfillCenter kitting services.",
    h1: "Kitting Built to Assemble Bundles Before the Order Ships",
    heroCopy:
      "Build kits, bundles, and display-ready packs in the warehouse instead of at the packing station under cutoff pressure. OneFulfillCenter assembles kits from component inventory so ecommerce, retail, and subscription orders leave faster and more accurately.",
    definition: {
      question: "What is kitting?",
      answer:
        "Kitting is assembling multiple SKUs or components into a single sellable kit, bundle, or pack before or during fulfillment.",
    },
    howItWorksAnswer:
      "Component inventory is picked to a bill of materials, assembled and labeled as a finished kit, then stored or shipped as one SKU.",
    whoNeedsAnswer:
      "Brands running bundles, subscription boxes, promo packs, or retail displays need kitting when assembly at pack-out becomes slow or error-prone.",
    costAnswer:
      "Kitting cost depends on components per kit, labor, packaging, labeling, and whether kits are pre-built or built to order. Quotes follow the bill of materials.",
    problemsTitle: "Bundles Fail When Assembly Happens Too Late in the Order Cycle",
    problems: [
      { title: "Component problems", items: ["Missing kit parts", "No BOM control", "Component inventory oversold"] },
      { title: "Labor problems", items: ["Pack-station assembly delays", "Inconsistent kit contents", "Peak-season bottlenecks"] },
      { title: "Channel problems", items: ["Retail display packs vs DTC bundles", "Subscription variants", "Amazon multi-packs"] },
      { title: "Quality problems", items: ["Wrong inserts", "Unlabeled kits", "Returns of incomplete sets"] },
    ],
    processTitle: "From Components to a Ship-Ready Kit",
    process: [
      { title: "Define the bill of materials", copy: "Each kit SKU has a controlled component list." },
      { title: "Reserve components", copy: "Inventory is allocated so kits cannot steal unfinished parts from other orders." },
      { title: "Pick components", copy: "Warehouse teams gather parts in the right quantities." },
      { title: "Assemble and label", copy: "Kits are built, checked, and labeled as a finished SKU." },
      { title: "Store or ship", copy: "Finished kits go to forward pick or straight to outbound." },
      { title: "Track both levels", copy: "You see component and finished-kit inventory." },
    ],
    featuresTitle: "Everything You Need for Kitting",
    features: [
      { title: "BOM-driven assembly", copy: "Build kits from a defined component list, not tribal knowledge.", items: ["Kit SKUs", "Component quantities", "Revision control"] },
      { title: "Pre-build or build-to-order", copy: "Make kits ahead of peaks or assemble as orders arrive.", items: ["Pre-kitting", "On-demand kits", "Promo packs"] },
      { title: "Subscription and retail packs", copy: "Support boxes, bundles, and display-ready assembly.", items: ["Inserts", "Multi-packs", "Retail inner packs"] },
      { title: "Quality checks", copy: "Verify contents before the kit becomes sellable inventory.", items: ["Content checks", "Label verification", "Exception holds"] },
    ],
    related: ["subscription-fulfillment", "amazon-fba-prep", "pick-and-pack", "ecommerce-fulfillment", "retail-fulfillment"],
    faqs: [
      { q: "What is kitting?", a: "Kitting assembles multiple components into one sellable kit, bundle, or pack." },
      { q: "Is kitting the same as pick and pack?", a: "Pick and pack fulfills an order. Kitting creates a finished SKU from components, often before the order." },
      { q: "Can you kit subscription boxes?", a: "Yes. Recurring boxes and variable inserts can be assembled in the warehouse." },
      { q: "Do you pre-build kits?", a: "Kits can be pre-built for peaks or assembled to order when variants change often." },
      { q: "How is component inventory tracked?", a: "Components and finished kits are tracked so you know what can still be built." },
      { q: "Can kits be sent to Amazon FBA?", a: "Yes. Finished kits can be prepped and inbound-shipped when required." },
      { q: "What if a component is short?", a: "Shortages are flagged so incomplete kits are not shipped." },
      { q: "How is kitting priced?", a: "Pricing follows components, labor, packaging, and whether kits are pre-built. Request a quote." },
    ],
  },
  {
    slug: "pick-and-pack",
    name: "Pick & Pack",
    primaryKeyword: "pick and pack services",
    seoTitle: "Pick and Pack Services | Accurate Order Fulfillment | OneFulfillCenter",
    metaDescription:
      "Pick and pack fulfillment with barcode verification, scan-to-pack, and faster order processing. Reduce shipping errors with OneFulfillCenter.",
    h1: "Pick and Pack Built for Speed Without Sacrificing Accuracy",
    heroCopy:
      "Turn warehouse inventory into outbound orders with verified picking and packing. OneFulfillCenter uses scan-driven workflows so ecommerce and wholesale orders leave with the right items, the right packaging, and fewer costly reships.",
    definition: {
      question: "What is pick and pack?",
      answer:
        "Pick and pack is the warehouse process of selecting ordered items from storage, verifying them, packaging them, and preparing the shipment for carrier pickup.",
    },
    howItWorksAnswer:
      "Orders generate pick work, items are picked from locations, scanned at pack, packed to the right carton or mailer, then labeled for shipping.",
    whoNeedsAnswer:
      "Any brand sending orders from a warehouse needs pick and pack. It becomes critical when error rates, labor, or cutoff times start hurting customers.",
    costAnswer:
      "Pick and pack pricing usually includes a pick fee, packing materials, and extra handling for additional items or special packaging. Quotes follow average lines and packaging.",
    problemsTitle: "Shipping Errors Start on the Warehouse Floor",
    problems: [
      { title: "Picking problems", items: ["Wrong SKU picked", "Short picks", "Inefficient walk paths"] },
      { title: "Packing problems", items: ["Missing inserts", "Wrong carton size", "No scan verification"] },
      { title: "Labor problems", items: ["Training-heavy paper picks", "Peak overtime", "Inconsistent quality"] },
      { title: "Customer problems", items: ["Wrong-item shipments", "Damaged-in-transit packs", "Slow order cycle time"] },
    ],
    processTitle: "From Pick List to Packed Carton",
    process: [
      { title: "Release the order", copy: "Eligible orders become pick work in the warehouse." },
      { title: "Pick from locations", copy: "Associates pick by order, batch, wave, or zone." },
      { title: "Verify at pack", copy: "Items are scanned against the order before the carton closes." },
      { title: "Pack and protect", copy: "The right mailer or carton and dunnage are applied." },
      { title: "Label the shipment", copy: "Shipping labels and documents are attached." },
      { title: "Hand off to carrier", copy: "Packed orders move to outbound staging and pickup." },
    ],
    featuresTitle: "Everything You Need for Pick & Pack",
    features: [
      { title: "Directed picking", copy: "Reduce walk time and missed lines with structured pick methods.", items: ["Batch picking", "Wave picking", "Zone picking"] },
      { title: "Scan-to-pack", copy: "Confirm the right SKU and quantity before sealing.", items: ["Barcode verification", "Line confirmation", "Exception holds"] },
      { title: "Packaging options", copy: "Match pack type to product and channel.", items: ["Mailers", "Cartons", "Custom inserts"] },
      { title: "B2B and B2C packing", copy: "Support each-picks and case packing in one operation.", items: ["Each picks", "Case picks", "Mixed orders"] },
    ],
    related: ["ecommerce-fulfillment", "kitting", "warehousing", "returns-management", "b2b-fulfillment"],
    faqs: [
      { q: "What is pick and pack?", a: "Pick and pack is selecting ordered items, verifying them, packaging them, and preparing shipments for pickup." },
      { q: "How do you reduce picking errors?", a: "Barcode verification and scan-to-pack confirm SKU and quantity before the carton is sealed." },
      { q: "Do you support batch or wave picking?", a: "Yes. Batch, wave, and zone picking can be used based on order volume and warehouse layout." },
      { q: "Can you pack wholesale and ecommerce orders?", a: "Yes. Each-picks and case packing can run in the same warehouse." },
      { q: "Are packing materials included?", a: "Standard packing materials can be included or specified. Special packaging is quoted separately." },
      { q: "What is scan-to-pack?", a: "Scan-to-pack requires each item to be scanned against the order at the packing station." },
      { q: "How fast can orders ship?", a: "Cycle time depends on cutoff, inventory availability, and pick method. The goal is a short path from order to carrier handoff." },
      { q: "How is pick and pack priced?", a: "Fees typically follow picks, packing, and extras such as additional items or special handling." },
    ],
  },
  {
    slug: "reverse-logistics",
    name: "Reverse Logistics",
    primaryKeyword: "reverse logistics services",
    seoTitle: "Reverse Logistics Services | Returns, Repairs & Recovery | OneFulfillCenter",
    metaDescription:
      "Reverse logistics for returns intake, inspection, restock, repair routing, and vendor returns. Recover inventory value with OneFulfillCenter.",
    h1: "Reverse Logistics Built to Recover Inventory Without Slowing Outbound",
    heroCopy:
      "Inbound returns should not stall outbound fulfillment. OneFulfillCenter receives reverse flow, inspects product, and routes it to restock, repair, refurbishment, or vendor return while keeping selling inventory accurate.",
    definition: {
      question: "What is reverse logistics?",
      answer:
        "Reverse logistics is the process of moving products back from customers or downstream partners for inspection, restocking, repair, recycling, or return-to-vendor.",
    },
    howItWorksAnswer:
      "Returned goods are received against an RMA or return authorization, inspected, then dispositioned to restock, repair, salvage, or vendor return with inventory updates.",
    whoNeedsAnswer:
      "Ecommerce, retail, and warranty-heavy brands need reverse logistics when returns volume, repairs, or vendor claims exceed a mailbox-and-spreadsheet process.",
    costAnswer:
      "Reverse logistics pricing depends on return volume, inspection depth, refurbishment, storage of pending returns, and outbound vendor shipments. Quotes follow the reverse workflow.",
    problemsTitle: "Returns Pile Up When Reverse Flow Has No Process",
    problems: [
      { title: "Intake problems", items: ["Unlabeled returns", "No RMA match", "Mixed customer and vendor returns"] },
      { title: "Inventory problems", items: ["Sellable stock trapped in returns cages", "Unknown condition", "Duplicate refunds"] },
      { title: "Operations problems", items: ["Returns blocking outbound docks", "No repair routing", "Slow restock"] },
      { title: "Cost problems", items: ["Write-offs of recoverable product", "Freight on preventable returns", "No visibility for finance"] },
    ],
    processTitle: "From Return Arrival to Disposition",
    process: [
      { title: "Authorize the return", copy: "RMAs define what is coming back and why." },
      { title: "Receive reverse inventory", copy: "Inbound returns are checked in separately from new receipts." },
      { title: "Inspect condition", copy: "Units are graded for restock, repair, or scrap." },
      { title: "Route the disposition", copy: "Product moves to restock, refurbishment, RTV, or recycle." },
      { title: "Update inventory", copy: "Sellable units return to available stock; the rest stay off-channel." },
      { title: "Report outcomes", copy: "You see return reasons, recovery, and pending work." },
    ],
    featuresTitle: "Everything You Need for Reverse Logistics",
    features: [
      { title: "RMA intake", copy: "Match inbound returns to expected authorizations.", items: ["RMA receiving", "Reason codes", "Photo exceptions"] },
      { title: "Inspection and grading", copy: "Decide what can sell again.", items: ["Restock", "Refurbish", "Scrap"] },
      { title: "Repair and vendor flow", copy: "Move units to the next recovery step.", items: ["Repair routing", "Return-to-vendor", "Warranty holds"] },
      { title: "Separated from outbound", copy: "Keep reverse work from blocking pick and pack.", items: ["Dedicated intake", "Holds", "Restock waves"] },
    ],
    related: ["returns-management", "warehousing", "ecommerce-fulfillment", "inventory-storage", "retail-fulfillment"],
    faqs: [
      { q: "What is reverse logistics?", a: "Reverse logistics moves products back from customers or partners for inspection, restock, repair, or vendor return." },
      { q: "How is reverse logistics different from returns management?", a: "Returns management is the customer-facing returns process. Reverse logistics is the warehouse recovery operation behind it." },
      { q: "Can returned items go back into sellable stock?", a: "Yes, after inspection and grading. Only units that meet restock rules return to available inventory." },
      { q: "Do you handle return-to-vendor?", a: "Yes. Units can be staged and shipped back to vendors when that is the disposition." },
      { q: "Will returns slow outbound fulfillment?", a: "Reverse flow is received and processed as its own operation so outbound pick paths stay clear." },
      { q: "Can you support repairs and warranty?", a: "Repair routing and holds can be part of the reverse workflow." },
      { q: "How do you track return reasons?", a: "Reason codes and inspection outcomes stay visible for operations and reporting." },
      { q: "How is reverse logistics priced?", a: "Pricing depends on volume, inspection depth, and disposition work. Request a quote." },
    ],
  },
  {
    slug: "returns-management",
    name: "Returns Management",
    primaryKeyword: "returns management",
    seoTitle: "Returns Management | RMA, Restock & Exchanges | OneFulfillCenter",
    metaDescription:
      "Ecommerce returns management with RMA, inspection, restocking, exchanges, and reverse logistics. Keep outbound fulfillment moving with OneFulfillCenter.",
    h1: "Returns Management Built to Protect Customers and Inventory Accuracy",
    heroCopy:
      "Give customers a clear returns path while the warehouse inspects, restocks, or exchanges products without guessing. OneFulfillCenter connects RMA intake to inventory so refunds and resale stay aligned.",
    definition: {
      question: "What is returns management?",
      answer:
        "Returns management is the process of authorizing, receiving, inspecting, and resolving customer returns through restocking, exchanges, refunds, or other dispositions.",
    },
    howItWorksAnswer:
      "A return is authorized, the customer ships the product back, the warehouse inspects it, then inventory and the customer outcome are updated.",
    whoNeedsAnswer:
      "Ecommerce and omnichannel brands need returns management when return volume, exchanges, or restock delays start hurting cash, inventory, and reviews.",
    costAnswer:
      "Returns management pricing depends on return volume, inspection, restock, exchanges, and packaging. Quotes follow the returns workflow you need.",
    problemsTitle: "Poor Returns Experiences Cost More Than the Refund",
    problems: [
      { title: "Customer problems", items: ["Unclear return instructions", "Slow refunds", "Painful exchanges"] },
      { title: "Warehouse problems", items: ["Mystery boxes on the dock", "No inspection standard", "Restock lag"] },
      { title: "Inventory problems", items: ["Refunded units still not sellable", "Overselling during returns processing", "No lot recovery"] },
      { title: "Finance problems", items: ["Unmatched RMAs", "Write-offs", "No returns analytics"] },
    ],
    processTitle: "From RMA to Restock or Exchange",
    process: [
      { title: "Create the RMA", copy: "The return is authorized with SKU, reason, and next step." },
      { title: "Receive the return", copy: "Inbound parcels are matched to the RMA." },
      { title: "Inspect the product", copy: "Condition determines restock, exchange, or other disposition." },
      { title: "Restock or exchange", copy: "Sellable units return to inventory; exchanges create a new outbound order." },
      { title: "Update systems", copy: "Inventory and order status stay in sync with your channels." },
      { title: "Report returns", copy: "Reason codes and outcomes remain visible." },
    ],
    featuresTitle: "Everything You Need for Returns Management",
    features: [
      { title: "RMA workflows", copy: "Stop unlabeled returns from becoming warehouse exceptions.", items: ["Authorizations", "Reason codes", "Expected SKUs"] },
      { title: "Inspection", copy: "Protect customers and sellable inventory with a clear grade.", items: ["Restock rules", "Damage flags", "Photo notes"] },
      { title: "Exchanges", copy: "Send the replacement without losing inventory control.", items: ["Exchange orders", "Size swaps", "Channel updates"] },
      { title: "Reverse logistics link", copy: "Escalate units that need repair or vendor return.", items: ["RTV", "Refurbish", "Scrap"] },
    ],
    related: ["reverse-logistics", "ecommerce-fulfillment", "pick-and-pack", "inventory-storage", "subscription-fulfillment"],
    faqs: [
      { q: "What is returns management?", a: "Returns management authorizes, receives, inspects, and resolves customer returns through restock, exchange, or other dispositions." },
      { q: "Does OneFulfillCenter manage returns?", a: "Yes. RMAs, inspection, restocking, and reverse dispositions can run in the same fulfillment operation." },
      { q: "Can customers exchange items?", a: "Yes. Exchanges can create a new outbound order after the return is received and rules are met." },
      { q: "How fast are items restocked?", a: "Restock speed depends on inspection rules. Sellable units are returned to available inventory after grading." },
      { q: "Do you support Shopify and marketplace returns?", a: "Returns can be processed for ecommerce and marketplace channels connected to the operation." },
      { q: "What if the return does not match the RMA?", a: "Exceptions are held so inventory and refunds are not updated incorrectly." },
      { q: "Is returns management the same as reverse logistics?", a: "Returns management is the customer returns process. Reverse logistics covers broader recovery, repairs, and vendor returns." },
      { q: "How is returns management priced?", a: "Pricing depends on volume, inspection, and disposition. Request a custom quote." },
    ],
  },
  {
    slug: "cross-docking",
    name: "Cross Docking",
    primaryKeyword: "cross docking services",
    seoTitle: "Cross Docking Services | Faster Inbound to Outbound | OneFulfillCenter",
    metaDescription:
      "Cross docking to move inbound freight to outbound lanes with less storage dwell. Speed distribution with OneFulfillCenter.",
    h1: "Cross Docking Built to Move Freight Through, Not Into Long Storage",
    heroCopy:
      "When product does not need to sit in reserve, OneFulfillCenter can receive inbound freight and transfer it toward outbound lanes the same day. Cross docking shortens dwell time for retail replenishment, transfers, and time-sensitive distribution.",
    definition: {
      question: "What is cross docking?",
      answer:
        "Cross docking is unloading inbound freight and moving it directly toward outbound shipping with little or no long-term storage in between.",
    },
    howItWorksAnswer:
      "Inbound shipments are received, sorted by destination, and staged to outbound doors or routes instead of being put away into reserve storage.",
    whoNeedsAnswer:
      "Retailers, distributors, and brands with high-turn or pre-allocated freight need cross docking when storage dwell adds cost without adding value.",
    costAnswer:
      "Cross docking pricing depends on inbound volume, sort complexity, labeling, and outbound mode. Quotes follow throughput rather than long-term pallet storage.",
    problemsTitle: "Putting Everything Into Storage Slows Freight That Already Has a Destination",
    problems: [
      { title: "Dwell problems", items: ["Pallets sitting for days before outbound", "Double handling", "Yard congestion"] },
      { title: "Retail problems", items: ["Store replenishment delays", "Missed delivery windows", "Extra putaway labor"] },
      { title: "Inventory problems", items: ["Pre-allocated stock mixed into reserve", "Lost urgency on transfers", "Unclear dock-to-dock status"] },
      { title: "Cost problems", items: ["Paying storage on goods that should flow", "Extra scans and moves", "Late fees"] },
    ],
    processTitle: "From Inbound Door to Outbound Lane",
    process: [
      { title: "Receive inbound freight", copy: "Arrivals are checked against expected shipments." },
      { title: "Identify destination", copy: "Freight is sorted by store, customer, or next warehouse." },
      { title: "Stage, do not bury", copy: "Product is staged for outbound rather than deep putaway." },
      { title: "Label if required", copy: "Outbound labels and documents are applied at the dock." },
      { title: "Load outbound", copy: "Freight moves to parcel, LTL, FTL, or store delivery." },
      { title: "Confirm movement", copy: "You see that inventory flowed through instead of sitting." },
    ],
    featuresTitle: "Everything You Need for Cross Docking",
    features: [
      { title: "Flow-through receiving", copy: "Keep time-sensitive freight off reserve racks.", items: ["Dock scheduling", "Sort by destination", "Same-day staging"] },
      { title: "Retail replenishment", copy: "Support store and DC transfers with less dwell.", items: ["Store carts", "Route grouping", "Appointment outbound"] },
      { title: "Hybrid with storage", copy: "Cross-dock what should flow; warehouse what must sit.", items: ["Flow SKUs", "Reserve SKUs", "Exception putaway"] },
      { title: "Visibility", copy: "Know whether inventory is in transit through the dock or stored.", items: ["Inbound status", "Outbound staging", "Exception holds"] },
    ],
    related: ["warehousing", "retail-fulfillment", "b2b-fulfillment", "inventory-storage", "ecommerce-fulfillment"],
    faqs: [
      { q: "What is cross docking?", a: "Cross docking unloads inbound freight and moves it to outbound shipping with little or no long-term storage." },
      { q: "When should I use cross docking instead of warehousing?", a: "Use cross docking when product already has a destination and storage dwell only adds cost and delay." },
      { q: "Can some SKUs be stored while others cross-dock?", a: "Yes. Flow-through and reserve storage can run in the same facility." },
      { q: "Is cross docking only for pallets?", a: "No. Cartons and mixed freight can be sorted to outbound as well." },
      { q: "Does cross docking support retail stores?", a: "Yes. Store replenishment and DC transfers are common cross-dock use cases." },
      { q: "How fast can freight leave?", a: "When inbound is expected and outbound is planned, freight can stage the same day." },
      { q: "Do you still track inventory?", a: "Yes. Even flow-through inventory is received and confirmed, not lost on the dock." },
      { q: "How is cross docking priced?", a: "Pricing follows inbound/outbound handling and sort complexity more than monthly storage." },
    ],
  },
  {
    slug: "inventory-storage",
    name: "Inventory Storage",
    primaryKeyword: "inventory storage",
    seoTitle: "Inventory Storage | Real-Time Warehouse Inventory | OneFulfillCenter",
    metaDescription:
      "Inventory storage with SKU-level tracking, availability, lots, and fulfillment-ready locations. Get secure storage and live visibility from OneFulfillCenter.",
    h1: "Inventory Storage Built for Accuracy, Not Just Square Footage",
    heroCopy:
      "Storage only helps if you know what you have and where it sits. OneFulfillCenter stores inventory in tracked locations with SKU, lot, and availability visibility so ecommerce, wholesale, and retail channels can sell with confidence.",
    definition: {
      question: "What is inventory storage?",
      answer:
        "Inventory storage is holding sellable product in controlled warehouse locations with quantities, attributes, and availability tracked so orders can be fulfilled accurately.",
    },
    howItWorksAnswer:
      "Inbound inventory is received, put away into locations, and tracked at SKU level. Available, reserved, and in-process quantities stay visible as orders and transfers occur.",
    whoNeedsAnswer:
      "Brands with growing SKU counts, multi-channel selling, or lot/expiration needs require inventory storage that is tighter than a rented cage or extra room.",
    costAnswer:
      "Inventory storage pricing depends on pallets, bins, special handling, and how long product sits. Activity such as receiving and picks is quoted with storage.",
    problemsTitle: "Space Without Inventory Truth Creates Overselling",
    problems: [
      { title: "Visibility problems", items: ["No location-level quantities", "Channel overselling", "Blind safety stock"] },
      { title: "Attribute problems", items: ["Lots mixed together", "Expired product at pick", "Serials untracked"] },
      { title: "Storage problems", items: ["Wrong product in forward pick", "Slow counts", "Shrink"] },
      { title: "Fulfillment problems", items: ["Orders released against missing stock", "Transfers you cannot see", "Returns not restocked"] },
    ],
    processTitle: "From Receipt to Available-to-Sell",
    process: [
      { title: "Receive inventory", copy: "Inbound quantities are verified against expected receipts." },
      { title: "Capture attributes", copy: "Lots, serials, and expirations are recorded when required." },
      { title: "Put away to locations", copy: "Each SKU sits in a known bin, shelf, or pallet location." },
      { title: "Track availability", copy: "On-hand, reserved, and available quantities stay current." },
      { title: "Alert and replenish", copy: "Safety stock and location replenishment keep pick faces filled." },
      { title: "Fulfill from truth", copy: "Orders pick against inventory you can actually ship." },
    ],
    featuresTitle: "Everything You Need for Inventory Storage",
    features: [
      { title: "SKU-level tracking", copy: "Know quantities by SKU and location, not a single warehouse guess.", items: ["On-hand", "Reserved", "Available"] },
      { title: "Lot, serial, and expiration", copy: "Support regulated and dated inventory.", items: ["Lot tracking", "Serial tracking", "FEFO"] },
      { title: "Inventory alerts", copy: "See issues before customers do.", items: ["Safety stock", "Low-stock alerts", "Expiration alerts"] },
      { title: "Multi-channel availability", copy: "Share one inventory pool across stores and marketplaces.", items: ["Channel rules", "Allocations", "Sync"] },
    ],
    related: ["warehousing", "ecommerce-fulfillment", "b2b-fulfillment", "returns-management", "kitting"],
    faqs: [
      { q: "What is inventory storage?", a: "Inventory storage holds product in tracked warehouse locations with quantities and availability so orders can be fulfilled accurately." },
      { q: "How is inventory tracked?", a: "Inventory is tracked at SKU and location level, with lots, serials, or expirations when the product requires it." },
      { q: "Can I see inventory in real time?", a: "Yes. Receiving, reservations, picks, and restocks update available inventory." },
      { q: "Do you support lot and expiration tracking?", a: "Yes. Lot, serial, batch, and expiration tracking can be enabled by SKU." },
      { q: "Is inventory storage different from warehousing?", a: "Warehousing is the facility and handling. Inventory storage emphasizes quantity accuracy, attributes, and availability." },
      { q: "Can storage feed both B2B and B2C?", a: "Yes. One inventory pool can serve wholesale and consumer channels with allocation rules." },
      { q: "What happens after a return is restocked?", a: "Sellable returned units increase available inventory after inspection." },
      { q: "How is inventory storage priced?", a: "Pricing follows space, handling, and any special tracking. Request a custom quote." },
    ],
  },
  {
    slug: "subscription-fulfillment",
    name: "Subscription Fulfillment",
    primaryKeyword: "subscription fulfillment",
    seoTitle: "Subscription Fulfillment | Recurring Kits & Boxes | OneFulfillCenter",
    metaDescription:
      "Subscription box and recurring order fulfillment with kitting, inventory planning, and on-time shipping. Get a subscription fulfillment quote from OneFulfillCenter.",
    h1: "Subscription Fulfillment Built for Recurring Kits, Not One-Off Orders",
    heroCopy:
      "Subscription businesses fail when the warehouse treats every cycle like a surprise. OneFulfillCenter kits, stores, and ships recurring boxes on a calendar, with component inventory planned so cycle day is not the first time you learn a SKU is short.",
    definition: {
      question: "What is subscription fulfillment?",
      answer:
        "Subscription fulfillment is picking, packing, and shipping recurring orders or kits on a schedule, including component kitting, inserts, and cycle-based inventory planning.",
    },
    howItWorksAnswer:
      "Upcoming cycles are planned, kits are assembled from components, subscriber orders are released, and boxes ship in a defined window with tracking back to the subscription platform.",
    whoNeedsAnswer:
      "Subscription box brands, replenishment clubs, and recurring-kit sellers need dedicated fulfillment when monthly cycles overwhelm ad-hoc ecommerce packing.",
    costAnswer:
      "Subscription fulfillment pricing depends on kits per cycle, components, inserts, packaging, and shipping windows. Quotes follow cycle volume and kit complexity.",
    problemsTitle: "Recurring Boxes Break When Fulfillment Has No Cycle Discipline",
    problems: [
      { title: "Planning problems", items: ["Components arriving after cycle start", "No forecast of kit demand", "Last-minute insert changes"] },
      { title: "Kitting problems", items: ["Inconsistent box contents", "Slow assembly", "Missing cards or samples"] },
      { title: "Shipping problems", items: ["Missed cycle windows", "Burst parcel volume", "Poor tracking back to subscribers"] },
      { title: "CX problems", items: ["Skipped months", "Wrong variant", "Hard to pause or skip operationally"] },
    ],
    processTitle: "From Cycle Plan to Subscriber Doorstep",
    process: [
      { title: "Plan the cycle", copy: "Upcoming kits, variants, and volumes are confirmed before assembly." },
      { title: "Receive components", copy: "Inserts and products arrive with enough lead time to kit." },
      { title: "Assemble kits", copy: "Boxes are built and checked against the cycle BOM." },
      { title: "Release subscriber orders", copy: "Active subscriptions become fulfillment work." },
      { title: "Ship in the window", copy: "Parcels leave to meet the published cycle dates." },
      { title: "Sync status", copy: "Shipped, skipped, and exception subscribers stay visible." },
    ],
    featuresTitle: "Everything You Need for Subscription Fulfillment",
    features: [
      { title: "Cycle kitting", copy: "Build this month’s box before the shipping window, not during it.", items: ["BOM per cycle", "Inserts", "Quality checks"] },
      { title: "Variant control", copy: "Support sizes, preferences, and plan tiers.", items: ["Variant SKUs", "Swaps", "Pause/skip handling"] },
      { title: "Peak-ready pick and pack", copy: "Absorb cycle-day volume without a week of delays.", items: ["Wave releases", "Scan-to-pack", "Carrier pickup"] },
      { title: "Returns and replacements", copy: "Handle damaged or missing boxes without losing the next cycle.", items: ["Replacements", "RMAs", "Restock components"] },
    ],
    related: ["kitting", "ecommerce-fulfillment", "pick-and-pack", "inventory-storage", "returns-management"],
    faqs: [
      { q: "What is subscription fulfillment?", a: "Subscription fulfillment ships recurring kits or replenishment orders on a schedule, including kitting and cycle planning." },
      { q: "Can you assemble subscription boxes?", a: "Yes. Components and inserts can be kitted into a finished box SKU before shipping." },
      { q: "How do you handle skips and pauses?", a: "Skipped or paused subscribers are excluded from the cycle release so inventory is not wasted." },
      { q: "When should components arrive?", a: "Components should arrive with enough lead time to inspect, kit, and stage before the ship window." },
      { q: "Do you support Shopify subscriptions?", a: "Subscription orders can sync from ecommerce platforms and subscription apps connected to fulfillment." },
      { q: "What if a component is late?", a: "Shortages are flagged before the cycle ships so incomplete boxes are not sent." },
      { q: "Can kits change every month?", a: "Yes. Each cycle can use a different BOM while the shipping process stays the same." },
      { q: "How is subscription fulfillment priced?", a: "Pricing follows kits per cycle, components, packaging, and shipping. Request a quote." },
    ],
  },
  {
    slug: "retail-fulfillment",
    name: "Retail Fulfillment",
    primaryKeyword: "retail fulfillment",
    seoTitle: "Retail Fulfillment | Store Replenishment & Distribution | OneFulfillCenter",
    metaDescription:
      "Retail fulfillment for store replenishment, DC transfers, and omnichannel inventory. Distribute to stores and consumers from OneFulfillCenter.",
    h1: "Retail Fulfillment Built for Stores, DCs, and Digital Demand Together",
    heroCopy:
      "Retail brands need more than parcel ecommerce. OneFulfillCenter replenishes stores, supports wholesale to retail buyers, and still ships consumer orders from the same inventory network so store shelves and online availability stay aligned.",
    definition: {
      question: "What is retail fulfillment?",
      answer:
        "Retail fulfillment is storing inventory and distributing it to retail stores, retail DCs, or omnichannel orders, including replenishment, labeling, and mixed B2B/B2C shipping.",
    },
    howItWorksAnswer:
      "Inventory is stored, then allocated to store replenishment, retail POs, or consumer orders. Outbound can be cartons to stores, pallets to DCs, or parcels to shoppers.",
    whoNeedsAnswer:
      "Retail brands, omnichannel sellers, and wholesale suppliers to retail need retail fulfillment when store restock and ecommerce share one inventory pool.",
    costAnswer:
      "Retail fulfillment pricing depends on store carton volume, pallet distribution, labeling, storage, and residual ecommerce parcels. Quotes follow the mix.",
    problemsTitle: "Stores Go Dark When Ecommerce and Replenishment Compete for the Same Stock",
    problems: [
      { title: "Allocation problems", items: ["Website overselling store inventory", "Stores starved during promos", "No store-level allocation"] },
      { title: "Replenishment problems", items: ["Late store cartons", "Routing-guide errors", "Inconsistent pack configurations"] },
      { title: "Omnichannel problems", items: ["BOPIS inventory lies", "Marketplace vs store conflicts", "Returns not usable in store"] },
      { title: "Labor problems", items: ["Separate retail and DTC warehouses", "Duplicate handling", "Peak clashes"] },
    ],
    processTitle: "From Shared Inventory to Store and Consumer Delivery",
    process: [
      { title: "Store inventory in one pool", copy: "Receiving creates available inventory for every channel." },
      { title: "Allocate by channel", copy: "Store, wholesale, and ecommerce demand get rules, not a free-for-all." },
      { title: "Build store orders", copy: "Cartons and pallets are packed to retail requirements." },
      { title: "Ship replenishment", copy: "Freight or parcel moves to stores or retail DCs." },
      { title: "Fulfill digital orders", copy: "Consumer orders pick from remaining available stock." },
      { title: "Sync availability", copy: "Store and online quantities stay current after each movement." },
    ],
    featuresTitle: "Everything You Need for Retail Fulfillment",
    features: [
      { title: "Store replenishment", copy: "Keep shelves stocked without a separate DC scramble.", items: ["Store cartons", "Route grouping", "Pack configurations"] },
      { title: "Retail labeling", copy: "Meet buyer and store requirements on the carton.", items: ["Retail labels", "Packing lists", "ASN support"] },
      { title: "Omnichannel inventory", copy: "Share stock across stores and digital channels with control.", items: ["Allocations", "Safety stock", "Channel sync"] },
      { title: "Returns to sellable", copy: "Bring retail and consumer returns back into usable inventory.", items: ["Inspection", "Restock", "Store vs web rules"] },
    ],
    related: ["b2b-fulfillment", "cross-docking", "warehousing", "ecommerce-fulfillment", "inventory-storage"],
    faqs: [
      { q: "What is retail fulfillment?", a: "Retail fulfillment distributes inventory to stores, retail DCs, and omnichannel orders from a warehouse operation." },
      { q: "Can you replenish retail stores?", a: "Yes. Store cartons, routing, and replenishment shipments can run beside ecommerce fulfillment." },
      { q: "How do you stop the website from stealing store stock?", a: "Inventory allocations and channel rules reserve stock for stores versus digital demand." },
      { q: "Do you support retail routing guides?", a: "Labeling, packing lists, and carton requirements can be applied for retail buyers." },
      { q: "Can retail and DTC share a warehouse?", a: "Yes. That is a core OneFulfillCenter model: B2B, retail, and B2C in one connected operation." },
      { q: "Is cross docking used for retail?", a: "Yes, when freight is already destined for stores and should not sit in reserve storage." },
      { q: "What about retail returns?", a: "Returned units can be inspected and restocked for the correct channel." },
      { q: "How is retail fulfillment priced?", a: "Pricing depends on store volume, pallet vs carton mix, labeling, and residual parcel volume." },
    ],
  },
];

export const SERVICE_SLUGS = SERVICE_LANDINGS.map((page) => page.slug);

export function getServiceBySlug(slug: string) {
  return SERVICE_LANDINGS.find((page) => page.slug === slug);
}

export function servicePath(slug: string) {
  return path(slug);
}

export function relatedServices(page: ServiceLanding) {
  return page.related
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is ServiceLanding => Boolean(item));
}
