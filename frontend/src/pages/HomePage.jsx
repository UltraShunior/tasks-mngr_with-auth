import { useAuth } from "../context/AuthContext";
import { Card, BentoCard, BentoGrid } from "../components/ui";

function HomePage() {
  const data = useAuth();

  return (
    <div>
      <div className="mt-[6rem] mb-[6rem]">
        <h1 role="heading" className="text-4xl font-medium flex justify-center">
          Welcome to TaskMaster
        </h1>
        <h2 className="text-2xl font-bold my-4 flex justify-center">
          Your Ultimate Task Management Solution
        </h2>
      </div>
      <h3 className="text-xl font-bold my-4">What Can You Do on TaskMaster?</h3>
      <BentoGrid className={'grid-cols-3 grid-rows-2'}>
        <BentoCard className="bg-blue-500 shadow-bc1 shadow-blue-500/40 col-span-2 p-10 h-[18rem]">
          Create Tasks
        </BentoCard>
        <BentoGrid className={'grid-rows-2'}>
          <BentoCard className="bg-green-500 shadow-bc1 shadow-green-500/50 p-10 h-[8.75rem]">
            Edit Tasks
          </BentoCard>
          <BentoCard className="bg-yellow-500 shadow-bc1 shadow-yellow-500/50 p-10 h-[8.75rem]">
            Delete Tasks
          </BentoCard>
        </BentoGrid>
        <BentoCard className="bg-yellow-500 p-10 h-[12rem]">
          Delete Tasks
        </BentoCard>
        <BentoCard className="bg-red-500 col-span-2 p-10 h-[12rem]">And More!</BentoCard>
      </BentoGrid>
    </div>
  );
}

export default HomePage;
