import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { motion } from "motion/react"; // Motion One

import Categories from "./components/Categories";
import Photos from "./components/Photos";
import ProgressBar from "./components/ProgressBar";
import StepsBar from "./components/StepsBar";
import BlackButton from "../../components/Common/BlackButton";
import useStep from "../../components/context/StepContext";

export default function Publish() {
  const { category, addCategory, selectedCategory, setSelectedCategory } =
    useStep();

  const next = () => {
    if (category.choice) {
      addCategory();
      console.log("ok!");
    } else {
      console.error("ça marche pas !");
    }
  };

  const back = () => {
    if (selectedCategory > 0) {
      setSelectedCategory(selectedCategory - 1);
    } else {
      console.log("Non non non !");
    }
  };

  const renderStep = () => {
    switch (selectedCategory) {
      case 0:
        return <Categories key="cat" />;
      case 1:
        return <Photos key="photos" />;
      default:
        return <Categories key="cat" />;
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <ProgressBar />
      <StepsBar />

      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderStep()}
      </motion.div>

      <div className="flex justify-between">
        <button
          onClick={back}
          className="flex items-center text-black py-2 px-4 rounded-lg border"
        >
          <IoArrowBack className="text-sm mr-3" />
          Précédent
        </button>

        <BlackButton
          onClick={next}
          disabled={!category.choice}
          className={`flex items-center ${
            category.choice
              ? "cursor-pointer"
              : "cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          }`}
        >
          Suivant <IoArrowForward className="text-sm ml-3" />
        </BlackButton>
      </div>
    </div>
  );
}
