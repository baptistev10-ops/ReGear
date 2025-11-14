import { IoArrowBack } from "react-icons/io5";
import { useAuth } from "../../components/context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import defaultprofil from "../../assets/images/Bap_Favicon.png";
import { useEffect, useState } from "react";
import { getUserBlogCount } from "../../api/blog.api";
import { MdOutlineShield } from "react-icons/md";
import BlackButton from "../../components/Common/BlackButton";
import { confirmDeleteUser, deleteUser } from "../../api/auth.api";
import toast from "react-hot-toast";
import Input from "../../components/Common/Input.jsx";

export default function Profile() {
  const [count, setCount] = useState(0);
  const { userConnected, logout } = useAuth();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState("");
  const navigate = useNavigate();

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

  const HandleDeleteByPassword = async () => {
    const deleted = await confirmDeleteUser(confirmDelete);
    if (deleted === "Compte supprimé") {
      logout(), navigate("/");
    } else {
      toast.error("Mot de passe incorect");
    }
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto mt-8 px-4 font-roboto">
        <header className="flex items-center gap-4 mb-6 font-inter">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 py-1 px-3 rounded-lg hover:bg-gray-200 transition"
            aria-label="Retour"
          >
            <IoArrowBack />
            <span className="text-sm font-opensans">Retour</span>
          </NavLink>

          <div>
            <h1 className="text-2xl font-bold font-inter">Mon Profil</h1>
            <p className="text-gray-500 font-opensans">
              Gérez vos informations personnelles et paramètres
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="border rounded-xl p-6 w-full lg:w-1/3 bg-white shadow-sm flex flex-col items-center gap-3 font-roboto">
            <img
              className="border rounded-full object-cover h-[100px] w-[100px]"
              src={defaultprofil}
              alt={`Photo de profil de ${userConnected.username}`}
            />

            <p className="font-semibold text-lg font-inter">
              {userConnected.username}
            </p>
            <p className="text-sm text-gray-500 font-opensans">
              Membre depuis {userConnected.createdAt.slice(0, 4)}
            </p>

            <hr className="w-full" />

            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center">
                <span className="font-bold text-green-500 font-inter">
                  {count}
                </span>
                <span className="text-sm font-opensans">
                  annonce{count > 1 && "s"}
                </span>
              </div>
            </div>
          </aside>

          <section
            className="flex-1 border rounded-xl p-6 bg-white shadow-sm font-roboto"
            aria-labelledby="security-title"
          >
            <header className="flex items-center gap-2 mb-4 font-inter">
              <MdOutlineShield className="text-xl text-gray-700" />
              <h2 id="security-title" className="text-lg font-semibold">
                Sécurité
              </h2>
            </header>

            <div className="flex items-start justify-between border-b pb-4 mb-4">
              <div>
                <p className="font-medium font-inter">
                  Authentification à deux facteurs
                </p>
                <p className="text-sm text-gray-500 font-opensans">
                  Sécurisez votre compte avec un code SMS
                </p>
              </div>

              <button className="relative inline-flex h-5 w-10 items-center rounded-full bg-gray-300">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full border rounded-lg px-4 py-2 hover:bg-gray-50 transition text-left font-roboto">
                Changer le mot de passe
              </button>

              <button className="w-full border rounded-lg px-4 py-2 hover:bg-gray-50 transition text-left font-roboto">
                Gérer les moyens de paiement
              </button>

              <button className="w-full border rounded-lg px-4 py-2 hover:bg-gray-50 transition text-left font-roboto">
                Télécharger mes données
              </button>
            </div>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="bg-red-600 text-white w-full py-3 rounded-lg font-semibold mt-6 hover:bg-red-700 transition font-inter"
            >
              Supprimer mon compte
            </button>
          </section>

          {showDeleteModal === true && (
            <div
              onClick={() => setShowDeleteModal(false)}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 flex-col font-roboto"
            >
              <div className="bg-white rounded-lg p-9 gap-3 flex flex-col">
                <h2 className="font-semibold font-inter">
                  Pour confirmer entrez votre mot de passe
                </h2>
                <Input
                  type="password"
                  onChange={(e) => setConfirmDelete(e.target.value)}
                  className="font-roboto"
                />
                <BlackButton
                  onClick={() => HandleDeleteByPassword()}
                  className="bg-red-600 text-white font-semibold font-inter"
                >
                  Confirmer
                </BlackButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
