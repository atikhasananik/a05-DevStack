import { RxCross2 } from "react-icons/rx";
import type { TechnologyData } from "../../type";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface ISelectedTechCardProps {
  selected: TechnologyData[];
  setSelected: Dispatch<SetStateAction<TechnologyData[]>>;
}

const SelectedTechCard = ({
  selected,
  setSelected,
}: ISelectedTechCardProps) => {
  const handleAllRemoveBtn = () => {
    setSelected([]);
   return toast.success("Successfully remove all Items", {
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
  };

  const handleXBtn = (data: TechnologyData) => {
    const exist = selected.find((d: TechnologyData) => {
      return d.id === data.id;
    });

    if (exist) {
      const newSelected = selected.filter((d) => {
        return d.id !== data.id;
      });
      setSelected(newSelected);
     return toast.success(`Successfully remove ${data.name}`, {
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
    }
  };

  return (
    <div className="border border-gray-300  p-8 rounded-2xl">
      <div>
        <h2 className="text-2xl font-semibold">Your Stack</h2>
        <p style={{ color: "ver(--text-color)" }} className="">
          {selected.length} Technology Selected
        </p>
      </div>
      {selected.map((data: TechnologyData) => {
        return (
          <div className="grid  gap-4 mt-4">
            <div className="p-5 py-4 border border-gray-300 rounded-2xl flex items-center gap-3 ">
              <div className="w-15 h-15">
                <img
                  className="w-full h-full"
                  src={data.icon}
                  alt={data.name}
                />
              </div>
              <div className="flex gap-4 items-center justify-between w-full">
                <div>
                  <h2 className="font-semibold text-lg leading-5">
                    {data.name}
                  </h2>
                  <p className="text-[10px]">{data.category}</p>
                </div>

                <button
                  onClick={() => handleXBtn(data)}
                  className="text-2xl hover:text-red-500  p-1 rounded-lg"
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={() => handleAllRemoveBtn()}
        className="btn w-full text-red-500 rounded-lg outline-none mt-10 py-6 border border-red-500 text-lg"
      >
        Remove All
      </button>
    </div>
  );
};

export default SelectedTechCard;
