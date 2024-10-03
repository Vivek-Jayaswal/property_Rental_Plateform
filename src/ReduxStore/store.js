import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./slice/DataSlice";
import cartSlice from "./slice/CartSlice";

const store = configureStore({
    reducer : {
        properties : DataSlice.reducer,
        cart : cartSlice.reducer,
    }
})

export default store;