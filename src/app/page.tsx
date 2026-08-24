import type { Metadata } from "next";
import Wrapper from "../layout/Wrapper";
import HomeOne from "@/components/homes/multi-page/home";
import { createWebsiteMetadata, SeoStructuredData } from "@/lib/seo";
import "@/styles/ofc-tw.css";

export const revalidate = 60;

const HOME_TITLE = "Onefulfillcenter | Next Generation Fulfillment Center";
const HOME_DESCRIPTION =
  "Omni-channel fulfillment with a distributed warehouse network that optimizes B2B and B2C order processing for brands and retailers.";

export async function generateMetadata(): Promise<Metadata> {
  return createWebsiteMetadata({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  });
}

const MainHome = async () => {
  return (
    <Wrapper>
      <SeoStructuredData mode="website" fallbackTitle={HOME_TITLE} />
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;
