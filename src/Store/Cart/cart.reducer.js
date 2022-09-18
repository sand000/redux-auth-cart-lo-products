import {
    GET_MY_CART_ITEMS_ERROR,
    GET_MY_CART_ITEMS_LOADING,
    GET_MY_CART_ITEMS_SUCCESS,
} from "./cart.types";

let initState = {
    loading: false,
    error: false,
    data: []
};

export const cartReducer = (state=initState, {type, payload}) => {
    switch(type){
        case GET_MY_CART_ITEMS_LOADING: return {
            ...state,
            loading: true,
        }
        case GET_MY_CART_ITEMS_ERROR: return {
            ...state,
            loading: false,
            error:true,
        }
        case GET_MY_CART_ITEMS_SUCCESS: return {
            ...state,
            loading: false,
            error:false,
            data: payload.data,
        }
        
        
        default: return state;
    }
};