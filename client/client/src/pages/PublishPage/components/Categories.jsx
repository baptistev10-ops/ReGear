import logosmall from "../../../assets/images/Bap_Favicon.png";
import useStep from "../../../components/context/StepContext";
import { categories } from "../../../utils/categories.data";

export default function Categories() {
  const { formData, updateFormData } = useStep();

  const handleClick = (label) => {
    updateFormData("category", label);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="
      w-full 
      lg:max-w-[880px] 
      mx-auto 
      bg-white 
      lg:border 
      lg:rounded-xl 
      lg:p-6 
      transition-all 
      duration-300
    "
      >
        {/* Titre et logo */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start text-center sm:text-left px-3 lg:px-0">
          <img className="w-6" src={logosmall} alt="Logo ReGear" />
          <p className="text-sm sm:text-base font-medium text-gray-700">
            Quelle catégorie de composant vendez-vous ?
          </p>
        </div>

        {/* Grille de catégories */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
          {categories?.map((categorie) => (
            <button
              key={categorie.id}
              onClick={() => handleClick(categorie.label)}
              className={`flex flex-col items-center justify-center text-center rounded-lg border transition-all duration-200 ease-in-out p-4 sm:p-5 w-full max-w-[260px] h-[140px] sm:h-[160px] hover:shadow-md hover:-translate-y-[1px] ${
                formData.category === categorie.label
                  ? "border-2 border-black shadow-md scale-[1.01]"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl">{categorie.logo}</h2>
              <h3 className="font-semibold text-sm sm:text-base mt-1 text-gray-800">
                {categorie.label}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-tight">
                {categorie.desc}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-tight">
                {categorie.price}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
