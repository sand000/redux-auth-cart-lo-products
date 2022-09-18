import axios from 'axios';

import {
    GET_MY_CART_ITEMS_ERROR,
    GET_MY_CART_ITEMS_LOADING,
    GET_MY_CART_ITEMS_SUCCESS,
} from "./cart.types";

// get cart items
const getCartItems =(token)=>async(dispatch) => {

    dispatch({type: GET_MY_CART_ITEMS_LOADING});
    try{
        let response = await axios.get("http://localhost:8080/carts",{
            headers: {
                token: token,
            },
        });
        dispatch({type: GET_MY_CART_ITEMS_SUCCESS, payload: response.data});
    }
    catch(err){
        dispatch({type: GET_MY_CART_ITEMS_ERROR});
    }
    
}