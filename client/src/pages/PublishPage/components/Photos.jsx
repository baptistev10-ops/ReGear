import { LuCamera } from "react-icons/lu";
import { LuLightbulb } from "react-icons/lu";
import { photosconseils } from "../../../utils/photoconseils.data";
import useStep from "../../../components/context/StepContext";

export default function Photos() {
  const { category } = useStep();
  return (
    <div className="border rounded-lg p-4 w-[80vh]">
      <div className="flex items-center gap-2">
        <LuCamera />
        <p>Ajoutez des photos de votre {category.choice}</p>
      </div>
      <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 mt-5">
        <div className="flex items-center gap-2">
          <LuLightbulb className="text-blue-600" />{" "}
          <p className="text-blue-600">Conseils pour de meilleures photos</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
          {photosconseils.map((conseil, index) => (
            <div key={index} className="flex items-center gap-3">
              <span>{conseil.icon}</span>
              <div>
                <h2 className="text-blue-600 font-semibold text-sm">
                  {conseil.title}
                </h2>
                <p className="text-blue-500 font-semibold text-xs">
                  {conseil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
