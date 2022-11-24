import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword, setPhoneNumber } from "../Slices/loginSlice";
import { setUser } from "../Slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const {
    isValidPhoneNum,
    isValidPass,
    hiddenPhoneNumMessage,
    hiddenPassMessage,
  } = useSelector((store) => store.login);

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
      theme: "outline",
      size: "large",
    });
  }, []);

  const handleInputChange = (event) => {
    switch (event.target.placeholder) {
      case "Phone Number":
        dispatch(setPhoneNumber(event.target.value));
        break;

      case "Password":
        dispatch(setPassword(event.target.value));
        break;

      default:
        break;
    }
  };

  return (
    <div className="h-screen bg-white w-screen flex items-center justify-center">
      <div className="bg-slate-100 shadow-md ring-1 ring-slate-300 ring-inset h-3/4 w-full p-3 m-5 flex-row justify-center items-center lg:w-1/3">
        <h1 className="text-3xl h-1/6 w-full flex items-center justify-center">
          Log in to
          <img
            className="max-h-full h-3/4 p-2"
            src={process.env.PUBLIC_URL + "./images/WebTitle.png"}
            alt=""
          />
        </h1>
        <div className=" h-3/6 w-full flex-row p-5">
          <div className=" w-full flex h-1/3 items-end">
            <div className="w-full">
              <div
                className="text-sm text-red-500"
                hidden={isValidPhoneNum || hiddenPhoneNumMessage}
              >
                Must be consist of numbers only
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                className="ring-1 h-10 ring-inset ring-slate-400 rounded-md w-full text-center"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className=" w-full flex justify-center h-1/3 items-end">
            <div className="w-full">
              <div
                className="text-sm text-red-500"
                hidden={isValidPass || hiddenPassMessage}
              >
                Must be consist of 8 to 25 characters
              </div>
              <input
                type="password"
                placeholder="Password"
                className="ring-1 h-10 ring-inset ring-slate-400 rounded-md w-full text-center"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center h-1/3">
            <button
              className="w-1/2 h-10 bg-cyan-200 rounded-full ring-1 enabled:shadow-md hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
              disabled={!isValidPass || !isValidPhoneNum}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="h-2/6 flex items-center justify-center">
          <div className="w-full">
            <div className="flex items-center justify-center my-2">
              <div id="signInDiv" className="p-2" />
            </div>
            <div className="w-full flex items-center justify-center my-2">
              <h1 className="text-sm md:text-lg">
                No account yet?{" "}
                <a
                  href="https://goo.gl/maps/W6B4ogcyaNdbHSKZ9"
                  target="_blank"
                  rel="noreferrer"
                  className="m-2 italic hover:underline text-red-600"
                >
                  Click here to register
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
