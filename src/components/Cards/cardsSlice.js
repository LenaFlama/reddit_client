import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../app/api";

export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async ({ subreddit, searchTerm, after }) => {
    try {
      let url;
      if (searchTerm && after !== null) {
        url = await fetch(
          `${API_ROOT}/${subreddit}.json?q=${searchTerm}&after=${after}`
        );
      } else {
        url = await fetch(`${API_ROOT}/${subreddit}.json?&after=${after}`);
      }

      const data = await url.json();

      if (!url.ok) {
        throw new Error(`Failed to fetch cards: ${data.message}`);
      }
      if (!data || !data.data || !data.data.children) {
        throw new Error("Invalid response data format");
      }
      const cards = data.data.children.map((child) => child.data);
      return {
        cards,
        after: data.data.after,
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
    after: "",
    pendingAfter: "",
  },
  reducers: {
    updateDefaultSubreddit: (state, action) => {
      state.defaultSubreddit = action.payload;
      state.after = "";
      state.searchTerm = "";
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.after = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.pendingAfter = state.after;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.after = action.payload.after;
        if (state.pendingAfter) {
          state.cards = [...state.cards, ...action.payload.cards];
        } else {
          state.cards = action.payload.cards;
        }
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
export const selectAfter = (state) => state.cards.after;
export const selectDefaultSubreddit = (state) => state.cards.defaultSubreddit;
export const selectSearchTerm = (state) => state.cards.searchTerm;
export const { updateDefaultSubreddit, setSearchTerm } = cardsSlice.actions;
