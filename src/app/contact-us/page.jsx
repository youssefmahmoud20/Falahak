import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import FooterFour from "@/components/FooterFour";
import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import TopBarFour from "@/components/TopBarFour";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* TopBarFour */}
        <TopBarFour />

        {/* HeaderOne */}
        <HeaderFour />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='Contact Us' />

        {/* ContactUsInner */}
        <ContactUsInner />

        {/* FooterOne */}
        <FooterFour />
      </section>
    </AOSWrap>
  );
};

export default page;
