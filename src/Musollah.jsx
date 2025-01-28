import Navbar from "./components/Navbar";

const Musollah = () => {
  return (
    <div>
      <Navbar />
        <div className="p-5">
          <h2 className="text-3xl font-semibold m-4">MUSOLLAH</h2>
          <div className="md:flex md:items-start md:p-3 ">
            <div className="text-left font-light mb-10 mt-5 md:w-1/2 md:leading-8 ">
              <p>Our Musollah is located at Staircase 24, Block A, right next to A.1.17. 
                  It’s open to all, and prayer attires are provided for anyone who needs them. 
                  Feel free to use the slippers available to take wudhu comfortably. 
                  Don’t forget to check the bulletin board for the latest MCMS events and updates!
              </p>
            </div>
            <div className="flex flex-col items-center mx-auto gap-y-2 w-36 md:flex-row md:mr-8 md:w-1/2 md:gap-x-3 md:order-first">
              <div>
                <img
                  className="h-auto max-w-full rounded-md"
                  src="src/images/musollah1.jpg"
                  alt="image 1"
                ></img>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-md"
                  src="src/images/musollah2.jpg"
                  alt="image 2"
                ></img>
              </div>
            </div>
          </div>
          <div className="bg-customBeige-70 p-10 mt-5 flex flex-col items-center">
            <video className="rounded-lg w-72 h-auto" controls width={800}> 
              <source src="/videos/musollah_video.MP4" type="video/mp4"/>
            </video>
          </div>
        </div>
    </div>
  );
};

export default Musollah;
