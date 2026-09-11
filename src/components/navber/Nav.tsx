import logo from "../../assets/logo-text.png";
import "../../index.css";

const Nav = () => {
  return (
    <div className="bg-[#ffffffde] py-5 w- sticky top-0 left-0 border-b-gray-200  border-b hover:shadow">
      <div className="flex justify-between items-center gap-15 container mx-auto ">
        <div className="">
          <img src={logo} alt="DevStack Logo here." className="w-full h-full" />
        </div>

        <ul className="flex items-center gap-8 font-light text-[#475569]">
          <li style={{color:"var(--nav-btn-color)" }}className="text-lg font-semibold ">
            Home
          </li>
          <li className="text-lg ">Technologies</li>
          <li className="text-lg ">Projects</li>
          <li className="text-lg ">About</li>
          <li className="text-lg ">Contact</li>
        </ul>

        <div className="flex items-center gap-5">
          <button>Sing In</button>
          <button style={{backgroundColor:"var(--nav-btn-color)"}} className="py-2.5 px-5 rounded-4xl  text-white ">
            Sing Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
