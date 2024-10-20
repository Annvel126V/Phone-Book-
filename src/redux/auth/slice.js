import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, refreshUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (bilder) => {
    bilder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, () => ({
        items: [],
        loading: false,
        error: null,
      }))

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authSlice = slice.reducer;
