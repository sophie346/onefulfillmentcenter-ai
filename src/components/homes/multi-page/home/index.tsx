import OfcHeader from "./ofc/OfcHeader";
import OfcHero from "./ofc/OfcHero";
import OfcProcess from "./ofc/OfcProcess";
import OfcHowItWorks from "./ofc/OfcHowItWorks";
import OfcSupplyChain from "./ofc/OfcSupplyChain";
import OfcBenefits from "./ofc/OfcBenefits";
import OfcSoftware from "./ofc/OfcSoftware";
import OfcIntegrations from "./ofc/OfcIntegrations";
import OfcLocations from "./ofc/OfcLocations";
import OfcIndustries from "./ofc/OfcIndustries";
import OfcNewsletterFooter from "./ofc/OfcNewsletterFooter";

const HomeOne = () => {
  return (
    <div className="ofc-home">
      <OfcHeader />
      <main>
        <OfcHero />
        <OfcProcess />
        <OfcHowItWorks />
        <OfcSupplyChain />
        <OfcBenefits />
        <OfcSoftware />
        <OfcIntegrations />
        <OfcLocations />
        <OfcIndustries />
        <OfcNewsletterFooter />
      </main>
    </div>
  );
};

export default HomeOne;
