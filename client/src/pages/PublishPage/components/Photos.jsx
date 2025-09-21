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
      <div
        className="border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer hover:border-blue-400 hover:bg-blue-50 border-blue-500 bg-blue-50"
        style={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <div>
            <p className="text-lg font-medium text-gray-700">
              Glissez votre image ici
            </p>
            <p className="text-sm text-gray-500 mt-1">
              ou cliquez pour parcourir vos fichiers
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
            <span>PNG, JPG, JPEG jusqu'à 5MB</span>
          </div>
        </div>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
}
