import Navbar from "./components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-3 md:flex-row md:items-start md:p-16">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold m-3 text-left">CONTACT</h2>
          <p className="text-left font-light leading-2 m-3 md:leading-7 md:mt-7 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat ex, a dignissim orci. 
          In imperdiet nibh eu luctus viverra. Sed elementum quam consectetur neque congue suscipit. Cras ultricies dictum lobortis. 
          Vestibulum vel tristique mi, a efficitur elit. Proin finibus ex tellus, quis vehicula risus gravida id. 
          Vivamus commodo lacus id odio egestas molestie a nec lectus.
          </p>
        </div>
        <img
          className="h-auto max-w-full rounded-lg mt-4 md:mt-20 sm:max-h-[400px] sm:max-w-[90%] md:max-h-[600px] md:max-w-[55%] lg:max-h-[600px] lg:max-w-[45%] mx-auto md:m-4"
          src="src/images/16thexco.jpeg"
          alt="16thexco"
        />
        
      </div>
    </div>
  );
};
export default Contact;
