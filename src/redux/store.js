import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./slice/ContactSlice";

export const store = configureStore({
    reducer:{
        ContactReducer:ContactSlice
    }
})