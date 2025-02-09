import { IoPeople } from "react-icons/io5";

const GoalsCard = ({ text }) => {
  return (
    <div className="bg-gray-50 rounded-lg w-3/4 flex flex-col p-3 mb-4 h-auto sm:min-h-[140px] flex-grow">
      <div className="flex justify-center">
        <IoPeople size={40} />
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
