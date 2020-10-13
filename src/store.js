import {applyMiddleware, createStore} from 'redux';
import rootReducer from "./modules/components/cars/redux/rootReducer";
import thunk from "redux-thunk";


export const store = createStore(rootReducer, applyMiddleware(thunk));