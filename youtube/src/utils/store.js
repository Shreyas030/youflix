import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchSlice from "./searchSlice";
import chatslice from "./chatslice";

const store = configureStore({
  reducer: {
    search: searchSlice,
    app: appslice,
    chat: chatslice,
  },
});

export default store;
