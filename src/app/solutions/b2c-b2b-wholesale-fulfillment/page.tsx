import type { Metadata } from "next";
import Wrapper from "@/layout/Wrapper";
import B2bWholesaleFulfillmentPage from "@/components/solutions/B2bWholesaleFulfillmentPage";

export const metadata: Metadata = {
  title: "B2C & B2B Wholesale Fulfillment",
  description:
    "Unify B2C and B2B wholesale fulfillment with multi-channel order management, real-time inventory, automation, returns, and distributed warehouses.",
};

const Page = () => {
  return (
    <Wrapper>
      <B2bWholesaleFulfillmentPage />
    </Wrapper>
  );
};

export default Page;
