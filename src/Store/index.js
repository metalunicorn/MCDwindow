import { createStore, applyMiddleware, combineReducers } from 'redux';
import {promiseReducer,cartReducer} from "./Reducers";
import thunk from 'redux-thunk';


let store = createStore(combineReducers({
    promise: promiseReducer,
    cart: cartReducer,
}), applyMiddleware(thunk))


// store.subscribe(()=> console.log(store.getState()))
export { store };