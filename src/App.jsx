import TestimonialCard from "./components/TestimonialCard/TestimonialCard"
import BlogCard from "./components/BlogCard/BlogCard"
import ProfileCard from "./components/ProfileCard/ProfileCard"

import profileImage from "./assets/profile-thumbnail.png"
import interiorImage from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg"

function App() {
  return (
    <div className="">
      {/* <TestimonialCard imageurl={profileImage} username="Sarah Dole" userhandle="sarahdole" testimonial="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!" /> */}

      {/* <BlogCard imageurl={interiorImage} title="Top 5 Living Room Inspirations" badgeText="Interior" description="Curated vibrants colors for your living, make it pop & calm in the same time." /> */}

      <ProfileCard imageurl={profileImage} />
    </div>
  )
}

export default App
