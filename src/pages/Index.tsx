import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Splite from "@/components/Splite";
import SplashCursor from "@/components/SplashCursor";
import ImageWithLoader from "@/components/ImageWithLoader";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      
      <Splite 
        title="Discover Serwaa Akoto Academy"
        subtitle="Excellence in Education"
        description="Join our diverse learning community where students thrive academically and personally. From Creche to Junior High School, we provide a nurturing environment that fosters creativity, critical thinking, and lifelong learning skills."
      >
        <div className="rounded-xl overflow-hidden shadow-lg">
          <ImageWithLoader 
            src="/images/school-activities.jpg" 
            alt="Students engaged in learning activities" 
            className="w-full h-64 object-cover"
          />
        </div>
      </Splite>
      
      <Footer />
      <WhatsAppButton phoneNumber="+233123456789" />
    </div>
  );
};

export default Index;
