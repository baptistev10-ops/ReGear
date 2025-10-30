import { MdOutlineEuroSymbol } from "react-icons/md";
import { etats } from "../../../utils/etats.data";
import useStep from "../../../components/context/StepContext";

export default function Price() {
  const { formData, updateFormData } = useStep();

  const handleEtatClick = (label) => {
    updateFormData("etat", label);
  };

  const handlePriceChange = (e) => {
    updateFormData(e.target.name, e.target.value);
  };

  return (
    <form className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-md">
      {/* ---- SECTION PRIX DE VENTE ---- */}
      <div className="flex-1 border border-gray-200 rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MdOutlineEuroSymbol className="text-xl" />
          Prix de vente
        </h2>

        <div className="flex flex-col gap-4">
          {/* Prix d’achat original */}
          <div>
            <label
              htmlFor="prixAchat"
              className="block text-sm text-gray-600 mb-1"
            >
              Prix d’achat original (optionnel)
            </label>
            <input
              id="prixAchat"
              name="prixAchat"
              type="number"
              value={formData.prixAchat || ""}
              onChange={handlePriceChange}
              placeholder="321"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          {/* Prix de vente */}
          <div>
            <label
              htmlFor="prixVente"
              className="block text-sm text-gray-600 mb-1"
            >
              Prix de vente *
            </label>
            <input
              value={formData.prixVente || ""}
              id="prixVente"
              name="prixVente"
              type="number"
              onChange={handlePriceChange}
              required
              placeholder="200"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* ---- SECTION ÉTAT DU PRODUIT ---- */}
      <div className="flex-1 border border-gray-200 rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">État du produit</h2>

        <div className="flex flex-col gap-2">
          {etats.map((etat) => (
            <button
              key={etat.id}
              type="button"
              onClick={() => handleEtatClick(etat.label)}
              className={`flex flex-col items-start text-left rounded-lg p-3 border transition duration-200
                ${
                  formData.etat === etat.label
                    ? "border-[2px] border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
            >
              <span className="font-medium">{etat.label}</span>
              <span className="text-sm text-gray-500">{etat.desc}</span>
            </button>
          ))}
        </div>

        {/* Année d’achat */}
        <div className="mt-4">
          <label
            htmlFor="anneeAchat"
            className="block text-sm text-gray-600 mb-1"
          >
            Année d’achat (optionnel)
          </label>
          <select
            id="anneeAchat"
            name="anneeAchat"
            onChange={handlePriceChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option disabled>-- Sélectionner une année --</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
        </div>
      </div>
    </form>
  );
}
