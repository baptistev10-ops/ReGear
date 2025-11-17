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

        {/* PRIX */}
        <div className="w-full flex flex-col mt-4">
          <label>Prix</label>

          {/* ⭐ RESPONSIVE FIX ICI */}
          <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <Input
              type="number"
              className="w-full px-3 rounded-lg focus:border focus:border-gray-400 focus:ring-4 focus:ring-gray-300 transition"
              placeholder="Min"
            />

            <span className="hidden sm:block">-</span>

            <Input
              type="number"
              className="w-full px-3 py-2 rounded-lg focus:border focus:border-gray-400 focus:ring-4 focus:ring-gray-300 transition"
              placeholder="Max"
            />

            {/* Bouton OK */}
            <FilterButton className="w-full sm:w-auto text-sm">OK</FilterButton>
          </div>

          {/* ETAT */}
          <div className="mt-4">
            <label>État</label>
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
