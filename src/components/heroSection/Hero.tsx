import heroImg from '../../assets/banner-stack.png'


const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-between container mx-auto h-[90vh] ">
        <div>
          <div className=" py-5 mb-15">
            <h1
              style={{ color: "--heading-color" }}
              className="text-7xl mb-2 font-bold "
            >
              Build Your Ideal
            </h1>
            <h1
              className="text-7xl font-bold mb-6 bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]
             bg-clip-text text-transparent"
            >
              Development Stack
            </h1>
            <p
              style={{ color: "var(--text-color)" }}
              className="max-w-160 leading-8 text-xl"
            >
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
          </div>
          <div
            className=" flex gap-4
          "
          >
            <button className="py-3 px-6 bg-linear-to-r from-[#F97316] to-[#EC4899] text-xl rounded-2xl text-white font-semibold ">
              Explore Technologies
            </button>
            <button className="py-3 px-6 border border-gray-400 rounded-2xl">
              Learn More
            </button>
          </div>
        </div>

        <div className='flex items-center h-full w-[40%]'>
          <img  className='w-[120%] object-cover  ' src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
