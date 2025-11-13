import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useStep from "../../../components/context/StepContext";

export default function ProgressBar() {
  const { selectedCategory, resetForm } = useStep();
  const totalSteps = 5; // étapes visibles
  const maxProgressBeforeFinal = 100; // % max avant étape finale

  const progressPercentage =
    (selectedCategory / (totalSteps - 1)) * maxProgressBeforeFinal;

  return (
    <div className="flex flex-col sm:flex-row mt-5 gap-4 sm:items-start sm:justify-start w-full">
      <div className="flex items-center">
        <NavLink
          className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 items-center gap-2 inline-flex mb-2 sm:mb-0"
          to="/"
          onClick={resetForm}
        >
          <IoArrowBack className="text-sm" />
          <span className="text-sm">Retour</span>
        </NavLink>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <h2 className="font-semibold text-lg sm:text-xl text-left">
          Publier une annonce
        </h2>
        <div className="w-full h-[6px] sm:h-[8px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="bg-black h-full rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
