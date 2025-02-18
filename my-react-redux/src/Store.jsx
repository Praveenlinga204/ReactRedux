import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './Slice/Slice'

const store = configureStore({
    devTools:true,
    reducer:{
        customer: customerReducer
    }
})


export default store;