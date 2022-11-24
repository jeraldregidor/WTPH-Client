import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { fillPos } = useSelector((store) => store.navBar);

  var fill = "transition-all duration-300 h-14 bg-[#62FFFF] w-1/6";
  if (parseInt(fillPos) === 6) {
    fill = "transition-all duration-300 h-14 bg-[#62FFFF] w-full";
  } else {
    if (parseInt(fillPos) === 2) {
      fill = "transition-all duration-300 h-14 bg-[#62FFFF] w-1/4";
    }
    else if (parseInt(fillPos) === 3|| parseInt(fillPos) === 4 ) {
      fill = "transition-all duration-300 h-14 bg-[#62FFFF] w-1/2";
    }
    else if (parseInt(fillPos) === 5) {
      fill = "transition-all duration-300 h-14 bg-[#62FFFF] w-3/4";
    }
  }
  console.log(typeof(fillPos))

  return (
    <nav className="h-14 bg-white w-full fixed flex items-center z-50">
      <div className="absolute flex h-full items-center right-5 font-semibold text-slate-800">
        <div className="text-2xl right-2 h-5/6 flex items-center mr-3 hover:underline">
          Log In
        </div>
        <div className="text-2xl right-2 bg-red-400 hover:bg-[#FF0000] hover:scale-110 h-4/6 px-5 rounded-full flex items-center font-[Open_Sans] shadow-md"> 
          Register
        </div>
      </div>
      <div className={fill} />
    </nav>
  );
};

export default NavBar;
