import TestimonialCard from "./components/TestimonialCard"
import profileImage from "./assets/profile-thumbnail.png"

function App() {
  return (
    <div className="">
      <TestimonialCard imageurl={profileImage} username="Sarah Dole" userhandle="sarahdole" testimonial="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!" />
    </div>
  )
}

export default App
