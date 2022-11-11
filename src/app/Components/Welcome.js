import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setfillPos } from "../Slices/navSlice";

const Welcome = () => {
  const dispatch = useDispatch();

  const scrollMaxValue = () => {
    const body = document.body;
    const html = document.documentElement;

    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const windowHeight = window.innerHeight;

    return documentHeight - windowHeight;
  };

  const handleScroll = () => {
    const currentPos = window.scrollY >= 1 ? window.scrollY : 1;
    dispatch(setfillPos(((currentPos / scrollMaxValue()) * 6).toFixed(0)));
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <section className="h-screen bg-white">
        <div className="h-full flex flex-wrap justify-center">
          <div className=" w-full flex relative justify-center items-center h-4/6">
            <img
              className="absolute z-10 w-4/6 md:w-2/6 text-shadow-md "
              src={process.env.PUBLIC_URL + "./images/WebTitle.png"}
              alt=""
            />
            <img
              className=" h-full w-full opacity-20"
              src={process.env.PUBLIC_URL + "./images/1.jpg"}
              alt=""
            />
          </div>
          <div className="w-full h-2/6 flex items-center justify-center">
            <div className="text-center w-3/4 text-2xl font-semibold text-slate-700">Worth Trade Philippines offers computer parts and build available on its reasonable price.</div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-[#ECE7CC]">
        <div className="h-full flex justify-center">
          <div className="">asd</div>
        </div>
      </section>
      <section className="h-screen bg-black">
        <div className="h-full flex justify-center">
          <div className="">asd</div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
