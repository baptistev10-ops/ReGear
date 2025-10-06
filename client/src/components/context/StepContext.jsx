import { createContext, useContext, useState } from "react";

const StepContext = createContext();

export function StepProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  // state global
  const [formData, setFormData] = useState({
    category: null,
    article: {},
    files: [],
    desc: {
      marque: "",
      model: "",
      title: "",
      description: "",
    },
  });

  console.log(formData);

  const addCategory = () => {
    if (selectedCategory < 5) {
      setSelectedCategory(selectedCategory + 1);
    }
  };

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <StepContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        addCategory,
        formData,
        updateFormData,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export default function useStep() {
  return useContext(StepContext);
}
