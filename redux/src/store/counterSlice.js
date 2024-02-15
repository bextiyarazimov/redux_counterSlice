

import { createSlice } from  "@reduxjs/toolkit";

const initialState = {
    count: 0,

};

const counterSlice =createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.count++;
        },

        decrement: (state) => {
            state.count--;
        },

        incrementByAmount: (state,action) => {
            state.count = state.count + action.payload;
        },

        decrementByAmount: (state,action) => {
            state.count = state.count - action.payload;
        },

    },


});
export const {increment,decrement,incrementByAmount,decrementByAmount}=counterSlice.actions;
export  default counterSlice.reducer;

