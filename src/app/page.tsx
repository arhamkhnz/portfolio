import About from "./_components/about-section/grid-cards/about";
import Capabilities from "./_components/about-section/grid-cards/capabilities";
import Contact from "./_components/about-section/grid-cards/contact";
import Introduction from "./_components/about-section/grid-cards/introduction";
import PhotoPlaceholder from "./_components/about-section/grid-cards/photo-placeholder";
import Resume from "./_components/about-section/grid-cards/resume";
import SocialLinks from "./_components/about-section/grid-cards/social-links";
import TechStackOverview from "./_components/about-section/grid-cards/tech-stack-overview";
import Card from "./_components/card/card";
import HeroSection from "./_components/hero-section/hero-section";
import SmoothScrollbar from "./_components/smooth-scrollbar/smooth-scrollbar";

export default function Home() {
  return (
    <SmoothScrollbar>
      <HeroSection />

      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-8 px-4 pt-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:px-8">
        <Card className="lg:col-span-3">
          <Introduction />
        </Card>
        <Card className="lg:col-span-3">
          <SocialLinks />
        </Card>
        <Card className="lg:col-span-3">
          <Resume />
        </Card>
        <Card className="lg:col-span-3">
          <PhotoPlaceholder />
        </Card>

        <Card className="sm:col-span-2 lg:col-span-7">
          <About />
        </Card>
        <Card className="sm:col-span-2 lg:col-span-5">
          <TechStackOverview />
        </Card>

        <Card className="sm:col-span-2 lg:col-span-5">
          <Capabilities />
        </Card>
        <Card className="sm:col-span-2 lg:col-span-7">
          <Contact />
        </Card>
      </div>
    </SmoothScrollbar>
  );
}
