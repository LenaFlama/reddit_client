import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../../app/api";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (permalink) => {
    console.log(permalink);
    console.log(`${API_ROOT}${permalink}.json`);
    try {
      const response = await fetch(`${API_ROOT}${permalink}.json`);
      console.log(`${API_ROOT}${permalink}.json`);
      let data = await response.json();
      const comments = data[1].data.children.map((child) => child.data);
      return comments;
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default commentsSlice.reducer;
export const selectComments = (state) => state.comments.comments;
