import Hero from '../components/Hero';
import WhatIsChoosingWell from '../components/WhatIsChoosingWell';
import Tensions from '../components/Tensions';
import ForYou from '../components/ForYou';
import TenQuestions from '../components/TenQuestions';
import ThirtyStories from '../components/ThirtyStories';
import Extraordinary from '../components/Extraordinary';
import Signup from '../components/Signup';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsChoosingWell />
      <Tensions />
      <ForYou />
      <TenQuestions />
      <ThirtyStories />
      <Extraordinary />
      <Signup />
    </>
  );
}
