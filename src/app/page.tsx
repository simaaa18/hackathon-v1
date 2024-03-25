import AboutUs from "@/components/AboutUs";
import Banner1 from "@/components/Banner1";
import Banner2 from "@/components/Banner2";
import Banner3 from "@/components/Banner3";
import CalculatorSection from "@/components/Calculator";
import CitySection from "@/components/CitySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PropertiPopuler from "@/components/PropertiPopuler";
import Testimoni from "@/components/Testimoni";
import WhySection from "@/components/WhySection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Banner1 />
        <WhySection />
        <Banner2 />
        <PropertiPopuler />
        <CitySection />
        <CalculatorSection />
        <Testimoni />
        <Banner3 />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}
