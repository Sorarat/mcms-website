import Gallery from "./Gallery";

const EventsInHome = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-semibold p-5">Events</h2>
      </div>

      <div>
        {/* photo gallery with description */}
        <Gallery />
      </div>
    </div>
  );
};

export default EventsInHome;