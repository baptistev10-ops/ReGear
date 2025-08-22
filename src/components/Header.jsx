import { NavLink } from "react-router-dom";
import logosmall from "../assets/images/logo_small.png";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="min-w-full max-h-[100px] flex justify-around items-center">
        <NavLink to="/" className="h-full">
          <img
            src={logosmall}
            alt="Logo ReGear"
            title="Logo ReGear"
            className="h-full"
          />
        </NavLink>
        <nav className="flex gap-4">
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
            <FaUserAlt /> Connexion
          </NavLink>
          <NavLink
            to="/register"
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3"
          >
            S'inscrire
          </NavLink>
        </nav>
        <button className="bg-gray-950 text-white py-2 px-4 rounded-lg">
          + Publier une annonce
        </button>
      </header>
    </>
  );
}
