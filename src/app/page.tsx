import Image from "next/image";

import Link from "next/link";

import HeroSection from '@/components/HeroSection';
import Portfolio from "../components/Portfolio";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonials";
import Delivery from "@/components/Delivery";
import Footer from "@/components/Footer";
import Benifits from "@/components/Benifits";



export default function Header() {
  return (
    <div id="services">
    <div className="[width:1509px] [height:342px] bg-[url('/c5e14e11ec0ab683136075decb92161458861ab1.jpg')] bg-cover bg-center text-white font-inter relative ">

      <header className="flex justify-between items-center py-6 px-12">
        <div className="absolute [width:115.74px] [height:48px] [top:58px] [left:56px] font-semibold text-[40px] leading-[100%] tracking-[0%] align-middle">
          LOGO
        </div>

        <nav className="absolute [width:478.2px] [height:100.7px] [top:32px] [left:481px] flex items-center justify-between [gap:34px] [padding-top:39.84px] [padding-bottom:39.86px] text-sm font-medium">
            <Link href="#hero" scroll={true}><span className="hover:text-yellow-400 cursor-pointer">Home</span></Link>
            <Link href="#portfolio" scroll={true}><span className="hover:text-yellow-400 cursor-pointer">Portfolio</span></Link>
            <Link href="#delivery" scroll={true}><span className="hover:text-yellow-400 cursor-pointer">Benefits</span></Link>
            <Link href="#service" scroll={true}><span className="hover:text-yellow-400 cursor-pointer">Services</span></Link>
            <Link href="#pricing" scroll={true}><span className="hover:text-yellow-400 cursor-pointer">Pricing</span></Link>
            <Link href="#faq" scroll={true}><span className="hover:text-yellow-400 cursor-pointer">FAQ</span></Link>
        </nav>

        <button className="absolute [width:177.67px] [height:44px] [top:63px] [left:1207.33px] border border-yellow-400 text-yellow-400 [padding-top:10px] [padding-bottom:10px] [padding-left:21px] [padding-right:21px] rounded-[30px] text-sm hover:bg-yellow-400 hover:text-black transition ">
          Book a demo →
        </button>
      </header>

      
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
