import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Slices/userSlice";
import RegisterModal from "./RegisterModal";

const Register = () => {
  const dispatch = useDispatch();

  function handleCallBackResponse(response) {
    console.log("JWT from google: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    dispatch(setUser(userObject));
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "279548385630-5tmffa6tpdr16ql0vtbn4160s6q9ttji.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "filled_blue",
      size: "large",
      width: "250",
    });
  }, []);

  return (
    <div className="h-screen bg-white w-screen flex items-center justify-center">
      <div className="bg-slate-100 shadow-md ring-1 ring-slate-300 ring-inset h-3/4 w-full p-3 m-5 flex-row justify-center items-center lg:w-1/3">
        <h1 className="text-3xl h-1/6 w-full flex items-center justify-center">
          Register to
          <img
            className="max-h-full h-3/4 p-2"
            src={process.env.PUBLIC_URL + "./images/WebTitle.png"}
            alt=""
          />
        </h1>
        {true ? (
          <RegisterModal />
        ) : (
          <div className="h-5/6 flex items-center justify-center">
            <div className="h-fit flex-row items-center justify-center">
              <div className="flex items-center justify-center my-2 shadow-md">
                <div id="signInDiv" className="hover:scale-110" />
              </div>
              <h1 className="text-slate-700 my-10 text-center border-t border-b">
                or
              </h1>
              <div className="w-250 bg-teal-200 h-10 rounded-md flex items-center justify-center p-2 hover:scale-110 ring-1 ring-slate-300 shadow-md">
                Use Phone Number
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
