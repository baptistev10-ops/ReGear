import { IoArrowBack } from "react-icons/io5";
import { useAuth } from "../../components/context/AuthContext";
import { NavLink } from "react-router-dom";
import defaultprofil from "../../assets/images/Bap_Favicon.png";
import { useEffect, useState } from "react";
import { getUserBlogCount } from "../../api/blog.api";
import { MdOutlineShield } from "react-icons/md";
import BlackButton from "../../components/Common/BlackButton";
import { deleteUser } from "../../api/auth.api";
import toast from "react-hot-toast";

export default function Profile() {
  const [count, setCount] = useState(0);
  const { userConnected, logout } = useAuth();

  useEffect(() => {
    async function fetchCount() {
      const data = await getUserBlogCount(userConnected._id);
      setCount(data.count);
    }
    fetchCount();
  }, []);

  async function handleDelete() {
    if (!confirm("Voulez-vous vraiment supprimer votre compte ?")) return;

    const deleted = await deleteUser(userConnected._id);

    if (deleted?._id) {
      toast.success("Compte supprimé");
      logout();
    } else {
      toast.error("Erreur lors de la suppression");
    }
  }

  return (
    <>
      <div className="w-full max-w-5xl mx-auto mt-8 px-4">
        <header className="flex items-center gap-4 mb-6">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 py-1 px-3 rounded-lg hover:bg-gray-200 transition"
            aria-label="Retour"
          >
            <IoArrowBack />
            <span className="text-sm">Retour</span>
          </NavLink>

          <div>
            <h1 className="text-2xl font-bold">Mon Profil</h1>
            <p className="text-gray-500">
              Gérez vos informations personnelles et paramètres
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="border rounded-xl p-6 w-full lg:w-1/3 bg-white shadow-sm flex flex-col items-center gap-3">
            <img
              className="border rounded-full object-cover h-[100px] w-[100px]"
              src={defaultprofil}
              alt={`Photo de profil de ${userConnected.username}`}
            />

            <p className="font-semibold text-lg">{userConnected.username}</p>
            <p className="text-sm text-gray-500">
              Membre depuis {userConnected.createdAt.slice(0, 4)}
            </p>

            <hr className="w-full" />

            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center">
                <span className="font-bold text-green-500">{count}</span>
                <span className="text-sm">annonce{count > 1 && "s"}</span>
              </div>
            </div>
          </aside>

          <section
            className="flex-1 border rounded-xl p-6 bg-white shadow-sm"
            aria-labelledby="security-title"
          >
            <header className="flex items-center gap-2 mb-4">
              <MdOutlineShield className="text-xl text-gray-700" />
              <h2 id="security-title" className="text-lg font-semibold">
                Sécurité
              </h2>
            </header>

            <div className="flex items-start justify-between border-b pb-4 mb-4">
              <div>
                <p className="font-medium">Authentification à deux facteurs</p>
                <p className="text-sm text-gray-500">
                  Sécurisez votre compte avec un code SMS
                </p>
              </div>

              <button className="relative inline-flex h-5 w-10 items-center rounded-full bg-gray-300">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full border rounded-lg px-4 py-2 hover:bg-gray-50 transition text-left">
                Changer le mot de passe
              </button>

              <button className="w-full border rounded-lg px-4 py-2 hover:bg-gray-50 transition text-left">
                Gérer les moyens de paiement
              </button>

              <button className="w-full border rounded-lg px-4 py-2 hover:bg-gray-50 transition text-left">
                Télécharger mes données
              </button>
            </div>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white w-full py-3 rounded-lg font-semibold mt-6 hover:bg-red-700 transition"
            >
              Supprimer mon compte
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
