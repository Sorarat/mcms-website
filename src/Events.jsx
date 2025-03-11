import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col bg-customBeige-40 p-4 mt-5 md:items-start md:p-16">
        <h2 className="text-3xl font-semibold m-3">EVENTS</h2>
        <p className="text-left font-light leading-2 m-3 md:leading-7">
        MCMS hosts a variety of events that celebrate both Malay culture and Islamic traditions, 
        while also promoting bonding among members. From Iftarawih during Ramadan and Raya celebrations, 
        to exciting events like Sports Day and Orientation, there’s something for everyone. 
        Our events provide opportunities to deepen cultural understanding, strengthen faith, 
        and build lasting friendships within our vibrant community.
        </p>
      </div>

      <div className="bg-lightYellow p-6 md:p-16">
        <div className="mb-14">
          <h4 className="text-2xl font-medium m-4 md:text-left">Orientation</h4>
          <div className="flex flex-col md:flex-row md:items-start"> 
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="/images/orientation.png"
              alt="orientation"
            />
            <div className="md:ml-4"> 
              <p className="text-left font-light mt-3 leading-2 md:leading-7 p-2">
                The MCMS Orientation Event welcomed new members with engaging sessions on Malay culture and Islamic values.
                Attendees connected with fellow members, learned about the club’s activities, and gained insight into the society's mission. 
                The event encouraged participation and set the stage for an exciting year ahead, 
                with everyone excited to contribute to the community and build lasting friendships.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h4 className="text-2xl font-medium m-4 md:text-left">Qiyam Path to Purity</h4>
          <div className="flex flex-col md:flex-row md:items-start"> 
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="/images/qiyam.png"
              alt="qiyam"
            />
            <div className="md:ml-4"> 
              <p className="text-left font-light mt-3 leading-2 md:leading-7 p-2">
              This special gathering organized by our club provided an opportunity for members to come together in worship and reflection. 
              Participants engage in the peaceful practice of Tahajjud, offering prayers and seeking spiritual growth.
               The event encourages a deeper connection with Allah, fostering a sense of community and unity among all who attend. 
               It’s a time for personal reflection, renewal of faith, and strengthening bonds with fellow members, creating a meaningful and uplifting experience for everyone involved.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h4 className="text-2xl font-medium m-4 md:text-left">Leadership Day</h4>
          <div className="flex flex-col md:flex-row md:items-start"> 
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="/images/leadershipDay.png"
              alt="leadershipDay"
            />
            <div className="md:ml-4"> 
              <p className="text-left font-light mt-3 leading-2 md:leading-7 p-2">
              Our Leadership Day for the EXCO of the Malay Cultural and Muslim Society was a meaningful blend of growth and camaraderie. 
              The day began with an insightful leadership seminar led by a professional speaker, focusing on effective leadership strategies and team dynamics. 
              Following the session, the team bonded through engaging activities like bowling, fostering stronger connections and teamwork.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h4 className="text-2xl font-medium m-4 md:text-left">Subcommitee Welcome Tea</h4>
          <div className="flex flex-col md:flex-row md:items-start"> 
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="/images/welcomeTea.png"
              alt="subcommWelcomeTea"
            />
            <div className="md:ml-4"> 
              <p className="text-left font-light mt-3 leading-2 md:leading-7 p-2">
              The MCMS Subcommittee Welcome Tea warmly welcomed new subcommittee members with an engaging session hosted by the EXCO.
               The event introduced members to the society’s mission, upcoming initiatives, and the important roles they’ll play. 
               Beyond the introductions, fun bonding activities created a relaxed atmosphere, allowing everyone to connect and build relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h4 className="text-2xl font-medium m-4 md:text-left">Raya</h4>
          <div className="flex flex-col md:flex-row md:items-start"> 
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="/images/raya.jpg"
              alt="raya"
            />
            <div className="md:ml-4"> 
              <p className="text-left font-light mt-3 leading-2 md:leading-7 p-2">
                The MCMS Raya event brought together members for a celebration of the Malay culture with traditional performances and festive activities. 
                This event included cultural dances, musical performances, and a feast that showcased delicious traditional Malay dishes. 
                It was a joyous occasion where members came together to celebrate the spirit of unity, share memories, and strengthen bonds with one another. 
                The Raya celebration provided an opportunity for cultural exchange, fostering a deeper appreciation for Malay traditions and Islamic values."
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h4 className="text-2xl font-medium m-4 md:text-left">Iftarawih</h4>
          <div className="flex flex-col md:flex-row md:items-start"> 
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="/images/iftarawih.JPG"
              alt="iftarawih"
            />
            <div className="md:ml-4"> 
              <p className="text-left font-light mt-3 leading-2 md:leading-7 p-2">
              The Iftarawih gathering was a time for our members to come together for communal prayers and a shared meal, fostering a spirit of unity and reflection. 
              The event began with a thoughtful reflection on the significance of Ramadan, followed by the evening prayers and a delicious Iftar meal. 
              Members of all ages came together to celebrate the blessings of the holy month, share their experiences, and offer gratitude. 
              It was an opportunity to strengthen the community and deepen the collective sense of spirituality and togetherness.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h4 className="text-2xl font-medium m-4 md:text-left">Sports Day</h4>
          <div className="flex flex-col md:flex-row md:items-start"> 
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="/images/sportsDay.JPG"
              alt="sportsDay"
            />
            <div className="md:ml-4"> 
              <p className="text-left font-light mt-3 leading-2 md:leading-7 p-2">
                MCMS Sports Day provided a fun and competitive atmosphere, where members participated in various sports activities to build teamwork and friendship. 
                The day featured a variety of events, from friendly football matches to exciting relay races, all designed to encourage participation, teamwork, and physical fitness.
                Members of all skill levels were able to join in, fostering a spirit of camaraderie and healthy competition. 
                Sports Day was not just about winning but about building lasting connections, having fun, and encouraging one another to push their limits.
              </p>
            </div>
          </div>
        </div>

       

        <div>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Events;
