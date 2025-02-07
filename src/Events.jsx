import Navbar from "./components/Navbar";

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
        <div>
          <h4 className="text-2xl font-medium m-4 md:text-left">Orientation</h4>
          <div className="flex flex-col md:flex-row ">
            <p className="text-left font-light mt-3 leading-2 md:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin eu placerat ex, a dignissim orci. In imperdiet nibh eu luctus viverra. 
            Sed elementum quam consectetur neque congue suscipit. Cras ultricies dictum lobortis. 
            </p>
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-h-[600px] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="src/images/img3.jpg"
              alt="image 3"
            />
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-medium m-4 mt-10 md:text-left">Raya</h4>
          <div className="flex flex-col md:flex-row ">
            <p className="text-left font-light mt-3 leading-2 md:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin eu placerat ex, a dignissim orci. In imperdiet nibh eu luctus viverra. 
            Sed elementum quam consectetur neque congue suscipit. Cras ultricies dictum lobortis. 
            </p>
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-h-[600px] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="src/images/img3.jpg"
              alt="image 3"
            />
          </div>
        </div>


        <div>
          <h4 className="text-2xl font-medium m-4 mt-10 md:text-left">Iftarawih</h4>
          <div className="flex flex-col md:flex-row ">
            <p className="text-left font-light mt-3 leading-2 md:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin eu placerat ex, a dignissim orci. In imperdiet nibh eu luctus viverra. 
            Sed elementum quam consectetur neque congue suscipit. Cras ultricies dictum lobortis. 
            </p>
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-h-[600px] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="src/images/img3.jpg"
              alt="image 3"
            />
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-medium m-4 mt-10 md:text-left">Sports Day</h4>
          <div className="flex flex-col md:flex-row ">
            <p className="text-left font-light mt-3 leading-2 md:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin eu placerat ex, a dignissim orci. In imperdiet nibh eu luctus viverra. 
            Sed elementum quam consectetur neque congue suscipit. Cras ultricies dictum lobortis. 
            </p>
            <img
              className="h-auto max-w-full rounded-lg mt-4 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-h-[600px] lg:max-w-[45%] mx-auto md:m-4 md:order-first"
              src="src/images/img3.jpg"
              alt="image 3"
            />
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
};

export default Events;
