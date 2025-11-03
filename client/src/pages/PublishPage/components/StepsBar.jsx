import useStep from "../../../components/context/StepContext";
import { FaCheck } from "react-icons/fa6";

export default function StepsBar() {
  const steps = [
    { number: 1, label: "Catégorie" },
    { number: 2, label: "Photos" },
    { number: 3, label: "Description" },
    { number: 4, label: "Prix & État" },
    { number: 5, label: "Finalisation" },
  ];
  const { selectedCategory } = useStep();
  return (
    <>
      {/* Step bar visible uniquement sur grand écran */}
      <div className="hidden lg:flex w-full max-w-[880px] mx-auto mb-8 items-center justify-center">
        <div className="flex items-center justify-between w-full">
          {steps?.map((step, index) => (
            <div
              key={step.number}
              className="flex items-center justify-center flex-1 last:flex-none"
            >
              {/* Cercle + label */}
              <div className="flex items-center gap-2 shrink-0">
                <div
                  className={`flex items-center justify-center rounded-full w-8 h-8 text-[13px] font-medium ${
                    selectedCategory > index
                      ? "bg-green-600 text-white"
                      : "bg-black text-white"
                  }`}
                >
                  {selectedCategory > index ? (
                    <FaCheck size={12} />
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={`text-sm font-medium ${
                    selectedCategory > index
                      ? "text-green-600"
                      : "text-gray-800"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Barre de liaison */}
              {index < steps.length - 1 && (
                <div className="relative flex-1 mx-4">
                  <div className="h-[2px] bg-gray-300 rounded w-full" />
                  <div
                    className={`absolute top-0 left-0 h-[2px] bg-green-600 rounded transition-all duration-700 ${
                      selectedCategory > index ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Texte simple pour mobile et tablette */}
      <p className="lg:hidden text-sm text-gray-600 text-center mb-4">
        Étape {selectedCategory + 1} sur {steps.length}
      </p>
    </>
  );
}
