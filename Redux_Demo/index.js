const Redux = require('redux')
const createStore = Redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buycake (){
    return{
        type:"BUY_CAKE",
        info:'first Redux Action'
    }
}
//reducer :- (previous state, action) => newState
const initalState = {
         numofCakes:10
}

const reducer = (state = initalState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numofCakes: state.numofCakes - 1
        }
        default: return state
    }
}

const store = createStore(reducer);
console.log('Inital State', store.getState())
const unsubscribe = store.subscribe(()=>{console.log('Updated Store',store.getState())})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()