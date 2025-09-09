import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function ProgressBar() {
  return (
    <div className="flex mt-5 gap-4">
      <div className="flex items-center">
        <NavLink
          className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 items-center gap-2 inline-flex mb-4"
          to="/"
        >
          <IoArrowBack className="text-sm" />
          <span className="text-sm">Retour</span>
        </NavLink>
      </div>
      <div className="flex flex-col gap-2 mb-4 w-full">
        <h2 className="font-semibold text-xl">Publier une annonce</h2>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="bg-black h-full rounded-full w-[25%]"></div>
        </div>
      </div>
    </div>
  );
}
