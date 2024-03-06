import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from "../components/Cards/cardSlice";
import commentsSliceReducer from "../components/features/bar/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    cards: cardSliceReducer,
    comments: commentsSliceReducer,
  },
});
