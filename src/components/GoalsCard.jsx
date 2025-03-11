import { IoPeople } from "react-icons/io5";

const GoalsCard = ({ heading,  text }) => {
  return (
    <div className="bg-gray-50 rounded-lg w-3/4 flex flex-col p-3 mb-4 h-[190px] sm:min-h-[140px] items-center ">
      <div className="flex justify-center text-2xl font-semibold">
        {heading}
      </div>

      <div>
        <p className="text-center font-normal mt-5">
          {text}
        </p>
      </div>
    </div>
  );
};

export default GoalsCard;
