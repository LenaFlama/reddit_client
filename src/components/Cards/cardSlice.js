import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../app/api";

export const fetchCard = createAsyncThunk('posts/fetchPost',
  async (subreddit) => {
    console.log(subreddit)
    try {
      const response = await fetch(`${API_ROOT}${subreddit}.json`);
      console.log(`${API_ROOT}${subreddit}.json`)
      let data = await response.json();
      const posts = data.data.children.map(child => child.data);
      return {
        posts,
        subreddit,
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error
    }
    
  })

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    isLoading: false,
    hasError: false,
    defaultSubreddit: '/r/pics'
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
        state.cards = action.payload.posts
        state.defaultSubreddit = action.payload.subreddit;
      })
      .addCase(fetchCard.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
})

export default cardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;
export const selectDefaultSubreddit = (state) => state.cards.defaultSubreddit;

