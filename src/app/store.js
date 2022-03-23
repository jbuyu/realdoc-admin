import { configureStore } from "@reduxjs/toolkit";
// import authReducer from '../features/auth/authSlice'
// import goalReducer from '../features/goals/goalSlice'
import authReducer from "../features/auth/authSlice";
import consultationReducer from "../features/consultations/consultationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    consultations: consultationReducer,
  },
});
