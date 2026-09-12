import heroImg from "../../assets/banner-stack.png";

interface IHeroProps {
  linearGradient: string;
}

const Hero = ({ linearGradient }: IHeroProps) => {
  return (
    <div className="relative max-sm:mb-15">
      <div className="flex items-center max-sm:flex-col justify-between container mx-auto  h-[90vh] max-sm:h-full max-sm:mt-20 ">
        <div>
          <div className=" py-5 mb-15 max-sm:mb-5 max-sm:text-center">
            <h1
              style={{ color: "--heading-color" }}
              className="text-7xl  max-sm:text-4xl max-sm:mb-0 mb-2 font-bold "
            >
              Build Your Ideal
            </h1>
            <h1
              style={{ backgroundImage: linearGradient }}
              className={`text-7xl font-bold  max-sm:text-4xl max-sm:mb-3 mb-6 
             bg-clip-text text-transparent`}
            >
              Development Stack
            </h1>
            <p
              style={{ color: "var(--text-color)" }}
              className="max-w-160 leading-8 max-sm:leading-5 max-sm:max-w-100 text-xl max-sm:text-sm"
            >
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
          </div>
          <div
            className=" flex gap-4 justify-center
          "
          >
            <button
              style={{ backgroundImage: linearGradient }}
              className="py-3 px-6 text-xl max-sm:px-3 max-sm:py-2 max-sm:text-sm rounded-2xl text-white font-semibold "
            >
              Explore Technologies
            </button>
            <button className="py-3 px-6 border max-sm:px-3 max-sm:py-2 border-gray-400 rounded-2xl">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex items-center relative h-full max-sm:w-full w-[40%]">
          <img  className=" w-full object-cover  " src={heroImg} alt="" />
        </div>
      </div>
      <div className="w-8 absolute max-sm:bottom-0 bottom-8 left-[50%] rounded-3xl h-1 mx-auto bg-pink-500"></div>
    </div>
  );
};

export default Hero;
