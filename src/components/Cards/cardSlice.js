import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../app/api";

export const fetchCard = createAsyncThunk('posts/fetchPost',
  async (subreddit) => {
    try {
      const response = await fetch(`${API_ROOT}/r/pics.json`);
      let data = await response.json();
      const posts = data.data.children.map(child => child.data);
      return posts;

    } catch (error) {
      throw error
    }
    
  })

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    isLoading: false,
    hasError: false,
    searchTerm: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.cards = action.payload
      })
      .addCase(fetchCard.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
})

export default cardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;

