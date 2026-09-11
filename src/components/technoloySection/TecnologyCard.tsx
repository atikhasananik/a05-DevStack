import { FaStar } from "react-icons/fa";
import type { TechnologyData } from "../../type";
import type { Dispatch, SetStateAction } from "react";

interface ITechnologyCardProps {
  cardData: TechnologyData;
  info: {
    selected: TechnologyData[];
    setSelected:Dispatch<SetStateAction<TechnologyData[]>>
    
  };
}

const TecnologyCard = ({
  cardData,
  info: { selected, setSelected  },
}: ITechnologyCardProps) => {
  const exist = selected.find((d) => {
    return d.id === cardData.id;
  });
  const handleAddToStackBtn = (cardData: TechnologyData): void => {
    if (!exist) {
      const newSelected = [...selected, cardData];
      setSelected(newSelected)

      
    }
  };

  return (
    <div className="p-8  border border-gray-200 rounded-3xl max-w-100 ">
      <div className="flex items-center pb-4 justify-between ">
        <img
          className="w-13 h-13 "
          src={cardData.icon}
          alt={cardData.category}
        />

        <div className="py-1 px-3 text-sm border border-gray-300 bg-sky-100 rounded-4xl">
          {cardData.badge}
        </div>
      </div>

      <div className="my-3 border-b border-gray-300 pb-7">
        <h2 className="text-2xl font-semibold">{cardData.name} </h2>
        <p style={{ color: "var(--text-color)" }} className="mt-3">
          {cardData.description}
        </p>
      </div>

      <div
        style={{ color: "var(--text-color) " }}
        className="flex gap-5 my-6 items-center justify-between"
      >
        <p className="py-0.5 px-3 border text-[#000000df] border-gray-300 bg-[#F1F5F9] rounded-2xl">
          {cardData.category}
        </p>
        <p>{cardData.difficulty}</p>

        <div className="flex  items-center gap-1">
          <p className="text-yellow-400">
            <FaStar />
          </p>
          <p className="text-black"> {cardData.rating}</p>
        </div>
      </div>

      <button
        onClick={() => handleAddToStackBtn(cardData)}
        style={{ backgroundColor: "var(--main-btn-color)" }}
        className="btn rounded-xl py-6 font-normal  w-full text-white text-md"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TecnologyCard;
