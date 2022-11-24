import { createSlice } from "@reduxjs/toolkit";

const NUMBER_REGEX = /^[0-9]*$/;

const initialState = {
  isRegWithGoogle: false,
  isFnEmp: true,
  isLnEmp: true,
  isAddrEmp: true,
  isContactNumberEmp: true,
  isValidContactNumber: false,
  isPassEmp: true,
  isValidPw: false,
  iscPasswordEmp: true,
  isPwMatch: false,
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  contactNumber: "",
  password: "",
  cPassword: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setFn: (state, action) => {
      state.firstName = action.payload;
      if (state.firstName.length !== 0) state.isFnEmp = false;
      else state.isFnEmp = true;
    },
    setLn: (state, action) => {
      state.lastName = action.payload;
      if (state.lastName.length !== 0) state.isLnEmp = false;
      else state.isFnEmp = true;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
      if (state.address.length !== 0) state.isAddrEmp = false;
      else state.isAddrEmp = true;
    },
    setContactNumber: (state, action) => {
      state.contactNumber = action.payload;
      if (state.contactNumber.length !== 0) state.isContactNumberEmp = false;
      else state.isContactNumberEmp = true;
      if (NUMBER_REGEX.test(state.contactNumber))
        state.isValidContactNumber = true;
      else state.isValidContactNumber = false;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      if (state.password.length !== 0) state.isPassEmp = false;
      else state.isPassEmp = true;
      if (state.password.length >= 8 && state.password.length <= 24)
        state.isValidPw = true;
      else state.isValidPw = false;
      if (state.cPassword === state.password) state.isPwMatch = true;
      else state.isPwMatch = false;
    },
    setPwConfirm(state, action) {
      state.cPassword = action.payload;
      if (state.cPassword.length !== 0) state.iscPasswordEmp = false;
      else state.iscPasswordEmp = true;
      if (state.cPassword === state.password) state.isPwMatch = true;
      else state.isPwMatch = false;
    },
  },
});

export const {
  setFn,
  setLn,
  setAddress,
  setContactNumber,
  setPassword,
  setPwConfirm,
} = registerSlice.actions;

export default registerSlice.reducer;
