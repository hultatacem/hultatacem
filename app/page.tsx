import Footer from "./components/footer";
import AboutSection from "./components/main-section/aboutSection";
import Faq from "./components/main-section/faq/faq";
import HeroSection from "./components/main-section/heroSection";
import Partners from "./components/main-section/partners";
import Theme from "./components/main-section/theme";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <div className="nav-section bg-white w-full z-10  sticky top-0">
        <Navbar />
      </div>
      <HeroSection />
      <AboutSection />
      <Theme />
      <Faq />
      <Partners />
      <Footer />
    </>
  );
}
