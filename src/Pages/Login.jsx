import React, { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom";
import { login } from '../Store/Auth/auth.actions';

// Login
const Login = () => {
  const token = useSelector((store)=>store.auth.token)
  console.log(token)
  const [creds, setCreds] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(creds)
// onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(creds));
  };

// onChange
  const onChange = (e) => {
    const {name, value} = e.target;
    setCreds({
      ...creds,
      [name]: value
    })
  };

  useEffect(()=>{
    if(token){
      navigate("/")
    }
  },[token, navigate])

  return (
    <div>
      Login
      <form onSubmit={onSubmit}>
         <input 
          type="email" 
          name="email" 
          onChange={onChange} 
          placeholder='email'
         />
           <input 
          type="password"  
          name="password"  
          onChange={onChange} 
          placeholder='password'
         />

         <button  type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
