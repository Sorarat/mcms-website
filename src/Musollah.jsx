import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Musollah = () => {
  return (
    <div>
      <Navbar />
        <div>
          <h2 className="text-3xl font-semibold m-4">MUSOLLAH</h2>
          <div className="md:flex md:items-start md:p-3 ">
            <div className="text-left font-light mb-10 mt-5 md:w-1/2 md:leading-8 ">
              <p>Our Musollah is located at Staircase 24, Block A, right next to A.1.17. 
                  It’s open to all, and prayer attires are provided for anyone who needs them. 
                  Feel free to use the slippers available to take wudhu comfortably. 
                  Don’t forget to check the bulletin board for the latest MCMS events and updates!
              </p>
            </div>
            <div className="flex flex-col items-center mx-auto mb-10 gap-y-2 w-36 md:flex-row md:mr-8 md:w-1/2 md:gap-x-3 md:order-first">
              <div>
                <img
                  className="h-auto rounded-md w-72"
                  src="/images/musollah2.jpg"
                  alt="image 2"
                ></img>
              </div>
              <div className="h-auto rounded-md w-40 md:w-72">
                <video className="rounded-lg h-auto" controls width={800}> 
                  <source src="/videos/musollah_video.MP4" type="video/mp4"/>
                </video>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row mb-20 md:items-center md:gap-x-10">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-6">Ilm & Ibadah Initiative</h3>
              <p className="font-light mb-5 text-start">
                This initiative provides an exclusive venue within SIM for Muslim students to study, connect, and pray — all in one space. 
                It offers a comfortable environment where students can focus on their academic work, build meaningful relationships with fellow members, 
                and have a dedicated area for their daily prayers. This initiative aims to create a sense of community and support, 
                ensuring that both academic and spiritual needs are met in a welcoming and inclusive setting.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <img
                className="rounded-md w-72  h-auto"
                src="/images/ibadah.png"
                alt="ibadah"
              />
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Musollah;
