import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { TechnologyData } from "../../type";
import TecnologyCard from "./TecnologyCard";

export interface ITechnologyCardProps {
  getTechnologesData: Promise<TechnologyData[]>;
  selected: TechnologyData[];
  setSelected: Dispatch<SetStateAction<TechnologyData[]>>;
}

const TechnologyCards = ({
  getTechnologesData,
  selected,
  setSelected,
}: ITechnologyCardProps) => {
  const [technologesData] = useState(() => use(getTechnologesData));

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {technologesData.map((cardData) => {
          return (
            <TecnologyCard
              key={cardData.id}
              cardData={cardData}
              info={{ selected, setSelected }}
            />
          );
        })}
      </div>
    </>
  );
};

export default TechnologyCards;
