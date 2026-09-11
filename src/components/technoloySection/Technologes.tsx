import { Suspense } from "react";
import type { TechnologyData } from "../../type";
import TechnologyCard from "./TechnologyCard";

interface ITechnologesProps {
  linearGradient: string;
}

const getTechnologesData = async (): Promise<TechnologyData[]> => {
  const res = await fetch("/technologesData.json");
  const data = await res.json();

  return data;
};

const Technologes = ({ linearGradient }: ITechnologesProps) => {
  return (
    <div className="container mt-5 mx-auto">
      <div>
        <h1
          style={{ color: "var(--heading-color)" }}
          className="text-[38px] font-extrabold  "
        >
          Explore the
          <span
            style={{ backgroundImage: linearGradient }}
            className="bg-clip-text text-transparent font-extrabold"
          >
            Technologies
          </span>
        </h1>
        <p style={{ color: "var(--text-color)" }} className="text-lg mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div>
        <div>
          <Suspense fallback={<p>loading...</p>}>
            <TechnologyCard getTechnologesData={getTechnologesData()} />
          </Suspense>
        </div>

        <div>card2</div>
      </div>
    </div>
  );
};

export default Technologes;
