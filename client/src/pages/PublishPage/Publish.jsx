import Categories from "./components/Categories";
import ProgressBar from "./components/ProgressBar";
import StepsBar from "./components/StepsBar";
import BlackButton from "../../components/Common/BlackButton";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import useStep from "../../components/context/StepContext";
import Photos from "./components/Photos";

export default function Publish() {
  const { category, addCategory, selectedCategory, setSelectedCategory } =
    useStep();
  console.log(category.choice);
  const next = () => {
    if (category.choice) {
      addCategory();
      console.log("ok!");
    } else {
      console.error("ça marche pas !");
    }
  };

  const renderStep = () => {
    switch (selectedCategory) {
      case 0:
        return <Categories />;
      case 1:
        return <Photos />;
      default:
        <Categories />;
    }
  };

  const back = () => {
    if (selectedCategory > 0) {
      setSelectedCategory(selectedCategory - 1);
    } else {
      console.log("Non non non !");
    }
  };
  console.log(selectedCategory);
  return (
    <div className="flex flex-col gap-3">
      <ProgressBar />
      <StepsBar />
      {renderStep()}
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
