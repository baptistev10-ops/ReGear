import Categories from "./components/Categories";
import ProgressBar from "./components/ProgressBar";
import StepsBar from "./components/StepsBar";
import BlackButton from "../../components/Common/BlackButton";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import useStep from "../../components/context/StepContext";
import { categories } from "../../utils/categories.data";
import Photos from "./components/Photos";

export default function Publish() {
  const { category, addCategory, selectedCategory } = useStep();
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

  return (
    <div className="flex flex-col gap-3">
      <ProgressBar />
      <StepsBar />
      {renderStep()}
      <div className="flex justify-between">
        <button>Précédent</button>
        <BlackButton
          onClick={next}
          disabled={!category.choice}
          className={`flex items-center ${
            category.choice ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          Suivant <IoArrowForward className="text-sm ml-3" />
        </BlackButton>
      </div>
    </div>
  );
}
