import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const StepContext = createContext();

export function StepProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const [formData, setFormData] = useState({
    category: null,
    files: [],
    desc: {
      marque: "",
      modele: "",
      title: "",
      desc: "",
    },
  });

  console.log(formData);
  const navigate = useNavigate();
  const addCategory = () => {
    if (selectedCategory < 5) {
      setSelectedCategory(selectedCategory + 1);
    }
  };

  const nextStep = addCategory;
  const prevStep = () => setSelectedCategory((s) => Math.max(0, s - 1));
  const goToStep = (n) => setSelectedCategory(n);

  const updateFormData = (key, value) => {
    setFormData((prev) => {
      if (key === "desc" && typeof value === "object") {
        return {
          ...prev,
          desc: {
            ...prev.desc,
            ...value,
          },
        };
      }

      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const setField = updateFormData;

  const resetForm = () => {
    setFormData({
      category: null,
      files: [],
      desc: { marque: "", modele: "", title: "", desc: "" },
      livraison: "",
      ville: "",
      prixVente: "",
      prixAchat: "",
      etat: "",
      anneeAchat: "",
    });
    setSelectedCategory(0);
  };

  // Validation des étapes
  const isStepValid = (step = selectedCategory) => {
    switch (step) {
      case 0:
        return !!formData.category;
      case 1:
        return formData.files.length >= 3 && formData.files.length <= 8;
      case 2:
        return (
          !!formData.desc.marque &&
          !!formData.desc.modele &&
          !!formData.desc.title &&
          (formData.desc.desc || "").trim().length >= 30
        );
      case 3:
        return !!formData.prixVente && !!formData.etat === true;
      case 4:
        return !!formData.ville && !!formData.livraison === true;
      default:
        return true;
    }
  };

  return (
    <StepContext.Provider
      value={{
        // step control
        selectedCategory,
        setSelectedCategory,
        addCategory,
        nextStep,
        prevStep,
        goToStep,

        // form data
        formData,
        updateFormData,
        setField,
        resetForm,

        // validation
        isStepValid,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export default function useStep() {
  return useContext(StepContext);
}
