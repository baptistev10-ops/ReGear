import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logosmall from "../assets/images/Bap_1024x1024.png";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "./context/AuthContext";
import BlackButton from "./Common/BlackButton";

export default function Header() {
  const { userConnected, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="backdrop-blur-sm bg-white bg-opacity-70 border-b border-gray-300 sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <NavLink to="/" className="flex items-center">
          <img
            src={logosmall}
            alt="Logo ReGear"
            title="Logo ReGear"
            className="h-14 w-auto"
          />
        </NavLink>

        <nav className="hidden md:flex gap-4 font-[Inter] items-center">
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

          {userConnected ? (
            <>
              <NavLink
                to={`/profile/${userConnected._id}`}
                className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 flex gap-1 items-center"
              >
                <FiUser /> {userConnected.username}
              </NavLink>
              <button
                onClick={logout}
                className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 flex gap-1 items-center"
            >
              <FiUser /> Connexion
            </NavLink>
          )}
        </nav>

        <div className="hidden md:block">
          <BlackButton
            className="bg-gray-950 text-white"
            onClick={() => navigate("/publish")}
          >
            + Publier une annonce
          </BlackButton>
        </div>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 border-t border-gray-200 backdrop-blur-sm transition-all duration-300 ease-in-out">
          <nav className="flex flex-col gap-2 p-4 font-[Inter] text-center">
            <NavLink
              to="/vendre"
              className="hover:bg-slate-100 rounded-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Vendre
            </NavLink>
            <NavLink
              to="/annonces"
              className="hover:bg-slate-100 rounded-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Mes annonces
            </NavLink>

            {userConnected ? (
              <>
                <span className="flex justify-center items-center gap-2 py-2">
                  <FiUser /> {userConnected.username}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="hover:bg-slate-100 rounded-lg py-2"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="hover:bg-slate-100 rounded-lg py-2 flex justify-center items-center gap-1"
                onClick={() => setMenuOpen(false)}
              >
                <FiUser /> Connexion
              </NavLink>
            )}

            <BlackButton
              className="bg-gray-950 text-white mt-3"
              onClick={() => {
                navigate("/publish");
                setMenuOpen(false);
              }}
            >
              + Publier une annonce
            </BlackButton>
          </nav>
        </div>
      )}
    </header>
  );
}
