import Navbar from "./components/Navbar";
import { IoMdMail } from "react-icons/io";
import { FaTelegram, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Footer from "./components/Footer";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-3 md:flex-row md:items-start md:p-16">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold m-3 text-left">CONTACT</h2>
          <p className="text-left font-light leading-2 m-3 md:leading-7 md:mt-7 ">
          If you have any questions, suggestions, or need assistance, feel free to reach out to us. 
          Whether you're looking for more information or just want to connect, we're here to help.
          </p>
        </div>
        <img
          className="h-auto max-w-full rounded-lg mt-4 md:mt-20 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-h-[600px] lg:max-w-[45%] mx-auto md:m-4"
          src="/images/16thexco.jpeg"
          alt="16thexco"
        />
      </div>

      <div className="flex justify-center  mt-10">
        <div className="bg-gray-50 p-10 flex flex-col items-center w-9/10 md:mt-0 md:w-1/2 rounded-sm shadow-sm border-solid border-gray-200 border">
          <div className="flex flex-col items-center">
            <h5 className="text-xl md:text-2xl font-medium mb-5">For inquiries and collaborations:</h5>
            <IoMdMail size={60} className="mb-5"/>
            <p className="text-lg">sim mcms email</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-14 items-center mb-20">
        <h6 className="text-lg md:text-xl text-gray-700 italic">Stay updated through:</h6>
        <div className="flex mt-5 gap-x-2 md:gap-x-5">
          <a href="https://t.me/simmcms" target="_blank" rel="noopener noreferrer" className="group">
            <FaTelegram size={30} color="#24A1DE" className="transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </a>
          <a href="https://www.instagram.com/simmcms/" target="_blank" rel="noopener noreferrer" className="group"> 
            <FaInstagram size={30} color="black" className="transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="group">
            <FaTiktok size={30} color="#black" className="transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </a>
          <a href="https://www.linkedin.com/company/simmcms/" target="_blank" className="group">
            <FaLinkedin size={30} color="#0A66C2" className="transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Contact;
