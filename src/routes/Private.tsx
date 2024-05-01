import { ReactNode, useContext } from "react";
import { AuthContexts } from "../contexts/AuthContexts";
import { Navigate } from "react-router-dom";


interface PrivateProps{
  children: ReactNode
}

export function Private({ children }: PrivateProps): any{
  const { signed, loadinAuth } = useContext(AuthContexts);

  if(loadinAuth){
    return <div></div>
  }

  if(!signed){
    return <Navigate to="/login"/>
  }

  return children
}