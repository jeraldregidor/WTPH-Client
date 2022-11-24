import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slices/loginSlice";
import navReducer from "./Slices/navSlice";
import registerSlice from "./Slices/registerSlice";
import userReducer from "./Slices/userSlice";

export const store = configureStore({
  reducer: {
    navBar: navReducer,
    user: userReducer,
    login: loginReducer,
    register: registerSlice
  },
});
