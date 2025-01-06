import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Goals from "./Goals";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Goals />
    </div>
  );
};

export default Home;
