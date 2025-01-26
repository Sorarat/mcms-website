import MemberAvatar from "./components/Avatar";
import Navbar from "./components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col mb-10 md:flex-row md:items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold p-5">WHAT WE DO</h2>
            <p className="text-left font-light leading-2 md:leading-7">Malay Cultural and Muslim Society is a club which aims at cultivating a deep passion and appreciation for the Malay Culture & Islamic faith. 
              The club not only initiates activities and workshops that promote seeking beneficial knowledge pertaining to the Malay culture and Islam, but also functions
              as a support system for all Muslim students in SIM.
            </p>
          </div>
         <img
            className="h-auto max-w-full rounded-lg m-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-h-[600px] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
            src="src/images/img3.jpg"
            alt="image 3"
          />
        </div>

        <div className="bg-customBeige-70 w-full p-5 mb-10">
          <h2 className="text-3xl font-semibold p-5"> OUR GOALS</h2>

          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">1</h1>
            <p className="text-left font-light mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Sed efficitur, lectus et facilisis placerat.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">2</h1>
            <p className="text-left font-light mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Sed efficitur, lectus et facilisis placerat.</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">3</h1>
            <p className="text-left font-light mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Sed efficitur, lectus et facilisis placerat.</p>
          </div>
        </div>

        <div className="bg-lightYellow w-full p-4 ">
          <h2 className="text-3xl font-semibold mb-10 mt-8"> MEET THE TEAM</h2>
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
    </div>
  );
};

export default About;
