import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./slice/text.slice";

export const store = configureStore({
    reducer: {
        text: textSlice
    }
})