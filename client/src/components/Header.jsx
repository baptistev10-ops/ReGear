import { NavLink } from "react-router-dom";
import logosmall from "../assets/images/Bap_1024x1024.png";
import { FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <>
      <header className="w-full backdrop-blur-sm bg-white bg-opacity-70 max-h-[100px] flex justify-center items-center border-b border-gray-300 sticky top-0">
        <NavLink to="/" className="h-full w-[25vw] ml-10">
          <img
            src={logosmall}
            alt="Logo ReGear"
            title="Logo ReGear"
            className="h-full"
          />
        </NavLink>

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

        <div className="w-[25vw] mr-10">
          <button className="bg-gray-950 text-white py-2 px-4 rounded-lg">
            + Publier une annonce
          </button>
        </div>
      </header>
    </>
  );
}
