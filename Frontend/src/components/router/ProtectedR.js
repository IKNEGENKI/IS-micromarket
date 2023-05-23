/*import {Navigate, Outlet} from 'react-router-dom';

const ProtectedR = () => {
    const isLogged = false

    if(!isLogged){
        <Navigate to="/login"/>
    }
    return(
        <Outlet/>
    );
}

export default ProtectedR;*/

import { Navigate, Outlet } from "react-router-dom"

export const ProtectedR = ({isAllowed, children, redirectTo="/login"}) =>{
  {/*if (!isAllowed){
    return <Navigate to={redirectTo}/>
  }*/}
  return children ? children : <Outlet/>
}