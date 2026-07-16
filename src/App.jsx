import TestimonialCard from "./components/TestimonialCard/TestimonialCard"
import BlogCard from "./components/BlogCard/BlogCard"
import ProfileCard from "./components/ProfileCard/ProfileCard"
import PricingSection from "./components/PricingSection (Single)/PricingSection"
import HeroSimple from "./components/Hero/HeroSimple/HeroSimple"
import HeroFeatureBullets from "./components/Hero/HeroFeature/HeroFeatureBullets"
import StatisticsSection from "./components/StatisticsSection/StatisticsSection"
import FeaturesGrid from "./components/FeaturesSection/FeaturesGrid"
import TeamSection from "./components/TeamSection/TeamSection.jsx"

import profileImage from "./assets/profile-thumbnail.png"
import interiorImage from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg"
import heroImage from "./assets/prism.png"


function App() {
  return (
    <div className="bg-linear-to-br from-[#F9FAFB] to-[#dbd2d8] min-h-screen">
      {/* <TestimonialCard imageurl={profileImage} username="Sarah Dole" userhandle="sarahdole" testimonial="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!" /> */}

      {/* <BlogCard imageurl={interiorImage} title="Top 5 Living Room Inspirations" badgeText="Interior" description="Curated vibrants colors for your living, make it pop & calm in the same time." /> */}

      {/* <ProfileCard imageurl={profileImage} /> */}

      {/* <HeroSimple imageUrl={heroImage} /> */}

      {/* <PricingSection /> */}

      {/* <HeroFeatureBullets imageUrl={heroImage} /> */}
      {/* <StatisticsSection /> */}
      {/* <FeaturesGrid /> */}
      <TeamSection />
    </div>
  )
}

export default App
