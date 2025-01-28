import GoalsCard from "./GoalsCard";

const Goals = () => {
  return (
    <div className="bg-customBeige-70 mt-20 w-full p-2 md:p-12">
      <div>
        <h2 className="text-3xl font-semibold p-5">OUR GOALS</h2>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:space-x-3 sm:m-2">
        {/* 3 goal cards */}
        <GoalsCard />
        <GoalsCard />
        <GoalsCard />
      </div>
    </div>
  );
};

export default Goals;
