import GoalsCard from "./GoalsCard";
import { Link } from "react-router-dom";


const Goals = () => {
  return (
    <div className="bg-customBeige-70 mt-20 w-full p-2 md:p-12">
      <div>
        <h2 className="text-3xl font-semibold p-5">OUR GOALS</h2>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:space-x-3 sm:m-2">
        {/* 3 goal cards */}
        <GoalsCard text="Foster Cultural Awareness and Appreciation" />
        <GoalsCard text="Build a Supportive Malay Muslim Community on Campus"/>
        <GoalsCard text="Empower Leadership and Personal Growth"/>
      </div>
    </div>
  );
};

export default Goals;
