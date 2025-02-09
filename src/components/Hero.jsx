const Hero = () => {
  return (
    <div className="sm:flex items-center gap-8 px-4">
      <div className="sm:w-1/2">
        <h1 className="text-4xl mt-10 mb-10 font-semibold text-left leading-tight md:text-5xl lg:text-6xl">
          Malay Cultural & Muslim Society (MCMS)
        </h1>

        <p className="text-left font-light mb-10">
          At MCMS, we celebrate the richness of Malay culture and the values of
          Islam through engaging activities, workshops, and events. Our mission
          is to promote beneficial knowledge and create a supportive community
          for all Muslim students at SIM.
        </p>
      </div>

      {/* Photos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:w-3/5 transform sm:translate-x-32 lg:translate-x-48">
        <div className="grid gap-4">
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img1.jpg"
              alt="image 1"
            />
          </div>
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img2.jpg"
              alt="image 2"
            />
          </div>
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/orientation.jpg"
              alt="image 3"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img4.jpg"
              alt="image 4"
            />
          </div>
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/sportsDay2.jpeg"
              alt="image 5"
            />
          </div>
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img6.jpg"
              alt="image 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
