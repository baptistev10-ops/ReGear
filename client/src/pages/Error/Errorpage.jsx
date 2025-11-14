import { NavLink } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-50">
      <div className="max-w-md">
        <h1 className="text-7xl font-extrabold font-inter text-gray-900">
          404
        </h1>

        <h2 className="text-2xl font-inter font-semibold mt-4 text-gray-800">
          Oups, cette page n’existe pas
        </h2>

        <p className="mt-3 text-gray-500 font-roboto">
          Il semble que vous soyez tombé sur une page qui n'existe plus, ou qui
          n'a jamais existé… Mais ne vous inquiétez pas, vous pouvez revenir en
          lieu sûr.
        </p>

        <NavLink
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-gray-900 text-white font-inter hover:bg-black transition"
        >
          <IoArrowBack className="text-lg" />
          Retour à l’accueil
        </NavLink>
      </div>
    </div>
  );
}
