import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice.js"

const appStore = configureStore({
  reducer: {
    chat: chatSlice,
  },
});

export default appStore;
