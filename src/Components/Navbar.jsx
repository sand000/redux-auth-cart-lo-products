import React from 'react'
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { logout } from '../Store/Auth/auth.actions';

const Navbar = () => {

  const token = useSelector((store)=>store.auth.token)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleLogin = () => {
    if(token){
      dispatch(logout());
    }
      navigate("/login");
  }

  return (
    <div style={{padding:"10px", display:"flex", gap:"30px"}}>
      <Link to="">Products</Link>
      <Link to="cart">CartItems</Link>
      <button onClick={toggleLogin}>{token? "Logout":"Login"}</button>
    </div>
  )
}

export default Navbar;
