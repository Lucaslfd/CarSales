import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services";

export function DashboarHeader() {

  async function handleLogout() {
    await signOut(auth)
  }

  return(
    <div className="w-full items-center flex h-10 bg-blue-500 rounded-lg text-white font-medium gap-4 mb-4 mt-4 px-4">
      <Link to="/dashboard">
        Dashboard
      </Link>
      <Link to="/dashboard/new">
        Cadastrar carro
      </Link>

      <button className="ml-auto" onClick={handleLogout}>
        Sair da conta
      </button>
    </div>
  )
}