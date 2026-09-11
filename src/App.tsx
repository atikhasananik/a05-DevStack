import { useState } from "react";
import Hero from "./components/heroSection/Hero";
import Nav from "./components/navber/Nav";
import Technologes from "./components/technoloySection/Technologes";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [linearGradient,setLinearGradient]=useState("linear-gradient(to right  ,#FF5722 ,#D81B7E ,#7C3AED)")
  return (<>
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
