import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload);
            return [...state,action.payload];
        },
        removeItem:(state,action)=>{
            // console.log(action.payload.id);
            return state.filter((value)=>{ 
                // console.log(value.id);
                return value.id != action.payload.id;})
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;