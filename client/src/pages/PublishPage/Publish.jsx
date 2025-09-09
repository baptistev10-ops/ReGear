import Categories from "./components/Categories";
import ProgressBar from "./components/ProgressBar";
import StepsBar from "./components/StepsBar";
import BlackButton from "../../components/Common/BlackButton";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export default function Publish() {
  return (
    <div>
      <ProgressBar />
      <StepsBar />
      <Categories />
      <BlackButton className="flex items-center">
        Suivant <IoArrowForward className="text-sm ml-3" />
      </BlackButton>
    </div>
  );
}
