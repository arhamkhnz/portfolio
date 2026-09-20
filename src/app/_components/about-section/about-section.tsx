"use client";

import Card from "../card/card";
import AboutCard from "./grid-cards/about-card";
import BuildCard from "./grid-cards/build-card";
import CTACard from "./grid-cards/cta-card";
import GreetCard from "./grid-cards/greet-card";
import ImageCard from "./grid-cards/image-card";
import ResumeCard from "./grid-cards/resume-card";
import SocialCard from "./grid-cards/social-card";
import TechStackCard from "./grid-cards/tech-stack-card";

export default function AboutSection() {
  const introCards = [
    { component: <GreetCard />, key: "greet-card" },
    { component: <SocialCard />, key: "social-card" },
    { component: <ResumeCard />, key: "resume-card" },
    { component: <ImageCard />, key: "image-card" },
  ];

  return (
    <div className="mx-auto mt-2 mb-8 max-w-352.5 rounded-xl p-4 lg:p-0">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {introCards.map((card) => (
          <Card key={card.key} type="plain">
            {card.component}
          </Card>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="col-span-1 md:col-span-2 lg:col-span-7">
          <Card type="plain">
            <AboutCard />
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-5">
          <Card type="plain">
            <TechStackCard />
          </Card>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="col-span-1 md:col-span-2 lg:col-span-5">
          <Card type="plain">
            <BuildCard />
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-7">
          <Card type="plain">
            <CTACard />
          </Card>
        </div>
      </div>
    </div>
  );
}
