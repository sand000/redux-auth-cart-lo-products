import {
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT
  } from "./auth.types";

let token = localStorage.getItem("token") || "";

let initState = {
    loading: false,
    error: false,
    token:token
};

export const authReducer = (state=initState, {type, payload}) => {
  switch(type){
    case AUTH_LOGIN_LOADING: return {
        ...state,
        loading:true,
    }
    case AUTH_LOGIN_ERROR: return {
        ...state,
        loading:false,
        error:true
    }
    case AUTH_LOGIN_SUCCESS: 
    if(payload.token){
        localStorage.setItem("token", payload.token)
    }
    return {
        ...state,
        loading:false,
        error:false,
        token:payload.token
    }
    case AUTH_LOGOUT: 
    localStorage.removeItem("token");
        return {
            ...state,
            loading:false,
            error:false,
            token:"",
        }
            default: return state;
        }
};