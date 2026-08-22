import type { Metadata } from "next";
import Wrapper from "@/layout/Wrapper";
import WarehousingInventoryStoragePage from "@/components/solutions/WarehousingInventoryStoragePage";
import { generateSolutionMetadata, SeoStructuredData } from "@/lib/seo";
import { OFC_WAREHOUSE_PATH } from "@/data/ofcNav";

export const revalidate = 60;

const SLUG = "warehousing-and-inventory-storage";
const PAGE_TITLE = "Warehousing and Inventory Storage";

export async function generateMetadata(): Promise<Metadata> {
  return generateSolutionMetadata(SLUG);
}

const Page = async () => {
  return (
    <Wrapper>
      <SeoStructuredData path={OFC_WAREHOUSE_PATH} fallbackTitle={PAGE_TITLE} />
      <div id="top">
        <WarehousingInventoryStoragePage />
      </div>
    </Wrapper>
  );
};

export default Page;
