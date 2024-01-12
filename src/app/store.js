import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from "../components/Cards/cardSlice";

export const store = configureStore({
  reducer: {
    cards: cardSliceReducer,
  },
});