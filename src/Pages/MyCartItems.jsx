import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"

// cartItems 
const CartItems = () => {
    const token = useSelector((store) => store.auth.token);
    const {loading, data} = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    // get cart items
    const getCartItems = async() => {
        let response = await axios.get("http://localhost:8080/carts",{
            headers: {
                token: token,
            },
        });
        return response.data;
    }

    useEffect(()=>{
        dispatch(getCartItems());
    },[]);

  return (
    <div>
       CartItems
       {data.map((p)=>(
           <div key={p._id}>{p.product.name}-{p.quantity} - ${p.quantity*p.product.price}</div>
       ))}
    </div>
  )
}

export default CartItems;
