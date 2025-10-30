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
    <div className="w-full mb-5 flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-2">
          <div
            className={`flex items-center justify-center rounded-full text-white w-9 h-9 ${
              selectedCategory > index ? "bg-green-600" : "bg-black"
            }`}
          >
            <p className="text-white">
              {selectedCategory > index ? <FaCheck /> : step.number}
            </p>
          </div>
          <p
            className={`text-xs ${
              selectedCategory > index && "text-green-600"
            }`}
          >
            {step.label}
          </p>
          {index < steps.length - 1 && (
            <div className="relative lg:w-14 h-[3px] bg-gray-500 rounded">
              <div
                className={`absolute top-0 left-0 h-full bg-green-600 rounded transition-all duration-1000 ${
                  selectedCategory > index ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
