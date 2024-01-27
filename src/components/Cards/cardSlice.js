import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../app/api";

export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async ({ subreddit, searchTerm }) => {
    try {
      let url;
      if (searchTerm) {
        url = await fetch(`${API_ROOT}${subreddit}.json?q=${searchTerm}`);
      } else {
        url = await fetch(`${API_ROOT}${subreddit}.json`);
      }
      let data = await url.json();
      const cards = data.data.children.map((child) => child.data);
      return {
        cards,
        subreddit,
        searchTerm,
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
);

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    isLoading: false,
    hasError: false,
    defaultSubreddit: "",
    searchTerm: "",
  },
  reducers: {
    updateDefaultSubreddit: (state, action) => {
      state.defaultSubreddit = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.cards = action.payload.cards;
        state.defaultSubreddit = action.payload.subreddit;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default cardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;
export const selectDefaultSubreddit = (state) => state.cards.defaultSubreddit;
export const selectSearchTerm = (state) => state.cards.searchTerm;
export const { updateDefaultSubreddit, setSearchTerm, clearSearchTerm } =
  cardsSlice.actions;
