import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Politique() {
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
          Politique de Confidentialité – ReGear
        </h1>
      </div>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          1. Données collectées
        </h2>
        <p>
          ReGear collecte uniquement les données nécessaires au fonctionnement
          du service :
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Adresse e-mail</li>
          <li>Mot de passe (hashé et jamais en clair)</li>
          <li>Nom d’utilisateur</li>
          <li>Données techniques (cookies essentiels)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          2. Finalité du traitement
        </h2>
        <p>Les données sont utilisées pour :</p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Créer et gérer votre compte</li>
          <li>Assurer la sécurité du site</li>
          <li>Gérer les annonces et interactions entre utilisateurs</li>
          <li>Lutter contre la fraude</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          3. Base légale
        </h2>
        <p>
          Le traitement des données repose sur : – votre consentement, –
          l’exécution d’un contrat (création de compte), – l’intérêt légitime
          (sécurité, lutte anti-fraude).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          4. Durée de conservation
        </h2>
        <p>
          Les données sont conservées tant que votre compte est actif. En cas de
          suppression, elles sont effacées sous 30 jours (sauf obligations
          légales particulières).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          5. Cookies
        </h2>
        <p>
          ReGear utilise uniquement des cookies essentiels au fonctionnement du
          site (authentification, sécurité).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          6. Vos droits
        </h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Droit d’accès</li>
          <li>Droit de rectification</li>
          <li>Droit de suppression</li>
          <li>Droit d’opposition</li>
          <li>Droit à la portabilité</li>
        </ul>

        <p className="mt-4">
          Pour exercer vos droits :
          <a
            href="mailto:baptiste.vincent2002@gmail.com"
            className="text-blue-600 underline ml-1 font-opensans"
          >
            baptiste.vincent2002@gmail.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          7. Contact
        </h2>
        <p>
          Pour toute question relative aux données personnelles :
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
