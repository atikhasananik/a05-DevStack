import { use } from "react";
import type { TechnologyData } from "../../type";

export interface ITechnologyCardProps {
  getTechnologesData: Promise<TechnologyData[]>;
}

const TechnologyCard = ({ getTechnologesData }: ITechnologyCardProps) => {
    const technologesData = use(getTechnologesData)
    console.log(technologesData)
  return <>
  <div>
    hello
  </div>
  </>
};

export default TechnologyCard;
