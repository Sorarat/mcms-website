import { IoPeople } from "react-icons/io5";

const GoalsCard = () => {
  return (
    <div className="bg-gray-50 rounded-lg h-auto w-1/2 flex flex-col p-3 mb-4">
      <div className="flex justify-center">
        <IoPeople size={40} />
      </div>

      <div>
        <p className="text-left font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          efficitur, lectus et facilisis placerat.
        </p>
      </div>
    </div>
  );
};

export default GoalsCard;
