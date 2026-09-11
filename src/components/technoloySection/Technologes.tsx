import { Suspense, useState } from "react";
import type { TechnologyData } from "../../type";
import TechnologyCards from "./TechnologyCards";
import SelectedTechCards from "./SelectedTechCards";

interface ITechnologesProps {
  linearGradient: string;
}

const getTechnologesData = async (): Promise<TechnologyData[]> => {
  const res = await fetch("/technologesData.json");
  const data = await res.json();

  return data;
};

const Technologes = ({ linearGradient }: ITechnologesProps) => {
  const [selected, setSelected] = useState<TechnologyData[]>([]);

  // console.log("userDataCard",userDataCard)
  console.log("SelectedData", selected);

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
            {" "}
            Technologies
          </span>
        </h1>
        <p style={{ color: "var(--text-color)" }} className="text-lg mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-12 mt-15">
        <div className="col-span-9">
          <Suspense fallback={<p>loading...</p>}>
            <TechnologyCards
              selected={selected}
              setSelected={setSelected}
              getTechnologesData={getTechnologesData()}
            />
          </Suspense>
        </div>

        <div className="col-span-3">
          <SelectedTechCards selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </div>
  );
};

export default Technologes;
