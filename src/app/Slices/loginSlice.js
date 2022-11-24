import { createSlice } from "@reduxjs/toolkit";

const NUMBER_REGEX = /^[0-9]*$/;

const initialState = {
  isLoggedWithGoogle: false,
  phoneNumber: "",
  password: "",
  isValidPhoneNum: false,
  hiddenPhoneNumMessage: true,
  isValidPass: false,
  hiddenPassMessage: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
      NUMBER_REGEX.test(action.payload) &&
      action.payload.length !== 0 &&
      action.payload.length <= 15
        ? (state.isValidPhoneNum = true)
        : (state.isValidPhoneNum = false);
      console.log(state.isValidPhoneNum);
      action.payload.length === 0 
      ?(state.hiddenPhoneNumMessage = true)
      :(state.hiddenPhoneNumMessage = false)
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      action.payload.length >= 8 && action.payload.length !== 0  &&
      action.payload.length <= 25
        ? (state.isValidPass = true)
        : (state.isValidPass = false);
        action.payload.length === 0 
        ?(state.hiddenPassMessage = true)
        :(state.hiddenPassMessage = false)
    },
  },
});

export const { setPhoneNumber, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
