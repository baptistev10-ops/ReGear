import { useForm } from "react-hook-form";
import useStep from "../../../components/context/StepContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Desc() {
  const { formData } = useStep();
  let schema = yup.object({
    marque: yup.string().required("La marque est obligatoire"),
    modele: yup.string().required("Veuillez préciser le modèle"),
    title: yup.string().required("Veuillez indiquer un titre à votre annonce."),
    desc: yup
      .string()
      .min(30, "La description dois faire au minimum 30 caractères.")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Décrivez votre <span className="capitalize">{formData.category}</span>
      </h2>

      {/* Marque & Modèle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Marque<span className="text-red-500">*</span>
          </label>
          <input
            {...register("marque")}
            type="text"
            placeholder="Intel, AMD, Autre..."
            className="mt-2 w-full rounded-xl border border-gray-300 bg-stone-100 px-4 py-2 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition duration-150 ease-out"
          />
          <p className="text-red-500">{errors.marque?.message}</p>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Modèle<span className="text-red-500">*</span>
          </label>
          <input
            {...register("modele")}
            type="text"
            placeholder="Ex: RTX 4070 SUPER"
            className="mt-2 w-full rounded-xl border border-gray-300 bg-stone-100 px-4 py-2 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition duration-150 ease-out"
          />
          <p className="text-red-500">{errors.modele?.message}</p>
        </div>
      </div>

      {/* Titre */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">
          Titre de l'annonce<span className="text-red-500">*</span>
        </label>
        <input
          {...register("title")}
          type="text"
          placeholder="Décrivez votre produit en quelques mots"
          className="mt-2 w-full rounded-xl border border-gray-300 bg-stone-100 px-4 py-2 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition duration-150 ease-out"
        />
        <p className="text-red-500">{errors.title?.message}</p>
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">
          Description détaillée<span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("desc")}
          rows="5"
          placeholder="Décrivez l'état, l'utilisation, les performances, etc..."
          className="mt-2 w-full rounded-xl border border-gray-300 bg-stone-100 px-4 py-2 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition duration-150 ease-out resize-none"
        ></textarea>
        <p className="text-red-500">{errors.desc?.message}</p>
      </div>
    </form>
  );
}
