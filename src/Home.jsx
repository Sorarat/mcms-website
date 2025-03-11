import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Goals from "./components/Goals";
import EventsInHome from "./components/EventsInHome";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Goals />
      <EventsInHome />
      <Footer/>
    </div>
  );
};

export default Home;
