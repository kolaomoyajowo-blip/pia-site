import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import WhatWeDo from "./components/WhatWeDo";
import ProgramsSnapshot from "./components/ProgramsSnapshot";
import ResearchFeatured from "./components/ResearchFeatured";
import FellowshipBanner from "./components/FellowshipBanner";
import Membership from "./components/Membership";
import Impact from "./components/Impact";
import Events from "./components/Events";
import Callout from "./components/Callout";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <WhatWeDo />
      <ProgramsSnapshot />
      <ResearchFeatured />
      <FellowshipBanner />
      <Membership />
      <Impact />
      <Events />
      <Callout />
      <Newsletter />
    </main>
  );
}
