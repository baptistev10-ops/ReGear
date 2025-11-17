import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Cgu() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 text-gray-800 leading-relaxed font-roboto">
      <div className="flex items-center gap-4 mb-8">
        <NavLink
          to="/login"
          className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-sm font-inter"
        >
          <IoArrowBack />
          Retour
        </NavLink>

        <h1 className="text-2xl md:text-3xl font-bold font-inter">
          Conditions Générales d’Utilisation – ReGear
        </h1>
      </div>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          1. Objet des CGU
        </h2>
        <p>
          Les présentes Conditions Générales d’Utilisation encadrent l’accès et
          l’utilisation du site <strong>ReGear</strong>, plateforme de mise en
          relation entre vendeurs et acheteurs de matériel informatique
          d’occasion.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          2. Inscription et compte utilisateur
        </h2>
        <p>
          Pour accéder à certaines fonctionnalités, l’utilisateur doit créer un
          compte en fournissant des informations exactes. Toute usurpation,
          fausse identité ou compte frauduleux est interdite.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          3. Règles d’utilisation
        </h2>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Publier uniquement des annonces légales et authentiques</li>
          <li>Ne pas diffuser de contenus injurieux, violents ou illicites</li>
          <li>Ne pas tenter de perturber le fonctionnement du site</li>
          <li>Respecter les autres utilisateurs</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          4. Annonces et contenus publiés
        </h2>
        <p>
          L’utilisateur est seul responsable des informations publiées dans ses
          annonces. ReGear se réserve le droit de modifier, masquer ou supprimer
          un contenu non conforme.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          5. Transactions entre utilisateurs
        </h2>
        <p>
          ReGear ne vend pas les produits proposés sur la plateforme et
          n’intervient pas dans les transactions. Les échanges, paiements et
          litiges relèvent exclusivement des utilisateurs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          6. Suspension et résiliation
        </h2>
        <p>
          En cas de non-respect des CGU, ReGear peut suspendre ou supprimer un
          compte sans préavis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          7. Propriété intellectuelle
        </h2>
        <p>
          Tous les éléments du site (code, design, logo, textes) sont protégés.
          Toute reproduction est interdite sans autorisation.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          8. Contact
        </h2>
        <p>
          Pour toute question concernant les CGU :
          <a
            href="mailto:baptiste.vincent2002@gmail.com"
            className="text-blue-600 underline ml-1 font-opensans"
          >
            baptiste.vincent2002@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
