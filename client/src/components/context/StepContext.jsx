import { createContext, useContext, useState } from "react";

const StepContext = createContext();

export function StepProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [category, setCategory] = useState({});
  const [article, setArticle] = useState({});
  const [files, setFiles] = useState([]);

  const addCategory = () => {
    if (selectedCategory < 5) {
      setSelectedCategory(selectedCategory + 1);
    }
  };

  const addData = (data) => {
    setCategory({ ...category, choice: data });
  };

  return (
    <StepContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        category,
        setCategory,
        addCategory,
        addData,
        files,
        setFiles,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export default function useStep() {
  return useContext(StepContext);
}
