import { useState } from "react";
import { LuCamera, LuLightbulb, LuUpload } from "react-icons/lu";
import { photosconseils } from "../../../utils/photoconseils.data";
import useStep from "../../../components/context/StepContext";

export default function Photos() {
  const { formData, updateFormData } = useStep();
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");

  const validateFiles = (newFiles) => {
    if (newFiles.length < 3) {
      setError("Vous devez ajouter au minimum 3 photos.");
    } else if (newFiles.length > 8) {
      setError("Vous ne pouvez pas ajouter plus de 8 photos.");
    } else {
      setError("");
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFiles = [...formData.files, ...selectedFiles].slice(0, 8);
    updateFormData("files", newFiles);
    validateFiles(newFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      const newFiles = [...formData.files, ...droppedFiles].slice(0, 8);
      updateFormData("files", newFiles);
      validateFiles(newFiles);
    }
  };

  const removeFile = (index) => {
    const newFiles = formData.files.filter((_, i) => i !== index);
    updateFormData("files", newFiles);
    validateFiles(newFiles);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="md:border rounded-lg p-5 sm:p-6 bg-white w-full max-w-[880px] flex flex-col gap-5">
        {/* Titre */}
        <div className="flex items-center gap-2">
          <LuCamera className="text-gray-700 text-lg" />
          <p className="text-base font-medium text-gray-800">
            Ajoutez des photos de votre {formData.category}
          </p>
        </div>

        {/* Conseils photos */}
        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
          <div className="flex items-center gap-2">
            <LuLightbulb className="text-blue-600 text-lg" />
            <p className="text-blue-600 font-medium">
              Conseils pour de meilleures photos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {photosconseils.map((conseil, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-blue-600 text-lg">{conseil.icon}</span>
                <div>
                  <h2 className="text-blue-600 font-semibold text-sm">
                    {conseil.title}
                  </h2>
                  <p className="text-blue-500 text-xs font-medium leading-tight">
                    {conseil.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zone Drag & Drop */}
        {/* Zone Drag & Drop */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);
          }}
          className={`
    relative mt-4 transition-all duration-300 ease-in-out rounded-2xl border-2 border-dashed p-10 text-center cursor-pointer
    ${
      dragActive
        ? "border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 shadow-inner"
        : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-gray-100"
    }
  `}
        >
          <input
            type="file"
            id="file-upload"
            multiple
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />

          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center gap-3 cursor-pointer select-none"
          >
            {/* Icône d’upload */}
            <div
              className={`p-4 rounded-full border transition-all ${
                dragActive
                  ? "border-blue-600 bg-blue-100 scale-105 shadow-md"
                  : "border-gray-300 bg-white hover:scale-105 hover:shadow-sm"
              }`}
            >
              <LuUpload
                className={`text-3xl ${
                  dragActive ? "text-blue-600" : "text-gray-600"
                } transition-all duration-300`}
              />
            </div>

            {/* Texte principal */}
            <p className="text-sm text-gray-700 font-medium">
              Glissez vos fichiers ici ou{" "}
              <span className="text-blue-600 underline hover:text-blue-700 transition">
                cliquez pour parcourir
              </span>
            </p>

            {/* Sous-texte */}
            <p className="text-xs text-gray-500 font-medium">
              (minimum 3 – maximum 8 photos)
            </p>
          </label>

          {/* Effet de glow subtil au survol */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 opacity-0 hover:opacity-30 bg-gradient-to-br from-blue-100/50 via-transparent to-gray-100/50"></div>
        </div>

        {/* Message d’erreur */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Preview */}
        {formData.files.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
            {formData.files.map((file, index) => (
              <div
                key={index}
                className="relative border rounded-lg overflow-hidden group"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-full h-32 object-cover"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded lg:opacity-0 lg:group-hover:opacity-100 transition sm:opacity-100"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
