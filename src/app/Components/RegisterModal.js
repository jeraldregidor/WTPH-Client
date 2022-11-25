import React from "react";
import { FaMobileAlt, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setFn,
  setLn,
  setAddress,
  setContactNumber,
  setPassword,
  setPwConfirm,
} from "../Slices/registerSlice";

const RegisterModal = () => {
  const dispatch = useDispatch();

  const {
    isRegWithGoogle,
    isFnEmp,
    isLnEmp,
    isAddrEmp,
    isPassEmp,
    iscPasswordEmp,
    isContactNumberEmp,
    isValidContactNumber,
    isValidPw,
    isPwMatch,
  } = useSelector((store) => store.register);

  const containerStyle = isRegWithGoogle
    ? "h-5/6 flex items-center justify-center bg-[#1A73E8] p-1 relative"
    : "h-5/6 flex items-center justify-center bg-teal-200 p-1 relative";

  const bgIcon = isRegWithGoogle ? (
    <FaGoogle size={250} className="opacity-30 absolute" />
  ) : (
    <FaMobileAlt size={250} className="opacity-30 absolute" />
  );

  const isSubmitDisabled = isRegWithGoogle? 
  isAddrEmp ||
  isPassEmp ||
  iscPasswordEmp ||
  isContactNumberEmp ||
  !isValidContactNumber ||
  !isValidPw ||
  !isPwMatch
  :
    isFnEmp ||
    isLnEmp ||
    isAddrEmp ||
    isPassEmp ||
    iscPasswordEmp ||
    isContactNumberEmp ||
    !isValidContactNumber ||
    !isValidPw ||
    !isPwMatch;

  console.log(isSubmitDisabled);

  const handleInputChange = (event) => {
    switch (event.target.placeholder) {
      case "First Name":
        dispatch(setFn(event.target.value));
        break;

      case "Last Name":
        dispatch(setLn(event.target.value));
        break;

      case "Delivery Address":
        dispatch(setAddress(event.target.value));
        break;

      case "Contact Number":
        dispatch(setContactNumber(event.target.value));
        break;

      case "Application Password":
        dispatch(setPassword(event.target.value));
        break;

      case "Confirm your Password":
        dispatch(setPwConfirm(event.target.value));
        break;

      default:
        break;
    }
  };

  return (
    <div className={containerStyle}>
      <div className="grid grid-rows-[7] gap-1 w-full h-full z-10">
        {isRegWithGoogle ? (
          <div className=" h-14 w-full flex items-end text-white font-semibold">
            <h1>Hi Jerald! It's nice to have you.</h1>
          </div>
        ) : (
          <div className=" h-14 w-full flex items-end">
            <input
              type="text"
              placeholder="First Name"
              className="ring-1 h-10 ring-inset ring-slate-400 rounded-md w-full text-center"
              onChange={handleInputChange}
            />
          </div>
        )}

        {isRegWithGoogle ? (
          <div className=" h-14 w-full flex items-end text-white font-bold">
            <h1>Proceed by filling details below.</h1>
          </div>
        ) : (
          <div className=" h-14 w-full flex items-end">
            <input
              type="text"
              placeholder="Last Name"
              className="ring-1 h-10 ring-inset ring-slate-400 rounded-md w-full text-center"
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className=" h-14 w-full flex items-end">
          <input
            type="text"
            placeholder="Delivery Address"
            className="ring-1 h-10 ring-inset ring-slate-400 rounded-md w-full text-center"
            onChange={handleInputChange}
          />
        </div>
        <div className=" h-14 w-full flex items-end">
          <div className="w-full h-fit flex-row">
            <h3
              className="text-xs text-red-500 font-bold"
              hidden={isValidContactNumber || isContactNumberEmp}
            >
              Must be consist of numbers only
            </h3>
            <input
              type="text"
              placeholder="Contact Number"
              className="ring-1 h-10 ring-inset ring-slate-400 rounded-md w-full text-center"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className=" h-14 w-full flex items-end">
          <div className="w-full h-fit flex-row">
            <h3
              className="text-xs text-red-500 font-bold"
              hidden={isValidPw || isPassEmp}
            >
              Must be 8 to 24 characters
            </h3>
            <input
              type="password"
              placeholder="Application Password"
              className="ring-1 h-10 ring-inset ring-slate-400 rounded-md w-full text-center"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className=" h-14 w-full flex items-end">
          <div className="w-full h-fit flex-row">
            <h3
              className="text-xs text-red-500 font-bold"
              hidden={isPwMatch || iscPasswordEmp}
            >
              Must match with password above
            </h3>
            <input
              type="password"
              placeholder="Confirm your Password"
              className="ring-1 h-10 ring-inset ring-slate-400 rounded-md w-full text-center"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className=" h-full w-full flex items-end p-2">
          <button
            className="w-1/2 bg-green-300 h-full rounded-full mx-2 enabled:hover:scale-110 disabled:opacity-50 shadow-md ring-1 ring-slate-400"
            disabled={isSubmitDisabled}
          >
            Proceed
          </button>
          <button className="w-1/2 bg-red-200 h-full rounded-full mx-2 hover:scale-105 shadow-md ring-1 ring-slate-400">
            Cancel
          </button>
        </div>
      </div>
      {bgIcon}
    </div>
  );
};

export default RegisterModal;
