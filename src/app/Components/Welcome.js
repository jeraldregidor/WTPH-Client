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
            <div className="text-center w-3/4 text-2xl font-semibold text-slate-700">
              Worth Trade Philippines offers computer parts and build available
              on its reasonable price.
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-[#ECE7CC]">
        <div className="h-[60%] flex relative justify-center">
          <img
            className="absolute h-full py-2 z-10"
            src={process.env.PUBLIC_URL + "./images/CPUs/1.png"}
            alt=""
          />
          <div className="bg-black h-2/3 w-full self-center opacity-50" />
        </div>
        <div className="h-[40%] flex">
          <div className="h-full w-1/2 flex items-center justify-end">
            <div className="ml-2 text-left md:w-3/4 text-2xl font-semibold text-[#474242]">
              We are offering brand new and even well functioning pre-loved
              parts suitable for your build.
            </div>
          </div>
          <div className="h-full w-1/2 flex items-center justify-end">
            <div className="h-full md:w-3/4 flex items-center justify-center p-2">
              <img
                className="max-h-full"
                src={process.env.PUBLIC_URL + "./images/pngegg.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-black">
        <div className="h-[40%] flex justify-center">
          <div className="h-full w-1/2 flex items-center justify-end">
            <div className="h-full md:w-3/4 flex items-center justify-center p-2">
              <img
                className="max-h-full"
                src={process.env.PUBLIC_URL + "./images/CRig.png"}
                alt=""
              />
            </div>
          </div>
          <div className="h-full w-1/2 flex items-center justify-start">
            <div className="mr-2 text-left md:w-3/4 text-2xl font-semibold text-[#FFFFFF]">
              Inquire, ask and select what’s the good build for you based on
              your needs. Our already built products are waiting.
            </div>
          </div>
        </div>
        <div className="h-[60%] relative">
          <div className="h-full w-full absolute z-10 flex-row md:flex">
            <div className="md:w-1/3 w-full h-1/3 md:h-full flex items-center justify-center">
              <img
                className="max-h-full p-2"
                src={process.env.PUBLIC_URL + "./images/Cred1.png"}
                alt=""
              />
            </div>
            {/***********************/}
            <div className="md:w-1/3 w-full h-1/3 md:h-full">
              <div className="w-full h-full text-center flex-row justify-center space-between">
                <h1 className="text-2xl font-bold text-white h-2/6 flex items-center justify-center md:text-5xl">
                  Contact Us
                </h1>
                <div className="h-full flex items-center h-4/6">
                  <div className=" md:text-2xl w-full h-fit text-[#EDE9E9] md:space-y-8">
                    <h3>Mamatid Cabuyao Laguna</h3>
                    <h3>askquestions@worthtradeph.com</h3>
                    <h3>+63 9** *** ****</h3>
                  </div>
                  {/***********************/}
                </div>
              </div>
            </div>
            <div className="md:w-1/3 w-full h-1/3 md:h-full flex-row justify-center items-center">
              <h1 className="text-2xl font-bold text-white h-2/6 flex items-center justify-center md:text-5xl">
                Follow Us
              </h1>
              <div className="h-4/6 flex items-center justify-center">
              <img
                className="h-3/4"
                src={process.env.PUBLIC_URL + "./images/Logos.png"}
                alt=""
              />
              </div>
            </div>
          </div>
          <div className="h-full bg-[#62FFFF] opacity-60" />
        </div>
      </section>
      <img src="" alt="" />{" "}
    </div>
  );
};

export default Welcome;
