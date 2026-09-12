import { useEffect, useState } from "react";
import Hero from "./components/heroSection/Hero";
import Nav from "./components/navber/Nav";
import Technologes from "./components/technoloySection/Technologes";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";

const App = () => {
  const [linearGradient] = useState(
    "linear-gradient(to right  ,#FF5722 ,#D81B7E ,#7C3AED)",
  );
  const wellcome = () => {
    return toast(`WellCome to DevStack!`, {
      position: "top-center",
     
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
        <Footer/>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
