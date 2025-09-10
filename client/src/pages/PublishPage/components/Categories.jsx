import { useState } from "react";
import logosmall from "../../../assets/images/Bap_Favicon.png";
import useStep from "../../../components/context/StepContext";

const categories = [
  {
    id: 1,
    label: "Processeur",
    desc: "Intel, Amd - Tous sockets",
    price: "Prix moyen: 50€ - 800€",
    logo: "🔧",
  },
  {
    id: 2,
    label: "Cartes Graphiques",
    desc: "NVIDIA, AMD - Gaming et pro",
    price: "Prix moyen: 100€ - 2000€",
    logo: "🎮",
  },
  {
    id: 3,
    label: "Mémoire RAM",
    desc: "DDR4, DDR5 - Toutes capacités",
    price: "prix moyen: 30 - 500€",
    logo: "💾",
  },
  {
    id: 4,
    label: "Cartes Mères",
    desc: "ATX, Micro-ATX, Mini-ITX",
    price: "Prix moyen: 60€ - 600€",
    logo: "🖥️",
  },
  {
    id: 5,
    label: "Stockage",
    desc: "SSD, HDD, NVMe",
    price: "Prix moyen: 25€ - 400€",
    logo: "💿",
  },
  {
    id: 6,
    label: "Alimentation",
    desc: "Modulaires et non-modulaires",
    price: "Ventirad, AIO, ventilateurs",
    logo: "⚡",
  },
  {
    id: 7,
    label: "Refroidissement",
    desc: "Ventirad, AIO, ventilateurs",
    price: "Prix moyen: 20€ - 200€",
    logo: "❄️",
  },
  {
    id: 8,
    label: "Boîtiers",
    desc: "Tous formats et designs",
    price: "Prix moyen: 30€ - 200€",
    logo: "📦",
  },
  {
    id: 9,
    label: "Périphériques",
    desc: "Clavier, souris, écrans",
    logo: "🖱️",
  },
];

export default function Categories() {
  const { selectedCategory, setSelectedCategory } = useStep();
  return (
    <div className="border rounded-lg p-4">
      <div className="flex gap-2 items-center">
        <img className="w-[24px]" src={logosmall} alt="Logo Regear" />
        <p className="text-sm">Quelle catégorie de composant vendez-vous ?</p>
      </div>
      <div className="gap-2 mt-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {categories.map((categorie) => (
          <button
            key={categorie.id}
            className={`flex flex-col items-center rounded-lg p-5 justify-center gap-1 w-[254px] hover:shadow-lg transition duration-200 ${
              selectedCategory === categorie.id
                ? "border-[2px] animate-pulse border-black"
                : "border"
            }`}
            onClick={() => setSelectedCategory(categorie.id)}
          >
            <h2 className="text-2xl">{categorie.logo}</h2>
            <h3>{categorie.label}</h3>
            <p className="text-gray-500 text-sm">{categorie.desc}</p>
            <p className="text-gray-500 text-sm ">{categorie.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
