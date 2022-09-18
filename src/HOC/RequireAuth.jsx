import React from 'react'
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux"

const RequireAuth = ({children}) => {

  const token = useSelector((store)=>store.auth.token);

  if(token){
    return children;
  }
  return <Navigate to="/login"/>
}

export default RequireAuth;
