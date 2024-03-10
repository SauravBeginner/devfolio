import { FeaturedSection } from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import { SparklesPreview } from "@/components/SparklesPreview";
import TestimonialCards from "@/components/TestimonialCards";
import { TracingBeamDemo } from "@/components/TracingBeamDemo";
import { UpcomingWebinars } from "@/components/UpcomingWebinars";
import { WhyChooseUs } from "@/components/WhyChooseUs";

function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      {/* <TracingBeamDemo />  */}
      {/* <FeaturedCourses /> */}
      <WhyChooseUs />
      <UpcomingWebinars />
      {/* <SparklesPreview />  */}
      <Instructors />
      <TestimonialCards />
    </main>
  );
}

export default Home;
