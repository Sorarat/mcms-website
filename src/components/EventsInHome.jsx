import Gallery from "./Gallery";

const EventsInHome = () => {
  return (
    <div className="mb-10 sm:mb-36">
      <div>
        <h2 className="text-3xl font-semibold p-5 mt-10 md:p-9">EVENTS</h2>
      </div>

      <div>
        {/* photo gallery with description */}
        <Gallery />
      </div>
    </div>
  );
};

export default EventsInHome;
