import { createStore, applyMiddleware, combineReducers } from 'redux';
import { authReducer, promiseReducer, playerReducer } from "./Reducers";
import thunk from 'redux-thunk';


let store = createStore(combineReducers({
    promise: promiseReducer,
}), applyMiddleware(thunk))


// store.subscribe(()=> console.log(store.getState()))
export { store };