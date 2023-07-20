import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="w-full shadow-xl rounded-lg p-4 flex flex-col my-8 hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Sent up to 2GB</p>
          </div>
          <button className="w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-[#00df9a]">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl bg-gray-100 rounded-lg p-4 flex flex-col md:my-0 my-8 hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center font-bold text-4xl">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Sent up to 10GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl rounded-lg p-4 flex flex-col my-8 hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
          <p className="text-center font-bold text-4xl">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted User</p>
            <p className="py-2 border-b mx-8">Sent up to 20GB</p>
          </div>
          <button className="w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-[#00df9a]">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
