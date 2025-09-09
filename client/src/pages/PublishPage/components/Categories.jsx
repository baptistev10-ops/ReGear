import logosmall from "../../../assets/images/Bap_Favicon.png";

export default function Categories() {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex gap-2 items-center">
        <img className="w-[24px]" src={logosmall} alt="Logo Regear" />
        <p className="text-sm">Quelle catégorie de composant vendez-vous ?</p>
      </div>

      <div className="gap-2 mt-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <button className="flex flex-col items-center border rounded-lg p-5 justify-center gap-1 w-[254px]">
          <h2>🔧</h2>
          <h3>Processeur</h3>
          <p className="text-gray-500 text-sm">Intel, Amd - Tous sockets</p>
          <p className="text-gray-500 text-sm">Prix moyen: 50€ - 800€</p>
        </button>
        <button className="flex flex-col items-center border rounded-lg p-5 justify-center gap-1 w-[254px]">
          <h2>🎮</h2>
          <h3>Cartes graphiques</h3>
          <p className="text-gray-500 text-sm">NVIDIA, AMD - Gaming et pro</p>
          <p className="text-gray-500 text-sm">Prix moyen: 100€ - 2000€</p>
        </button>
        <button className="flex flex-col items-center border rounded-lg p-5 justify-center gap-1 w-[254px]">
          <h2>💾</h2>
          <h3>Mémoire RAM</h3>
          <p className="text-gray-500 text-sm">DDR4, DDR5 - Toutes capacités</p>
          <p className="text-gray-500 text-sm">prix moyen: 30 - 500€</p>
        </button>
        <button className="flex flex-col items-center border rounded-lg p-5 justify-center gap-1 w-[254px]">
          <h2>🖥️</h2>
          <h3>Cartes Mères</h3>
          <p className="text-gray-500 text-sm">ATX, Micro-ATX, Mini-ITX</p>
          <p className="text-gray-500 text-sm">Prix moyen: 60€ - 600€</p>
        </button>
        <button className="flex flex-col items-center border rounded-lg p-5 justify-center gap-1 w-[254px]">
          <h2>💿</h2>
          <h3>Stockage</h3>
          <p className="text-gray-500 text-sm">SSD, HDD, NVMe</p>
          <p className="text-gray-500 text-sm">Prix moyen: 25€ - 400€</p>
        </button>
        <button className="flex flex-col items-center border rounded-lg p-5 justify-center gap-1 w-[254px]">
          <h2>⚡</h2>
          <h3>Alimentation</h3>
          <p className="text-gray-500 text-sm">Modulaires et non-modulaires</p>
          <p className="text-gray-500 text-sm">Prix moyen: 40€ - 300€</p>
        </button>
        <button className="flex flex-col items-center border rounded-lg p-5 justify-center gap-1 w-[254px]">
          <h2>❄️</h2>
          <h3>Refroidissement</h3>
          <p className="text-gray-500 text-sm">Ventirad, AIO, ventilateurs</p>
          <p className="text-gray-500 text-sm">Prix moyen: 20€ - 200€</p>
        </button>
        <button className="flex flex-col items-center border rounded-lg p-5 justify-center gap-1 w-[254px]">
          <h2>📦</h2>
          <h3>Boîtiers</h3>
          <p className="text-gray-500 text-sm">Tous formats et designs</p>
          <p className="text-gray-500 text-sm">Prix moyen: 30€ - 200€</p>
        </button>
        <button className="flex flex-col items-center border rounded-lg p-5 justify-center gap-1 w-[254px]">
          <h2>🖱️</h2>
          <h3>Périphériques</h3>
          <p className="text-gray-500 text-sm">Clavier, souris, écrans</p>
        </button>
      </div>
    </div>
  );
}
