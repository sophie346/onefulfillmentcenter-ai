export const OFC_WAREHOUSE_PATH = "/solutions/warehousing-and-inventory-storage/";
export const OFC_B2B_FULFILLMENT_PATH = "/solutions/b2c-b2b-wholesale-fulfillment/";

export type OfcNavItem = {
  title: string;
  href: string;
};

export const ofcNav: OfcNavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Warehousing and Inventory Storage",
    href: OFC_WAREHOUSE_PATH,
  },
  {
    title: "B2C & B2B Wholesale Fulfillment",
    href: OFC_B2B_FULFILLMENT_PATH,
  },
];
