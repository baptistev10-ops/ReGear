import { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../Common/Input";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import FilterButton from "../Filters/Filterbutton";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authGoogle, signUp } from "../../api/auth.api";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext";

export default function Register({ activeSwitchLog }) {
  const { switchLog, setSwitchLog } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const message = params.get("message");
  // console.log(message);

  useEffect(() => {
    if (message === "error") {
      toast.error("Token invalide. Veuillez vous réinscrires");
      navigate("/register", { replace: true });
    }
  }, [message, navigate]);

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
  };

  const schema = yup.object({
    username: yup.string().required("Ce champ est obligatoire"),
    email: yup
      .string()
      .email()
      .required("Ce champ est obligatoire")
      .matches(
        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
        "Format email non valide"
      ),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(5, "Trop court")
      .max(10, "Trop long"),
    confirmPassword: yup
      .string()
      .required("La confirmation du mot de passe est obligatoire")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passe ne correspondent pas"
      ),
    rgpd: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les termes et conditions"),
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

  async function submit(values) {
    try {
      const responseFromBackend = await signUp(values);
      console.log(responseFromBackend);
      if (responseFromBackend.message !== "Déjà inscrit") {
        toast.success(responseFromBackend.message);
        navigate("/login");
        reset(defaultValues);
        setSwitchLog(true);
      } else {
        toast.error(responseFromBackend.message);
      }
    } catch (error) {
      console.log(error);
    }
    // reset(defaultValues);
  }

  const registerGoogle = useGoogleLogin({
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

  return (
    <>
      <form
        className="flex flex-col gap-2 bg-white rounded-2xl shadow-lg border p-6 max-w-[400px]"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className="text-2xl text-center">Inscription</h2>
        <div className="bg-stone-100 rounded-full h-[2rem] flex items-center justify-between">
          <button
            type="button"
            onClick={activeSwitchLog}
            className="w-1/2 rounded-full m-1 text-sm p-1"
          >
            Connexion
          </button>
          <button
            type="button"
            className="w-1/2 rounded-full bg-white m-1 text-sm p-1"
          >
            Inscription
          </button>
        </div>
        <div className="flex flex-col mb-2 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="nom" className="mb-1 text-sm">
              Nom complet <span className="text-red-600">*</span>
            </label>
            <Input
              {...register("username")}
              id="nom"
              type="text"
              icon={FaRegEnvelope}
              placeholder="Votre nom"
              className="text-sm focus-within:border focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-300 transition ease-out duration-100 pl-3"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="mb-1 text-sm">
              Email <span className="text-red-600">*</span>
            </label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              icon={FaRegEnvelope}
              placeholder="votre@email.com"
              className="text-sm focus-within:border focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-300 transition ease-out duration-100 pl-3"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="mb-1 text-sm">
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
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="mb-1 text-sm">
              Confirmer le mot de passe <span className="text-red-600">*</span>
            </label>
            <Input
              {...register("confirmPassword")}
              id="confirmPassword"
              type="password"
              icon={FiLock}
              placeholder="••••••••"
              className="text-sm focus-within:border focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-300 transition ease-out duration-100 pl-3"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 text-sm" htmlFor="rgpd">
              <input
                type="checkbox"
                className="mr-4"
                id="rgpd"
                {...register("rgpd")}
              />
              J'accepte les conditions d'utilisation et la politique de
              confidentialité
            </label>
            {errors.rgpd && (
              <p className="text-red-500 text-xs">{errors.rgpd.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-gray-950 text-white py-2 px-4 rounded-lg"
        >
          S'inscrire
        </button>
        <NavLink className="text-center text-sm">Mot de passe oublié ?</NavLink>
        <div className="flex flex-row items-center">
          <hr className="w-1/2" />
          <span className="px-2 text-sm">OU</span>
          <hr className="w-1/2" />
        </div>
        <button
          type="button"
          onClick={registerGoogle}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
        >
          <FcGoogle /> <span>S'inscrire avec Google</span>
        </button>
      </form>
    </>
  );
}
