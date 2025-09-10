import { createContext, useContext, useState } from "react";

const StepContext = createContext();

export function StepProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [step, setStep] = useState(1);
  const handleNext = () => {
    if (selectedCategory) {
      setStep(2);
    }
  };

  return (
    <StepContext.Provider
      value={{
        handleNext,
        step,
        setStep,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export default function useStep() {
  return useContext(StepContext);
}
