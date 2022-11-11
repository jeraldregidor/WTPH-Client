import { configureStore } from '@reduxjs/toolkit';
import navReducer from './Slices/navSlice';

export const store = configureStore({
  reducer: {
   navBar: navReducer 
  },
});
