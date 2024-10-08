/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Protected = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    const location = useLocation()

    
    if(loading){
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default Protected;






