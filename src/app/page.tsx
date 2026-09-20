import AboutSection from "./_components/about-section/about-section";
import HeroSection from "./_components/hero-section/hero-section";
import SmoothScrollbar from "./_components/smooth-scrollbar/smooth-scrollbar";

export default function Home() {
  return (
    <SmoothScrollbar>
      <HeroSection />
      <AboutSection />
    </SmoothScrollbar>
  );
}
