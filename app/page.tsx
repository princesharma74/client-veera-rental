import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/home/hero";
import Testimonials from "@/components/home/testimonials";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import TrustPitch from "@/components/home/book-now";
import Services from "@/components/home/services";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Services/>
      <TrustPitch/>
      <Contact/>
      <Testimonials/>
      <Footer/>
  </div>
  );
}
