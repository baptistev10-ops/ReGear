import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../Common/Input";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import FilterButton from "../Filters/Filterbutton";
import { FaGoogle } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { authGoogle, signIn } from "../../api/auth.api";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

export default function Login({ activeSwitchLog }) {
  const navigate = useNavigate();

  const { login } = useAuth();

  const defaultValues = {
    data: "",
    password: "",
  };

  const schema = yup.object({
    data: yup.string().required("Ce champ est obligatoire"),
    password: yup.string().required("Le mot de passe est obligatoire"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await authGoogle(tokenResponse);
        if (response.message) {
          toast.error(response.message);
        } else {
          toast.success("Bienvenue");
          login(response);
          navigate("/");
        }
      } catch (error) {
        toast.error("Erreur de connexion via Google");
      }
    },
    onError: () => toast.error("Google Login échoué"),
  });

  async function submit(values) {
    // console.log(values);
    try {
      const userConnected = await signIn(values);
      console.log(values);
      console.log(userConnected);

      if (userConnected.user) {
        toast.success("Bien connecté");
        login(userConnected.user);
        navigate("/");
        reset(defaultValues);
      } else {
        toast.error(userConnected.message);
      }
    } catch (error) {
      console.log(error);
    }
    // reset(defaultValues);
    // requete HTTP
  }
  return (
    <>
      <form
        className="flex flex-col gap-4 bg-white rounded-2xl shadow-lg border p-6 max-h-[500px] min-w-[400px]"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className="text-2xl text-center">Connexion</h2>
        <div className="bg-stone-100 rounded-full h-[2rem] flex items-center justify-between">
          <button
            type="button"
            className="w-1/2 rounded-full bg-white m-1 text-sm p-1"
          >
            Connexion
          </button>
          <button
            type="button"
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
              {...register("data")}
              id="email"
              type="email"
              icon={FaRegEnvelope}
              placeholder="votre@email.com"
              className="text-sm focus-within:border focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-300 transition ease-out duration-100 pl-3"
            />
            {errors.data && (
              <p className="text-red-500">{errors.data.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="mb-2">
              Mot de passe <span className="text-red-600">*</span>
            </label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              icon={FiLock}
              placeholder="••••••••"
              className="text-sm focus-within:border focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-300 transition ease-out duration-100 pl-3"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
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

        <button
          type="button"
          onClick={loginGoogle}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
        >
          <FcGoogle /> <span>Se connecter avec Google</span>
        </button>
      </form>
    </>
  );
}
