import { useEffect, useState } from "react";
import Hero from "./components/heroSection/Hero";
import Nav from "./components/navber/Nav";
import Technologes from "./components/technoloySection/Technologes";
import { Bounce, toast, ToastContainer } from "react-toastify";

const App = () => {
  const [linearGradient] = useState(
    "linear-gradient(to right  ,#FF5722 ,#D81B7E ,#7C3AED)",
  );
  const wellcome = () => {
    return toast.success(`WellCome to DevStack!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  useEffect(() => {
    wellcome();
  }, []);

  return (
    <>
      <div>
        <Nav />
        <Hero linearGradient={linearGradient} />
        <Technologes linearGradient={linearGradient} />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
