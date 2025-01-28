const Hero = () => {
  return (
    <div className="sm:flex items-center gap-8 px-4">
      <div className="sm:w-1/2">
        <h1 className="text-4xl mt-10 mb-10 font-semibold text-left leading-tight">
          Malay Cultural & Muslim Society (MCMS)
        </h1>

        <p className="text-left font-light mb-10">
          At MCMS, we celebrate the richness of Malay culture and the values of
          Islam through engaging activities, workshops, and events. Our mission
          is to promote beneficial knowledge and create a supportive community
          for all Muslim students at SIM.
        </p>
      </div>

      {/* photos  */}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:w-1/2">
        <div className="grid gap-4">
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img1.jpg"
              alt="image 1"
            ></img>
          </div>
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img2.jpg"
              alt="image 2"
            ></img>
          </div>
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img3.jpg"
              alt="image 3"
            ></img>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img4.jpg"
              alt="image 4"
            ></img>
          </div>
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img5.jpeg"
              alt="image 5"
            ></img>
          </div>
          <div className="group">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              src="src/images/img6.jpg"
              alt="image 6"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
