// import BrandName from "@/components/ui/BrandName";

// export default function Home() {
//   return (
//     <main className="container section">
//       <h1 className="text-5xl">
//         <BrandName />
//       </h1>

//       <p className="mt-4 max-w-xl">
//         Thoughtfully designed interiors and professional interior design
//         training.
//       </p>
//     </main>
//   );
// }

import Hero from "@/components/sections/Hero";
import StudioIntro from "@/components/sections/StudioIntro";
import StudioSection from "@/components/sections/StudioSection";
import AudienceSection from "@/components/sections/AudienceSection";
import PracticeSection from "@/components/sections/PracticeSection";
import InvitationSection from "@/components/sections/InvitationSection";
import UpdatesCTA from "@/components/sections/UpdatesCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
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