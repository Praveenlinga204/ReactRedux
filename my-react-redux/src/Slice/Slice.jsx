import { createSlice } from "@reduxjs/toolkit";

const initalState = [];
const customerSlice = createSlice({
    name:'Customer',
    initalState,
    reducers:{
  addCustomer(state,action){
        state.push(action.payload)
  }
    }
})
 export const {addCustomer}= customerSlice.actions;
export default customerSlice.reducer;