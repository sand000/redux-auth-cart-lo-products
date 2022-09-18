import React from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import { useEffect } from 'react';
import { getProducts } from '../Store/Products/products.action';

const Products = () => {
    const {loading, data} = useSelector((store)=> store.products);
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getProducts())
    },[dispatch]);

  return (
    <div>
       Products
       {data.map((p)=>(
           <div>{p.name}</div>
       ))}
    </div>
  )
}

export default Products;
