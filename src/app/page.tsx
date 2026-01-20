'use client';

import Hero from "@/components/sections/Hero";
import StudioIntro from "@/components/sections/StudioIntro";
import StudioSection from "@/components/sections/StudioSection";
import AudienceSection from "@/components/sections/AudienceSection";
import PracticeSection from "@/components/sections/PracticeSection";
import InvitationSection from "@/components/sections/InvitationSection";
import UpdatesCTA from "@/components/sections/UpdatesCTA";
import Footer from "@/components/layout/Footer";
import { useReveal } from "@/lib/useReveal";

export default function Home() {
  useReveal();

  return (
    <main>
      <Hero />
      <StudioIntro/>
      <StudioSection/>
      <AudienceSection/>
      <PracticeSection/>
      <InvitationSection/>
      <UpdatesCTA/>
      <Footer/>
    </main>
  );
}