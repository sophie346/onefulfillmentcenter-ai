import type { Metadata } from "next";
import Wrapper from "../layout/Wrapper";
import HomeOne from "@/components/homes/multi-page/home";

export const metadata: Metadata = {
  title: "Onefulfillcenter | Next Generation Fulfillment Center",
  description:
    "Omni-channel fulfillment with a distributed warehouse network that optimizes B2B and B2C order processing for brands and retailers.",
};

const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;
