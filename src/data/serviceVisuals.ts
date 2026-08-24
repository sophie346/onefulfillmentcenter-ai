export type ServiceVisual = {
  src: string;
  alt: string;
  caption: string;
};

const img = (file: string) => `/assets/img/services/${file}`;

const trio = (
  slugFiles: [string, string, string],
  alts: [string, string, string],
  captions: [string, string, string],
): [ServiceVisual, ServiceVisual, ServiceVisual] =>
  slugFiles.map((file, index) => ({
    src: img(file),
    alt: alts[index],
    caption: captions[index],
  })) as [ServiceVisual, ServiceVisual, ServiceVisual];

const BY_SLUG: Record<string, [ServiceVisual, ServiceVisual, ServiceVisual]> = {
  "ecommerce-fulfillment": trio(
    ["svc-ecommerce-hero.jpg", "svc-ecommerce-process.jpg", "svc-ecommerce-floor.jpg"],
    [
      "Worker packing a consumer ecommerce order at a fulfillment bench",
      "Picker pulling mixed SKUs from carton-flow shelves",
      "Packed ecommerce parcels moving toward shipping",
    ],
    [
      "DTC orders packed at the station",
      "Pick paths built for small-parcel ecommerce",
      "Outbound bags and cartons headed to carriers",
    ],
  ),
  "b2b-fulfillment": trio(
    ["svc-b2b-hero.jpg", "svc-b2b-process.jpg", "svc-b2b-floor.jpg"],
    [
      "Wholesale cartons and pallets being labeled for B2B shipment",
      "Team building mixed wholesale cartons",
      "Palletized freight staged at an LTL loading dock",
    ],
    [
      "Wholesale cartons and pallet orders",
      "B2B packing with carton control",
      "LTL and dock staging for bulk outbound",
    ],
  ),
  "amazon-fba-prep": trio(
    ["svc-fba-hero.jpg", "svc-fba-process.jpg", "svc-fba-floor.jpg"],
    [
      "Units being labeled and polybagged for marketplace inbound prep",
      "Master cartons sealed for inbound shipment",
      "Pallets of prepped cartons waiting for the inbound truck",
    ],
    [
      "Unit labeling and polybag prep",
      "Carton build for inbound shipments",
      "Prepped inventory staged for the truck",
    ],
  ),
  warehousing: trio(
    ["svc-warehousing-hero.jpg", "svc-warehousing-process.jpg", "svc-warehousing-floor.jpg"],
    [
      "Long aisle of pallet racking in a fulfillment warehouse",
      "Inbound pallet received at the dock against expected freight",
      "Secure warehouse interior with reserve pallet storage",
    ],
    [
      "Racking built for storage and pick",
      "Receiving and putaway at the dock",
      "Secure reserve and bulk locations",
    ],
  ),
  kitting: trio(
    ["svc-kitting-hero.jpg", "svc-kitting-process.jpg", "svc-kitting-floor.jpg"],
    [
      "Worker assembling a multi-SKU kit on a warehouse bench",
      "Kit contents placed into boxes from component trays",
      "Finished kits palletized next to component shelves",
    ],
    [
      "Components assembled into one kit SKU",
      "Bundle and box assembly on the line",
      "Finished kits stored ready to ship",
    ],
  ),
  "pick-and-pack": trio(
    ["svc-pickpack-hero.jpg", "svc-pickpack-process.jpg", "svc-pickpack-floor.jpg"],
    [
      "Item scanned into a mailer at a packing station",
      "Picker with a cart scanning a bin location",
      "Multiple packing stations with scales and printers",
    ],
    [
      "Scan-to-pack at the station",
      "Directed picking down the aisle",
      "Pack wall built for daily order volume",
    ],
  ),
  "reverse-logistics": trio(
    ["svc-reverse-hero.jpg", "svc-reverse-process.jpg", "svc-reverse-floor.jpg"],
    [
      "Returned parcels unloaded from a gaylord for inspection",
      "Returned units sorted into restock and salvage totes",
      "Inbound returns dock with gaylords of returned mailers",
    ],
    [
      "Returns arriving back into the building",
      "Sort, restock, recycle, or salvage",
      "Reverse flow kept off the outbound floor",
    ],
  ),
  "returns-management": trio(
    ["svc-returns-hero.jpg", "svc-returns-process.jpg", "svc-returns-floor.jpg"],
    [
      "Returned product inspected at an RMA station",
      "Graded-good inventory put back into a shelf location",
      "Returns processing room with inspection tables and restock carts",
    ],
    [
      "RMA inspection before restock",
      "Recovered units back in location",
      "Returns processed without stopping outbound",
    ],
  ),
  "cross-docking": trio(
    ["svc-crossdock-hero.jpg", "svc-crossdock-process.jpg", "svc-crossdock-floor.jpg"],
    [
      "Inbound pallet moved across the floor toward an outbound dock",
      "Short-term staging lanes for freight that will not be put away",
      "Two trailers transferring freight across a cross-dock",
    ],
    [
      "Inbound freight moving straight to outbound",
      "Short-term lanes instead of long putaway",
      "Dock-to-dock transfer the same day",
    ],
  ),
  "inventory-storage": trio(
    ["svc-inventory-hero.jpg", "svc-inventory-process.jpg", "svc-inventory-floor.jpg"],
    [
      "Bin locations counted with a handheld scanner",
      "Cycle count in reserve pallet racking",
      "Mezzanine of organized small-SKU bin storage",
    ],
    [
      "SKU and location-level storage",
      "Cycle counts in reserve",
      "Bin capacity for growing catalogs",
    ],
  ),
  "subscription-fulfillment": trio(
    ["svc-subscription-hero.jpg", "svc-subscription-process.jpg", "svc-subscription-floor.jpg"],
    [
      "Identical subscription boxes packed in a repeating batch",
      "Mailers packed on a timed subscription line",
      "Finished subscription boxes on a conveyor to shipping",
    ],
    [
      "Recurring kits packed on a release calendar",
      "Batch packing for the next cycle",
      "Subscription shipments leaving together",
    ],
  ),
  "retail-fulfillment": trio(
    ["svc-retail-hero.jpg", "svc-retail-process.jpg", "svc-retail-floor.jpg"],
    [
      "Retail replenishment cartons packed for store allocation",
      "Case-pick from pallet racking for store delivery",
      "Retail cartons staged by destination at the dock",
    ],
    [
      "Store replenishment carton work",
      "Case pick for retail DCs and stores",
      "Outbound staged by store destination",
    ],
  ),
};

const DEFAULT = BY_SLUG["ecommerce-fulfillment"];

export const visualsForService = (slug: string) => BY_SLUG[slug] ?? DEFAULT;
