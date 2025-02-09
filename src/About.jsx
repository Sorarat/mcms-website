import MemberAvatar from "./components/Avatar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col mb-10 md:flex-row p-3 md:p-12 md:items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold p-2">WHAT WE DO</h2>
            <p className="text-left font-light leading-2 md:leading-7 md:p-5">Malay Cultural and Muslim Society is a club which aims at cultivating a deep passion and appreciation for the Malay Culture & Islamic faith. 
              The club not only initiates activities and workshops that promote seeking beneficial knowledge pertaining to the Malay culture and Islam, but also functions
              as a support system for all Muslim students in SIM.
            </p>
          </div>
         <img
            className="h-auto max-w-full rounded-lg m-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-h-[600px] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
            src="src/images/orientation.jpg"
            alt="image 3"
          />
        </div>

        <div className="bg-customBeige-70 w-full p-12">
          <h2 className="text-3xl font-semibold p-5"> OUR GOALS</h2>

          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">1</h1>
            <h5 className="text-xl text-left font-semibold mb-5">Foster Cultural Awareness and Appreciation.</h5>
            <p className="text-left font-light sm:text-center leading-7 mb-10">To promote understanding and appreciation of Malay culture and Islamic traditions among students of all backgrounds through cultural events, workshops, and educational programs.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">2</h1>
            <h5 className="text-xl text-left font-semibold mb-5">Build a Supportive Malay Muslim Community on Campus</h5>
            <p className="text-left font-light sm:text-center leading-7 mb-10">TTo create a supportive and inclusive space for Muslim students, particularly those of Malay heritage, where they can connect, share experiences, and engage in spiritual and social activities.</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">3</h1>
            <h5 className="text-xl text-left font-semibold mb-5">Empower Leadership and Personal Growth</h5>
            <p className="text-left font-light sm:text-center leading-7">To nurture leadership skills and personal development within the Malay Muslim community by providing opportunities for members to take on active roles and contribute to club activities.</p>
          </div>
        </div>

        <div className="bg-lightYellow w-full p-8 py-20">
          <h2 className="text-3xl font-semibold mb-16"> MEET THE TEAM</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
              <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
            <MemberAvatar
                name="Member Name"
                position="Position"
                imageSrc="src/images/harry.jpg"
              />
          
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
