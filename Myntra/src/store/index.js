import {configureStore, createSlice} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fecthStatus from "./fetch";
import cartSlice from "./cartSlice";


const myntraStore = configureStore({
    reducer:{
        fetch : fecthStatus.reducer,
        items :itemSlice.reducer,
        cart : cartSlice.reducer,
    }
})

export default myntraStore;