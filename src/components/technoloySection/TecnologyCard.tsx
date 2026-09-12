import { FaStar } from "react-icons/fa";
import type { TechnologyData } from "../../type";
import type { Dispatch, SetStateAction } from "react";
import { GiCheckMark } from "react-icons/gi";
import { Bounce, toast } from "react-toastify";

interface ITechnologyCardProps {
  cardData: TechnologyData;
  info: {
    selected: TechnologyData[];
    setSelected: Dispatch<SetStateAction<TechnologyData[]>>;
  };
}

const TecnologyCard = ({
  cardData,
  info: { selected, setSelected },
}: ITechnologyCardProps) => {
  const exist = selected.find((d) => {
    return d.id === cardData.id;
  });
  const handleAddToStackBtn = (cardData: TechnologyData) => {
    if (!exist) {
      const newSelected = [...selected, cardData];
      setSelected(newSelected);
      return toast.success(`Successfully add to stack!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }else{
        return toast.info(`Already added to stack!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div
      className={`p-8 border transition-all duration-300 hover:shadow-lg shadow-gray-400 rounded-3xl max-w-100 ${exist ? "border-red-400 " : " border-gray-200"}`}
    >
      <div className="flex items-center pb-4 justify-between ">
        <img
          className="w-13 h-13 "
          src={cardData.icon}
          alt={cardData.name}
        />

      <div style={{color:`${cardData.color}`,backgroundColor:`${cardData.bgColor}` }} className={`py-1 px-3 text-sm rounded-4xl`}>
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
        className={`btn rounded-xl py-6 font-normal  w-full ${exist ? "border border-red-500 text-red-500" : "bg-[#0A0F1D] text-white"}  text-md`}
      >
        <span className={`${exist?"":"hidden"}`}>
          <GiCheckMark />{" "}
        </span>
        {exist ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TecnologyCard;
