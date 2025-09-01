import { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../Common/Input";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import FilterButton from "../Filters/Filterbutton";
import { FaGoogle } from "react-icons/fa";

export default function Login({ activeSwitchLog }) {
  return (
    <>
      <form className="flex flex-col gap-4 bg-white rounded-2xl shadow-lg border p-6 max-h-[500px] min-w-[400px]">
        <h2 className="text-2xl text-center">Connexion</h2>
        <div className="bg-stone-100 rounded-full h-[2rem] flex items-center justify-between">
          <button className="w-1/2 rounded-full bg-white m-1 text-sm p-1">
            Connexion
          </button>
          <button
            onClick={activeSwitchLog}
            className="w-1/2 rounded-full m-1 text-sm p-1"
          >
            Inscription
          </button>
        </div>
        <div className="flex flex-col mb-2 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="data" className="mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <Input
              id="email"
              type="email"
              icon={FaRegEnvelope}
              placeholder="votre@email.com"
              className="text-sm focus-within:border focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-300 transition ease-out duration-100 pl-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="mb-2">
              Mot de passe <span className="text-red-600">*</span>
            </label>
            <Input
              id="password"
              type="password"
              icon={FiLock}
              placeholder="••••••••"
              className="text-sm focus-within:border focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-300 transition ease-out duration-100 pl-3"
            />
          </div>
        </div>

        <button className="bg-gray-950 text-white py-2 px-4 rounded-lg">
          Se connecter
        </button>
        <NavLink className="text-center text-sm">Mot de passe oublié ?</NavLink>
        <div className="flex flex-row items-center">
          <hr className="w-1/2" />
          <span className="px-2 text-sm">OU</span>
          <hr className="w-1/2" />
        </div>
        <FilterButton className="text-sm font-semibold flex justify-center gap-3">
          <FaGoogle />
          Continuez avec Google
        </FilterButton>
      </form>
    </>
  );
}
