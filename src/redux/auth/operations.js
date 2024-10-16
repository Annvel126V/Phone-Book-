import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const phoneBookApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const register = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await phoneBookApi.post("/users/signup", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await phoneBookApi.post("/users/login", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
