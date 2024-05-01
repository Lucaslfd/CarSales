import { useContext } from "react";
import { AuthContexts } from "../../contexts/AuthContexts";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { FiUser, FiLogIn } from "react-icons/fi";



export function Header() {
  const {  signed, loadinAuth } = useContext(AuthContexts) 
  

  return(
    <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow">
      <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
        <Link to="/">
          <img className="w-24" src={logoImg} alt="logo da feirinha de carros"/>
        </Link>

        {!loadinAuth && signed && (
          <Link to="/dashboard">
            <div className="border-2 rounded-full p-1 border-gray-900">
              <FiUser size={24} color="#000"/>
            </div>
          </Link>
        )}
        {!loadinAuth && !signed && (
          <Link to="/login">
            <div className="border-2 rounded-full p-1 border-gray-900">
              <FiLogIn size={24} color="#000"/>
            </div>
          </Link>
        )}

      </header>
    </div>
  )
}