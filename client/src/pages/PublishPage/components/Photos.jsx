import { LuCamera } from "react-icons/lu";
import { LuLightbulb } from "react-icons/lu";
import { photosconseils } from "../../../utils/photoconseils.data";

export default function Photos() {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-2">
        <LuCamera />
        <p>Ajoutez des photos de votre Cartes graphiques</p>
      </div>
      <div className="border rounded-lg p-4">
        <div className="flex items-center gap-2">
          <LuLightbulb /> <p>Conseils pour de meilleures photos</p>
        </div>
        {photosconseils.map((conseil, index) => (
          <div key={index} className="flex items-center gap-3">
            <span>{conseil.icon}</span>
            <div>
              <h2>{conseil.title}</h2>
              <p>{conseil.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
