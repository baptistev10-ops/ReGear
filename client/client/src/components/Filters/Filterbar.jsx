import { PiMagnifyingGlassLight } from "react-icons/pi";
import Input from "../Common/Input";

export default function Filterbar({ type }) {
  return (
    <div className="flex items-center w-[80vw] bg-stone-100 rounded-lg px-4 focus-within:border focus-within:border-gray-400 focus-within:ring-4 focus-within:ring-gray-300 transition ease-out duration-100 mt-6">
      <PiMagnifyingGlassLight className="text-gray-500 text-xl mr-1 h-10 flex-shrink-0" />
      <Input
        type={type}
        placeholder="Rechercher des composants..."
        className="flex-1 px-3 rounded-md focus:outline-none h-full"
      />
    </div>
  );
}
