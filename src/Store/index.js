import {legacy_createStore,applyMiddleware ,combineReducers, compose} from "redux"
import { authReducer } from "./Auth/auth.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import thunk from "redux-thunk";
import { productsReducer } from "./Products/products.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore( rootReducer, createComposer(applyMiddleware(thunk)) );