import { createStore } from "@reduxjs/toolkit";

const initalState = {
    count :0
}

//Reducer function 
const counterReducer = (state = initalState, action)=>{
    switch (action.type){
        case'INCREMENT' :
        return {...state, count : state.count + 1}
        case 'DECREMENT' :
            return{...state,count :state.count - 1}
            default :
            return state;
    }
}

const store = createStore(counterReducer)

export default store
