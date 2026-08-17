import type { Metadata } from "next";
import Wrapper from "@/layout/Wrapper";
import WarehousingInventoryStoragePage from "@/components/solutions/WarehousingInventoryStoragePage";

export const metadata: Metadata = {
  title: "Warehousing and Inventory Storage",
  description:
    "Complete solution for inventory storage with distributed warehousing, real-time tracking, kitting, returns, and secure fulfillment operations.",
};

const Page = () => {
  return (
    <Wrapper>
      <div id="top">
        <WarehousingInventoryStoragePage />
      </div>
    </Wrapper>
  );
};

export default Page;
