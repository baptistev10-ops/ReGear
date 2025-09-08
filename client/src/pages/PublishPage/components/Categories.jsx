import logosmall from "../../../assets/images/Bap_Favicon.png";

export default function Categories() {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex gap-2 items-center">
        <img className="w-[24px]" src={logosmall} alt="Logo Regear" />
        <p className="text-sm">Quelle catégorie de composant vendez-vous ?</p>
      </div>
      <ul className="flex flex-wrap gap-2 mt-3 max-w-[50vw]">
        <li className="flex flex-col items-center border rounded-lg p-2 justify-center gap-1 w-[254px]">
          <h2>🔧</h2>
          <h3>Processeur</h3>
          <p>Intel, Amd - Tous sockets</p>
          <p>Prix moyen: 50€ - 800€</p>
        </li>
        <li className="flex flex-col items-center border rounded-lg p-2 justify-center gap-1 w-[254px]">
          <h2>🎮</h2>
          <h3>Cartes graphiques</h3>
          <p>NVIDIA, AMD - Gaming et pro</p>
          <p>Prix moyen: 100€ - 2000€</p>
        </li>
        <li className="flex flex-col items-center border rounded-lg p-2 justify-center gap-1 w-[254px]">
          <h2>💾</h2>
          <h3>Mémoire RAM</h3>
          <p>DDR4, DDR5 - Toutes capacités</p>
          <p>prix moyen: 30 - 500€</p>
        </li>
        <li className="flex flex-col items-center border rounded-lg p-2 justify-center gap-1 w-[254px]">
          <h2>🖥️</h2>
          <h3>Cartes Mères</h3>
          <p>ATX, Micro-ATX, Mini-ITX</p>
          <p>Prix moyen: 60€ - 600€</p>
        </li>
        <li className="flex flex-col items-center border rounded-lg p-2 justify-center gap-1 w-[254px]">
          <h2>💿</h2>
          <h3>Stockage</h3>
          <p>SSD, HDD, NVMe</p>
          <p>Prix moyen: 25€ - 400€</p>
        </li>
        <li className="flex flex-col items-center border rounded-lg p-2 justify-center gap-1 w-[254px]">
          <h2>⚡</h2>
          <h3>Alimentations</h3>
          <p>Modulaires et non-modulaires</p>
          <p>Prix moyen: 40€ - 300€</p>
        </li>
        <li className="flex flex-col items-center border rounded-lg p-2 justify-center gap-1 w-[254px]">
          <h2>❄️</h2>
          <h3>Refroidissement</h3>
          <p>Ventirad, AIO, ventilateurs</p>
          <p>Prix: 20€ - 200€</p>
        </li>
        <li className="flex flex-col items-center border rounded-lg p-2 justify-center gap-1 w-[254px]">
          <h2>📦</h2>
          <h3>Boîtiers</h3>
          <p>Tous formats et designs</p>
          <p>Prix moyen: 30€ - 200€</p>
        </li>
        <li className="flex flex-col items-center border rounded-lg p-2 justify-center gap-1 w-[254px]">
          <h2>🖱️</h2>
          <h3>Périphériques</h3>
          <p>Clavier, souris, écrans</p>
        </li>
      </ul>
    </div>
  );
}
