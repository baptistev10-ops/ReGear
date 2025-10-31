import { MdOutlineLocationOn } from "react-icons/md";
import useStep from "../../../components/context/StepContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LocalisationEtLivraison() {
  const { formData, updateFormData } = useStep();
  let schema = yup.object({
    ville: yup.string().required("La ville est obligatoire"),
    livraison: yup
      .string()
      .min(1, "Veuillez sélectionner au moins une option de livraison"),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      ville: formData.ville || "",
      livraison: formData.livraison || "",
    },
  });

  const handleLocalisationChange = (e) => {
    updateFormData(e.target.name, e.target.value);
  };

  return (
    <form className="flex flex-col gap-6 bg-white p-6 rounded-2xl w-full max-w-[880px] mx-auto">
      {/* --- LOCALISATION ET LIVRAISON --- */}
      <div className="border border-gray-200 rounded-xl p-5">
        {/* Titre */}
        <div className="flex items-center gap-2 mb-4">
          <MdOutlineLocationOn className="text-xl text-gray-700" />
          <h2 className="text-lg font-semibold">Localisation et livraison</h2>
        </div>

        {/* Localisation */}
        <div className="mb-4">
          <label
            htmlFor="localisation"
            className="block text-sm text-gray-600 mb-1"
          >
            Localisation <span className="text-red-500">*</span>
          </label>
          <input
            {...register("ville")}
            id="localisation"
            type="text"
            onChange={handleLocalisationChange}
            placeholder="Ex: Paris, 75001"
            className="w-full bg-gray-100 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="ville"
          />
          <p className="text-red-500">{errors.ville?.message}</p>
        </div>

        {/* Options de livraison */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Options de livraison <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-2">
            {[
              "Remise en main propre uniquement",
              "Envoi possible (frais à la charge de l’acheteur)",
              "Livraison incluse dans le prix",
              "Point relais uniquement",
            ].map((option, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  {...register("livraison")}
                  type="radio"
                  className="accent-gray-700 w-4 h-4 rounded border-gray-300"
                  name="livraison"
                  value={option}
                  onClick={handleLocalisationChange}
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
            <p className="text-red-500">{errors.livraison?.message}</p>
          </div>
        </div>
      </div>

      {/* --- APERÇU DE L’ANNONCE --- */}
      <div className="border border-gray-200 rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">Aperçu de votre annonce</h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-md transition-all duration-300">
          {/* Image du produit */}
          <div className="relative shrink-0 w-32 h-32 sm:w-24 sm:h-24 rounded-lg overflow-hidden border">
            <img
              src={URL.createObjectURL(formData.files[0])}
              alt="Image du produit"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-[2px] rounded-md">
              {formData.category}
            </span>
          </div>

          {/* Contenu annonce */}
          <div className="flex flex-col w-full text-center sm:text-left">
            <h3 className="font-semibold text-gray-800 text-base sm:text-lg leading-tight">
              {formData.desc.marque} {formData.desc.modele}
            </h3>

            <p className="text-sm text-gray-500 line-clamp-2 mt-1">
              {formData.desc.desc}
            </p>

            {/* Prix + État */}
            <div className="flex justify-center sm:justify-start items-center gap-3 mt-3">
              <span className="font-semibold text-gray-800 text-lg">
                {formData.prixVente} €
              </span>
              <span className="text-xs px-2 py-[3px] rounded-full bg-gray-100 border text-gray-700">
                {formData.etat}
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
