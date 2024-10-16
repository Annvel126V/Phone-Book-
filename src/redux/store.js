import contactsReducer from "./filters/slice";
import filtersReducer from "./filters/slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
