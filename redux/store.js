import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/userSlice";

export default configureStore({
  reducer: {
    user: UserReducer,
  },
});