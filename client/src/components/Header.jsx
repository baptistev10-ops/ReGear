import { Navigate, NavLink, useNavigate } from "react-router-dom";
import logosmall from "../assets/images/Bap_1024x1024.png";
import { FiUser } from "react-icons/fi";
import { useAuth } from "./context/AuthContext";
import BlackButton from "./Common/BlackButton";

export default function Header() {
  const { userConnected, logout } = useAuth();
  const Navigate = useNavigate();
  return (
    <header className="backdrop-blur-sm bg-white bg-opacity-70 max-h-[100px] flex justify-center items-center border-b border-gray-300 sticky top-0 w-screen z-50">
      <NavLink to="/" className="h-full w-[25vw] ml-10">
        <img
          src={logosmall}
          alt="Logo ReGear"
          title="Logo ReGear"
          className="h-full"
        />
      </NavLink>

      {userConnected ? (
        <nav className="flex gap-4 font-[Inter] font- w-[50vw] justify-center">
          <NavLink
            to="/vendre"
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3"
          >
            Vendre
          </NavLink>
          <NavLink
            to="/annonces"
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3"
          >
            Mes annonces
          </NavLink>
          <NavLink
            to="/"
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 flex gap-1 items-center"
          >
            <FiUser /> {userConnected.username}
          </NavLink>
          <NavLink
            to="/"
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 flex gap-1 items-center"
            onClick={logout}
          >
            Déconnexion
          </NavLink>
        </nav>
      ) : (
        <nav className="flex gap-4 font-[Inter] font- w-[50vw] justify-center">
          <NavLink
            to="/vendre"
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3"
          >
            Vendre
          </NavLink>
          <NavLink
            to="/annonces"
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3"
          >
            Mes annonces
          </NavLink>
          <NavLink
            to="/login"
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 flex gap-1 items-center"
          >
            <FiUser /> Connexion
          </NavLink>
        </nav>
      )}

      <div className="w-[25vw] mr-10">
        <BlackButton onClick={() => Navigate("/publish")}>
          + Publier une annonce
        </BlackButton>
      </div>
    </header>
  );
}
