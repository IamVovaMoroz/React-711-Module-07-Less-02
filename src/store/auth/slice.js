
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./thunks";

const handleFulfilled = (state, { payload }) => {
  state.access_token = payload.access_token;
  state.isLoading = false;
  
};

const handlePending = (state) => {
    state.isLoading = true;
    state.error = "";
  };

const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};



const initialState = {
  access_token: "",
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers:
   (builder) => {
    builder
      .addCase(loginThunk.fulfilled(), handleFulfilled)
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
