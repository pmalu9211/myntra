import { createSlice } from "@reduxjs/toolkit";
import { Initial_state } from "../../../1-pre-built-bundle/old-clone/data/items";

const itemSlice = createSlice({
    name: "items",
    initialState : [],
    reducers:{
        addInitialItems : (state, action) =>{
            console.log(action.payload);
            return action.payload;
        }
    }
})

export const itemActions = itemSlice.actions;
export default itemSlice;
