import Input from "../Common/Input";
import FilterButton from "./Filterbutton";
import FilterSelect from "./FilterSelect";

export default function Filter() {
  return (
    <div className="border rounded-lg w-full">
      <div className="flex flex-col py-4 px-3">
        <label>Catégorie</label>
        <FilterSelect className="mt-2">
          <option value="all">Toutes les cathégories</option>
          <option value="motherboard">Carte mère</option>
          <option value="cpu">Processeur</option>
          <option value="gpu">Carte Graphique</option>
          <option value="ram">Mémoire vive (RAM)</option>
          <option value="psu">Alimentation (PSU)</option>
          <option value="fan/cooling">
            Ventilateurs et systèmes de refroidissement
          </option>
        </FilterSelect>
        <div className="w-full flex flex-col mt-4">
          <label>Prix</label>
          <div className="mt-2 flex items-center">
            <Input
              type="number"
              className="w-full mr-6 px-3 focus:border border-gray-300 rounded-lg outline-none
         focus:border-gray-400 focus:ring-4 focus:ring-gray-300
         transition ease-out duration-100"
              placeholder="Min"
              id="min/max"
            />
            <span>-</span>
            <Input
              type="number"
              className="w-full ml-6 px-3 py-2 focus:border border-gray-300 rounded-lg outline-none
         focus:border-gray-400 focus:ring-4 focus:ring-gray-300
         transition ease-out duration-100"
              placeholder="Max"
              id="min/max"
            />
            <FilterButton className="ml-3 text-sm">OK</FilterButton>
          </div>
          <div className="mt-4">
            <label htmlFor="">État</label>
            <FilterSelect className="mt-2 w-full">
              <option value="all-status">Tous les états</option>
              <option value="new">Neuf</option>
              <option value="like-new">Comme neuf</option>
              <option value="very-good-condition">Très bonne état</option>
              <option value="good-condition">Bon état</option>
              <option value="fair-condition">État correct</option>
            </FilterSelect>
          </div>
        </div>
      </div>
    </div>
  );
}
