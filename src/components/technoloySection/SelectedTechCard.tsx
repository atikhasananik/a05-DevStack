import { RxCross2 } from "react-icons/rx";
import type { TechnologyData } from "../../type";
import type { Dispatch, SetStateAction } from "react";

interface ISelectedTechCardProps {
  selected: TechnologyData[];
  setSelected: Dispatch<SetStateAction<TechnologyData[]>>;
}

const SelectedTechCard = ({
  selected,
  setSelected,
}: ISelectedTechCardProps) => {
  return (
    <div className="border border-gray-300  p-8 rounded-2xl">
      <div>
        <h2 className="text-2xl font-semibold">Your Stack</h2>
        <p style={{ color: "ver(--text-color)" }} className="">
          2 Technology Selected
        </p>
      </div>

      <div className="grid gap-4 mt-4">
        <div className="p-5 py-4 border border-gray-300 rounded-2xl flex items-center gap-3 ">
          <div className="w-15 h-15  bg-red-500">
            <img className="w-full h-full" src="#" alt="fd" />
          </div>
          <div className="flex gap-4 items-center justify-between w-full">
            <div>
              <h2 className="font-semibold text-lg leading-5">Svelte</h2>
              <p className="text-[10px]">Frontend</p>
            </div>

            <button className="text-2xl hover:text-red-500  p-1 rounded-lg">
              <RxCross2 />
            </button>
          </div>
        </div>
      </div>

      <button className="btn w-full text-red-500 rounded-lg outline-none mt-10 py-6 border border-red-500 text-lg">
        Remove All
      </button>
    </div>
  );
};

export default SelectedTechCard;
