import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import Navbar from "./Components/Navbar";
import StoryBehind from "./Components/StoryBehindUs";

export default function Home() {
  return (
    <div className='bg-black text-white'>
    <Navbar/>
    <Hero/>
    <Mission/>
    <StoryBehind/>
    <Footer/>
    </div>
  );
}
