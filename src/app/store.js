import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from "../components/Cards/cardSlice";
import commentsSliceReducer from "../feautures/bar/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    cards: cardSliceReducer,
    comments: commentsSliceReducer,
  },
});