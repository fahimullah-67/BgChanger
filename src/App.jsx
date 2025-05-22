import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  // let bgColor = "bg-red-100";
  let [bgColor, setBgColor] = useState("olive");

  const changeBg = (color) => {
    console.log(color, bgColor);
    setBgColor((bgColor = { color }));
    console.log("before : ", color, bgColor);
  };

  return (
    <>
      <div
        className="bgColor w-full h-screen"
        style={{ backgroundColor: bgColor }}
      >
        <h1 className=" fixed top-10 inset-x-0 text-3xl font-bold text-black text-center">
          Change BackGround Color
        </h1>
        <div className="absolute bottom-10 rounded-3xl flex flex-wrap justify-center inset-x-0 p-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white rounded-3xl px-2 py-2">
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setBgColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setBgColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setBgColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "burlywood" }}
              onClick={() => setBgColor("burlywood")}
            >
              Burlywood
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "sandybrown" }}
              onClick={() => setBgColor("sandybrown")}
            >
              Sandybrown
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "GrayText" }}
              onClick={() => setBgColor("GrayText")}
            >
              GrayText
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "orange" }}
              onClick={() => setBgColor("orange")}
            >
              Orange
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "pink" }}
              onClick={() => setBgColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "silver" }}
              onClick={() => setBgColor("silver")}
            >
              Silver
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "violet" }}
              onClick={() => setBgColor("violet")}
            >
              Violet
            </button>
            <button
              className="outline-none shadow-2xl py-1 px-3 rounded-3xl text-white"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setBgColor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
