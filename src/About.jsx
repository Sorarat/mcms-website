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
            src="/images/orientation.png"
            alt="image 3"
          />
        </div>

        <div className="bg-customBeige-70 w-full p-12">
          <h2 className="text-3xl font-semibold p-5"> OUR GOALS</h2>

          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">1</h1>
            <h5 className="text-xl text-left font-semibold mb-5">Legacy</h5>
            <p className="text-left font-light sm:text-center leading-7 mb-10">To overall carry on the legacies of the past EXCO while improving & creating our very own legacy as we move forth together.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">2</h1>
            <h5 className="text-xl text-left font-semibold mb-5">Community</h5>
            <p className="text-left font-light sm:text-center leading-7 mb-10">Fostering a tighter knit community.</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">3</h1>
            <h5 className="text-xl text-left font-semibold mb-5">Development</h5>
            <p className="text-left font-light sm:text-center leading-7">To develop ourselves and move forward together as we strive to be better Muslims.</p>
          </div>
        </div>

        <div className="bg-lightYellow w-full p-8 py-20">
          <h2 className="text-3xl font-semibold mb-16"> MEET THE TEAM</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            <MemberAvatar
                name="Syahmi"
                position="President"
                imageSrc="/images/exco/syahmi.png"
              />
            <MemberAvatar
                name="Tanseen"
                position="Vice President (Muslim)"
                imageSrc="/images/exco/tanseen.png"
              />
            <MemberAvatar
                name="Member Name"
                position="Vice President (Malay)"
                imageSrc="/images/exco/suhailah.png"
              />
            <MemberAvatar
                name="Rabia"
                position="Secretary"
                imageSrc="/images/exco/rabia.png"
              />
            <MemberAvatar
                name="Izzah"
                position="Finance Officer"
                imageSrc="/images/exco/izzah.png"
              />
            <MemberAvatar
                name="Nadiyah"
                position="Event Director Head (Muslim)"
                imageSrc="/images/exco/nadiyah.png"
              />
            <MemberAvatar
                name="Uwais"
                position="Event Director Assitant (Muslim)"
                imageSrc="/images/exco/uwais.png"
              />
              <MemberAvatar
                name="Uzma"
                position="Event Director Head (Malay)"
                imageSrc="/images/exco/uzma.png"
              />
            <MemberAvatar
                name="Rayyan"
                position="Event Director Head (Malay)"
                imageSrc="/images/exco/rayyan.png"
              />
            <MemberAvatar
                name="Mahirah"
                position="Publicity Head"
                imageSrc="/images/exco/mahirah.png"
              />
            <MemberAvatar
                name="Fatihatul"
                position="Publicity"
                imageSrc="/images/exco/fatihatul.png"
              />
            <MemberAvatar
                name="Rushana"
                position="Publicity"
                imageSrc="/images/exco/raushana.png"
              />
            <MemberAvatar
                name="Thasbiha"
                position="Wellogs Head"
                imageSrc="/images/exco/thasbiha.png"
              />
            <MemberAvatar
                name="Rifa"
                position="Wellogs Assistant"
                imageSrc="/images/exco/rifa.png"
              />
          
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
