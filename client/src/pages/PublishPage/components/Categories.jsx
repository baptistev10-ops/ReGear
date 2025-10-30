import logosmall from "../../../assets/images/Bap_Favicon.png";
import useStep from "../../../components/context/StepContext";
import { categories } from "../../../utils/categories.data";

export default function Categories() {
  const { formData, updateFormData } = useStep();

  const handleClick = (label) => {
    updateFormData("category", label);
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex gap-2 items-center">
        <img className="w-[24px]" src={logosmall} alt="Logo Regear" />
        <p className="text-sm">Quelle catégorie de composant vendez-vous ?</p>
      </div>
      <div className="gap-2 mt-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {categories.map((categorie) => (
          <button
            key={categorie.id}
            className={`flex flex-col items-center rounded-lg p-5 justify-center gap-1 w-[254px] hover:shadow-lg transition duration-200 ${
              formData.category === categorie.label
                ? "border-[2px] animate-pulse border-black"
                : "border"
            }`}
            onClick={() => handleClick(categorie.label)}
          >
            <h2 className="text-2xl">{categorie.logo}</h2>
            <h3>{categorie.label}</h3>
            <p className="text-gray-500 text-sm">{categorie.desc}</p>
            <p className="text-gray-500 text-sm">{categorie.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
