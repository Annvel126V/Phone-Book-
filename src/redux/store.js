import { authSlice } from "./auth/slice";
import contactsReducer from "./filters/slice";
import filtersReducer from "./filters/slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authSlice,
  },
});

export default store;
