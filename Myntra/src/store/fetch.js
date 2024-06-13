import { createSlice } from "@reduxjs/toolkit";

const fecthStatus = createSlice({
    name:'fetch',
    initialState:{
        fetchingStatus:false,
        fetchingDone:false,
    },
    reducers:{
        markfetchingStarted: (state) => {
            state.fetchingStatus=true;
        },
        markfetchingFinished:(state)=>{
            state.fetchingStatus = false
        },
        markfetchDone: (state)=>{
            state.fetchingDone = true
        },
    }
})

export const fecthingAction = fecthStatus.actions;
export default fecthStatus;