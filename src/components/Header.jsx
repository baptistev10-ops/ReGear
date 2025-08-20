import { NavLink } from "react-router-dom";
import logosmall from "../assets/images/logo_small.png";

export default function Header() {
  return (
    <>
      <header className="min-w-full max-h-[100px] flex justify-around items-center">
        <img
          src={logosmall}
          alt="Logo ReGear"
          title="Logo ReGear"
          className="h-full"
        />
        <nav className="flex gap-4">
          <NavLink className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3">
            Vendre
          </NavLink>
          <NavLink className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3">
            Mes annonces
          </NavLink>
          <NavLink className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3">
            Connexion
          </NavLink>
        </nav>
        <button className="bg-gray-950 text-white py-2 px-4 rounded-lg">
          + Publier une annonce
        </button>
      </header>
    </>
  );
}
