import Navbar from "./components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col md:flex-row items-start">
          <div>
            <h2 className="text-3xl font-semibold p-5">WHAT WE DO</h2>
            <p className="text-left font-light">Malay Cultural and Muslim Society is a club which aims at cultivating a deep passion and appreciation for the Malay Culture & Islamic faith. 
              The club not only initiates activities and workshops that promote seeking beneficial knowledge pertaining to the Malay culture and Islam, but also functions
              as a support system for all Muslim students in SIM.
            </p>
          </div>
         <img
            className="h-auto max-w-full rounded-lg m-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[60%] lg:max-h-[800px] lg:max-w-[50%] mx-auto md:ml-4"
            src="src/images/img3.jpg"
            alt="image 3"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold p-5"> Our Goals</h2>
        </div>
        <div>
          <h2 className="text-3xl font-semibold p-5"> Meet the Team</h2></div>
      </div>
    </div>
  );
};

export default About;
