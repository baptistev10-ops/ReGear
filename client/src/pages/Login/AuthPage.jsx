import { NavLink } from "react-router-dom";
import computerimg from "../../assets/images/gaming-computer.webp";
import Login from "../../components/Auth/Login";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
import Register from "../../components/Auth/Register";
import { useAuth } from "../../components/context/AuthContext";

export default function AuthPage() {
  const { switchLog, setSwitchLog } = useAuth();
  const activeSwitchLog = () => {
    setSwitchLog(!switchLog);
  };
  return (
    <div className="bg-blue-50 h-screen w-screen flex justify-center items-center gap-24">
      <div className="flex-col gap-5 hidden lg:flex">
        <div>
          <h1 className="font-roboto font-normal text-2xl text-center">
            Rejoignez ReGear
          </h1>
          <h2 className="font-inter font-[300] text-sm text-center text-gray-500">
            La communauté des passionnés de hardware
          </h2>
        </div>
        <img
          className="rounded-lg shadow-xl max-h-[600px]"
          src={computerimg}
          alt="Gaming computer"
        />
        <ul className="flex gap-2">
          <li className="text-center h-[7rem] w-[8rem] bg-white rounded-lg flex flex-col gap-2 border shadow-sm">
            <span className="text-xl pt-3">🛡️</span>
            <p>Transactions sécurisées</p>
          </li>
          <li className="text-center h-[7rem] w-[8rem] bg-white rounded-lg flex flex-col gap-2 border shadow-sm">
            <span className="text-xl pt-3">⚡</span>
            <p>Livraison rapide</p>
          </li>
          <li className="text-center h-[7rem] w-[8rem] bg-white rounded-lg flex flex-col gap-2 border shadow-sm">
            <span className="text-xl pt-3">💬</span>
            <p>Support 24/7</p>
          </li>
        </ul>
      </div>
      {switchLog ? (
        <div className="mb-16">
          <NavLink
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 items-center gap-2 inline-flex mb-4"
            to="/"
          >
            <IoArrowBack className="text-sm" />
            <span className="text-sm">Retour</span>
          </NavLink>
          <Login
            activeSwitchLog={activeSwitchLog}
            setSwitchLog={setSwitchLog}
          />
        </div>
      ) : (
        <div className="mb-16">
          <NavLink
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 items-center gap-2 inline-flex mb-4"
            to="/"
          >
            <IoArrowBack className="text-sm" />
            <span className="text-sm">Retour</span>
          </NavLink>
          <Register
            activeSwitchLog={activeSwitchLog}
            setSwitchLog={setSwitchLog}
          />
        </div>
      )}
    </div>
  );
}
