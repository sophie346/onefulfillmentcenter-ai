import type { Metadata } from "next";
import Wrapper from "@/layout/Wrapper";
import B2bWholesaleFulfillmentPage from "@/components/solutions/B2bWholesaleFulfillmentPage";
import { generateSolutionMetadata, SeoStructuredData } from "@/lib/seo";
import { OFC_B2B_FULFILLMENT_PATH } from "@/data/ofcNav";

export const revalidate = 60;

const SLUG = "b2c-b2b-wholesale-fulfillment";
const PAGE_TITLE = "B2C & B2B Wholesale Fulfillment";

export async function generateMetadata(): Promise<Metadata> {
  return generateSolutionMetadata(SLUG);
}

const Page = async () => {
  return (
    <Wrapper>
      <SeoStructuredData
        path={OFC_B2B_FULFILLMENT_PATH}
        fallbackTitle={PAGE_TITLE}
      />
      <B2bWholesaleFulfillmentPage />
    </Wrapper>
  );
};

export default Page;
