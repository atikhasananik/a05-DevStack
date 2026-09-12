import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="bg-[#ffffffec] py-5 w- sticky z-10 top-0 left-0 border-b-gray-200  border-b hover:shadow">
      <div className="flex justify-between items-center max-sm:mx-4 gap-15 sm:container mx-auto ">
        <div className="max-sm:w-30">
          <img src={logo} alt="DevStack Logo here." className="w-full h-full" />
        </div>

        <ul className="flex items-center gap-8 max-sm:hidden font-light text-[#475569]">
          <li
            style={{ color: "var(--nav-btn-color)" }}
            className="text-lg font-semibold "
          >
            Home
          </li>
          <li className="text-lg ">Technologies</li>
          <li className="text-lg ">Projects</li>
          <li className="text-lg ">About</li>
          <li className="text-lg ">Contact</li>
        </ul>

        <div className="flex items-center max-sm:gap-2 gap-5">
          <button className="max-sm:text-sm">Sing In</button>
          <button
            style={{ backgroundColor: "var(--nav-btn-color)" }}
            className="py-2.5 px-5 max-sm:py-1 max-sm:px-3 max-sm:text-sm rounded-4xl  text-white "
          >
            Sing Up
          </button>
          <button className="sm:hidden text-2xl"><RxHamburgerMenu /></button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
