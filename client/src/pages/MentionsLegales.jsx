import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 text-gray-800 leading-relaxed font-roboto">
      <div className="flex items-center gap-4 mb-8">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-sm font-inter"
          aria-label="Retour"
        >
          <IoArrowBack />
          Retour
        </NavLink>

        <h1 className="text-2xl md:text-3xl font-bold font-inter">
          Mentions légales – ReGear
        </h1>
      </div>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          1. Éditeur du site
        </h2>
        <p>
          Le site <strong>ReGear</strong> est édité par un particulier dans un
          cadre non professionnel. Conformément à l’article 6-II de la loi
          n°2004-575 (LCEN), les informations permettant l’identification de
          l’éditeur sont conservées par l’hébergeur.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          2. Responsable de la publication
        </h2>
        <p>
          Responsable de la publication : <strong>Baptiste</strong> <br />
          Contact :{" "}
          <a
            href="mailto:baptiste.vincent2002@gmail.com"
            className="text-blue-600 underline font-opensans"
          >
            baptiste.vincent2002@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          3. Hébergement
        </h2>

        <div className="mt-4">
          <h3 className="text-lg font-medium font-inter">
            Hébergement du site web (Front-end)
          </h3>
          <p className="mt-1">
            Netlify, Inc. <br />
            2325 3rd Street, Suite 215 <br />
            San Francisco, CA 94107 — USA <br />
            <a
              href="https://www.netlify.com"
              className="text-blue-600 underline font-opensans"
            >
              https://www.netlify.com
            </a>
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium font-inter">
            Hébergement de l’API (Back-end)
          </h3>
          <p className="mt-1">
            Render.com <br />
            655 Montgomery St <br />
            San Francisco, CA 94111 — USA <br />
            <a
              href="https://render.com"
              className="text-blue-600 underline font-opensans"
            >
              https://render.com
            </a>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          4. Propriété intellectuelle
        </h2>
        <p>
          Le contenu du site ReGear (textes, images, design, fonctionnalités,
          logo, code source) est protégé par le droit d'auteur. Toute
          reproduction, modification ou diffusion non autorisée est interdite.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          5. Données personnelles – RGPD
        </h2>
        <p>
          ReGear collecte uniquement les données strictement nécessaires au
          fonctionnement du service.
        </p>

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

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          6. Cookies
        </h2>
        <p>
          ReGear utilise uniquement des cookies strictement nécessaires au
          fonctionnement du site.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          7. Limitation de responsabilité
        </h2>
        <p>
          ReGear n’est pas responsable du contenu publié par les utilisateurs ni
          des transactions entre eux.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          8. Conditions d’utilisation
        </h2>
        <p>
          Les utilisateurs s'engagent à respecter les lois françaises et les
          règles de la plateforme.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 font-inter">
          9. Contact
        </h2>
        <p>
          Pour toute question :
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
