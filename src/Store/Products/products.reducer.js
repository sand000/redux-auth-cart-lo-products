import {
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING, 
    GET_PRODUCTS_SUCCESS
} from "./products.types";

let initState = {
    loading: false,
    error: false,
    data: []
};

export const productsReducer = (state=initState, {type, payload}) => {
    switch(type){

case GET_PRODUCTS_LOADING: return {
    ...state,
    loading: true,
}
case GET_PRODUCTS_ERROR: return {
    ...state,
    loading: false,
    error:true,
}
case GET_PRODUCTS_SUCCESS: return {
    ...state,
    loading: false,
    error:false,
    data: payload,
}



        default: return state;
    }
};