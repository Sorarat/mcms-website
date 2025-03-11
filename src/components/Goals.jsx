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
        <GoalsCard heading="Legacy" text="To overall carry on the legacies of the past EXCO while improving & creating our very own legacy as we move forth together" />
        <GoalsCard heading="Community" text="Fostering a tighter knit community"/>
        <GoalsCard heading="Development" text="To develop ourselves and move forward together as we strive to be better Muslims"/>
      </div>
    </div>
  );
};

export default Goals;
