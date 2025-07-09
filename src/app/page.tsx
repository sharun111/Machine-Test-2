
import HeroSection from '@/components/Herosection/HeroSection';
import Portfolio from "../components/Portfolio";
import Services from "@/components/Services/Services";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonials";
import Delivery from "@/components/Delivery";
import Footer from "@/components/Footer";
import Benifits from "@/components/Benifits";
import Header from "@/components/Header/Header";



export default function page() {
  return (
    <div id="services">
    <div className="">

      

      <div><Header/></div>
      <div><HeroSection /></div>
      <div><Services/></div>
      <div id="portfolio"><Portfolio/></div>
      <div id="delivery"><Benifits/></div>
      <div id="service"><Delivery/></div>
      <div id="pricing"><Pricing/></div>
      <div id="faq"><Faq/></div>
      <div><Testimonial/></div>
      <div><Footer/></div>
      

    </div>
    </div>

  );
}
