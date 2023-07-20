import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-14">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold py-3 md:text-3xl sm:text-2xl text-xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eius, deserunt
            voluptatem perferendis doloribus sit placeat cum iure eveniet corrupti accusantium
            pariatur reiciendis dolorem laborum. Provident, delectus iste voluptate aliquid
            doloribus non ipsum est possimus saepe animi accusamus commodi maiores.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium  my-6 mx-auto md:mx-0 py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
