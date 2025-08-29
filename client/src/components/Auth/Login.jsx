import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form className="flex flex-col gap-4 mb-6 mx-auto max-w-[400px]">
        <div className="flex flex-col mb-2">
          <label htmlFor="data" className="mb-2">
            Pseudo ou Email
          </label>
          <input
            type="text"
            id="data"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="password" className="mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <NavLink className="text-blue-500">Pas encore inscrit ?</NavLink>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </>
  );
}
