import axios from "axios";

import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT
} from "./auth.types";


// login
export const login = (creds) =>async(dispatch)=>{
    dispatch({type: AUTH_LOGIN_LOADING});
    console.log(creds);
    try{
        let res = await axios.post(" http://localhost:8080/users/login",creds);
        console.log(res.data);
        dispatch({type: AUTH_LOGIN_SUCCESS, payload: res.data});
    }
    catch(e){
       dispatch({type: AUTH_LOGIN_ERROR});
    }
};

// logout
export const logout = () =>({type:AUTH_LOGOUT});