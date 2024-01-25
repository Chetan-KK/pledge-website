import { useEffect, useState } from "react";
import { CounterAPI } from "counterapi";
import { Link } from "react-router-dom";
const Home = () => {
  const counter = new CounterAPI();
  const [mainCount, setMainCount] = useState(0);
  const getData = () => {
    counter.get("pledgeCountAdypuSoe", "pledgeCountAdypuSoe").then((res) => {
      setMainCount(res.Count);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-sky-200 h-full min-h-screen flex flex-col justify-between">
      <header className="h-24 sm:h-32">
        <img
          src="/logo.png"
          className="absolute w-full md:px-56 px-4 md:py-0"
          alt=""
        />
      </header>
      <div className="w-full  my-5 md:h-[70vh] overflow-hidden flex items-center justify-center">
        <img
          src="/main.png"
          className="sm:w-[50vw] sm:rounded-md shadow-lg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        शपथ लीजिये
        <Link
          to={"/main"}
          className="bg-blue-600 py-2 rounded-md m-3 text-white hover:bg-blue-800 px-4"
        >
          Take Pledge
        </Link>
      </div>
      <footer className="flex justify-around items-center p-5 bg-blue-300">
        <b>&copy; adypu</b>
        <b>Total pledge count: {mainCount}</b>
      </footer>
    </div>
  );
};

export default Home;
