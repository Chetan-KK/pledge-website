import { useEffect, useState } from "react";
import "./App.css";
import { CounterAPI } from "counterapi";

function App() {
  const counter = new CounterAPI();
  const [mainCount, setMainCount] = useState(0);

  const [active, setActive] = useState(false);
  const [factive, setfActive] = useState(false);

  const getData = () => {
    counter.get("pledgeCountAdypu").then((res) => {
      setMainCount(res.Count);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  function HandleClick() {
    setMainCount((prev) => prev + 1);
    setfActive(true);
    setActive(false);
    counter.up("pledgeCountAdypu", "pledgeCountAdypu").then((res) => {
      res;
    });
  }

  return (
    <div className="bg-sky-200 h-full">
      <header className="h-24 sm:h-32">
        <img
          src="/cloud-bg.png"
          className="absolute w-full md:px-56 px-4 pt-4 md:py-11"
          alt=""
        />
      </header>
      <div className="w-full mb-5 md:h-[70vh] overflow-hidden flex items-center justify-center">
        <img
          src="/main.jpg"
          className="sm:w-[50vw] sm:rounded-md shadow-lg"
          alt=""
        />
      </div>
      <h1 className="font-bold text-4xl text-center text-gray-800">
        -- TAKE A PLEDGE --
      </h1>
      <h1 className="font-bold text-3xl text-center text-gray-800 mt-10">
        Peace and Addiction Pledge
      </h1>
      <div className="flex justify-center items-center mt-9 font-bold">
        <p className="w-[95vw] sm:w-[70vw] text-sm sm:text-xl leading-6 sm:leading-10 border-4 border-gray-100 p-3 rounded-xl shadow-2xl h-[30rem] overflow-y-scroll">
          I hereby pledge to make Peace & Conflict Resolution a part of my
          everyday life and I will constantly strive to … <br /> Help not hurt,
          create not destroy. <br /> Show gratitude. <br /> Be aware of my
          actions and take responsibility for how they impact others. <br />{" "}
          Give back to my community and my country. <br /> Avoid using violence
          in my language, thoughts, actions and relationships - in person and in
          social media. <br /> See everyone and everything through a lens of
          compassion. <br /> I understand and own the responsibility to make my
          surroundings peaceful & with conflicts resolved amicably.
          <br />
          De Addiction Pledge I take this pledge that I will never use any
          addiction under peer pressure or under any circumstances in my life,
          and I will try my best to save my family, friends and society from
          addictions including social media addiction. For the sake of future
          generations and for the secure future of my country, I pledge not to
          become victim of any addictions.
        </p>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc3saF6xgpwtviMawrdM6AV9jPxbdABWbqhbEANZhP8FoB8Uw/viewform?embedded=true"
        className="w-full h-[100vh] mt-12"
        frameBorder="0"
      >
        Loading…
      </iframe>
      <div className="flex justify-center items-center flex-col  mt-4">
        {factive ? (
          <div className="flex gap-2">
            <input type="checkbox" checked={active} id="tick" />
            <label htmlFor="">I read full pledge</label>
          </div>
        ) : (
          <div
            className="flex gap-2"
            onClick={() => {
              setActive((prev) => {
                return !prev;
              });
            }}
          >
            <input type="checkbox" checked={active} id="tick" />
            <label htmlFor="" className="">
              I read full pledge
            </label>
          </div>
        )}
        <button
          onClick={HandleClick}
          className={`${
            active
              ? "bg-blue-600 py-2 rounded-md m-3 text-white hover:bg-blue-800 px-4 "
              : "bg-blue-300 pointer-events-none py-2 rounded-md m-3 text-white hover:bg-blue-800 px-4"
          }`}
        >
          submit
        </button>
      </div>
      <footer className="flex justify-around items-center p-5 bg-blue-300">
        <b>&copy; adypu</b>
        <b>Total pledge count: {mainCount}</b>
      </footer>
    </div>
  );
}

export default App;
