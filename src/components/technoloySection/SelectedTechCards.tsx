import type { Dispatch, SetStateAction } from "react";
import type { TechnologyData } from "../../type";
import SelectedTechCard from "./SelectedTechCard";
import { RxCross2 } from "react-icons/rx";

export interface ISelectedTechCardsProps {
  selected: TechnologyData[];
  setSelected: Dispatch<SetStateAction<TechnologyData[]>>;

  
}

const SelectedTechCards = ({
  selected,
  setSelected,
}: ISelectedTechCardsProps) => {
  return (
    <>
      {selected.length === 0 ? (
        <div className="border border-gray-300  p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">Your Stack</h2>
            <p style={{ color: "ver(--text-color)" }} className="">
              no Technology Selected yet
            </p>
          </div>

          <div className="grid gap-4 mt-4">
            <div
              style={{ color: "var(--text-color)" }}
              className="p-5 py-6 border border-dashed text-center border-gray-300 rounded-2xl flex items-center justify-center gap-3 "
            >
              Your stack is empty.
            </div>
          </div>
        </div>
      ) : (
        <SelectedTechCard selected={selected} setSelected={setSelected} />
      )}
    </>
  );
};

export default SelectedTechCards;
