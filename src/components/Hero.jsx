import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] h-screen w-full mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={130}
            loop
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-gray-500"
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 md:pl-4">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS platform
        </p>

        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
