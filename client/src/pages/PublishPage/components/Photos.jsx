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
    <div className="border rounded-lg p-4 w-full max-w-3xl flex flex-col gap-3">
      {/* Titre */}
      <div className="flex items-center gap-2">
        <LuCamera />
        <p>Ajoutez des photos de votre {formData.category}</p>
      </div>

      {/* Conseils photos */}
      <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 mt-5">
        <div className="flex items-center gap-2">
          <LuLightbulb className="text-blue-600" />
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
        className={`mt-4 border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition
          ${
            dragActive
              ? "border-blue-600 bg-blue-50"
              : "border-gray-300 bg-gray-50 hover:border-blue-400"
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
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <LuUpload className="text-3xl text-blue-600" />
          <p className="text-sm text-gray-600">
            Glissez vos fichiers ici ou{" "}
            <span className="text-blue-600 underline">
              cliquez pour parcourir
            </span>
          </p>
          <p className="text-xs text-gray-500">
            (minimum 3 – maximum 8 photos)
          </p>
        </label>
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
                className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
