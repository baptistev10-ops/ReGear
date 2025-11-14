import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../../components/context/BlogContext";
import { useState } from "react";
import { getBlogById } from "../../api/blog.api";
import BlackButton from "../../components/Common/BlackButton";
import { IoArrowBack } from "react-icons/io5";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useBlog();
  const blog = blogs.find((value) => value._id === id);
  const [blogData, setBlogData] = useState(blog);
  const [imageSelect, setImageSelect] = useState(blogData.image[0]);
  const [visualize, setVisualize] = useState(false);

  useEffect(() => {
    if (!blog) {
      navigate("/");
    }
  }, [blog, navigate]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const details = await getBlogById(id);
        setBlogData(details);
      } catch (error) {
        console.error("Erreur récupérations des détails du blog", error);
        navigate("/");
      }
    };
  });

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 font-roboto">
      <div>
        <div className="flex items-center">
          <NavLink
            className="hover:bg-slate-200 transition ease-in duration-100 rounded-lg py-1 px-3 items-center gap-2 inline-flex mb-4 font-opensans"
            to="/"
          >
            <IoArrowBack className="text-sm" />
            <span className="text-sm">Retour</span>
          </NavLink>
        </div>

        <div className="w-full h-[350px] bg-gray-200 rounded-xl overflow-hidden">
          <img
            onClick={() => setVisualize(true)}
            src={imageSelect}
            alt={`Image principale de ${blogData.title}`}
            title={blogData.desc?.title}
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>

        {visualize && (
          <div
            onClick={() => setVisualize(false)}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            <div onClick={(e) => e.stopPropagation()} className="relative">
              <img
                src={imageSelect}
                alt={blogData.desc?.title}
                title={blogData.desc?.title}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
              />
              <button
                onClick={() => setVisualize(false)}
                className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-gray-300 font-inter"
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-3">
          {blogData.image?.slice(0, 3).map((img, index) => (
            <div
              onClick={() => setImageSelect(img)}
              key={index}
              className="w-20 h-20 rounded-md overflow-hidden border hover:border-indigo-500 transition"
            >
              <img
                src={img}
                alt={`Miniature ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 font-roboto">
        <div>
          <span className="inline-block text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md font-opensans">
            {blogData.category}
          </span>

          <h1 className="text-2xl font-semibold mt-2 font-inter">
            {blogData.title}
          </h1>

          <p className="text-3xl font-bold text-blue-700 mt-2 font-inter">
            {blogData.prixVente}€
          </p>

          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-2 py-1 rounded-md mt-1 font-opensans">
            {blogData.etat}
          </span>

          <p className="text-sm text-gray-500 mt-2 font-opensans">
            📍 {blogData.ville} · Publié le{" "}
            {new Date(blogData.createdAt).toLocaleDateString("fr-FR")}
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 font-inter">Description</h2>
          <p className="text-gray-700 leading-relaxed font-roboto">
            {blogData.desc}
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 font-inter">
            Spécifications techniques
          </h2>

          <div className="bg-gray-100 rounded-xl p-4 font-roboto">
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="font-medium font-inter">Marque</span>
                <span className="font-opensans">
                  {blogData.marque || "Non renseigné"}
                </span>
              </li>

              <li className="flex justify-between">
                <span className="font-medium font-inter">Modèle</span>
                <span className="font-opensans">
                  {blogData.modele || "Non renseigné"}
                </span>
              </li>

              <li className="flex justify-between">
                <span className="font-medium font-inter">Année d’achat</span>
                <span className="font-opensans">
                  {blogData.anneeAchat || "Non renseigné"}
                </span>
              </li>

              <li className="flex justify-between">
                <span className="font-medium font-inter">État</span>
                <span className="font-opensans">{blogData.etat}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <BlackButton className="bg-gray-950 text-white font-inter">
            Contacter le vendeur
          </BlackButton>

          <BlackButton className="bg-white text-black border font-inter">
            Faire une offre
          </BlackButton>
        </div>
      </div>
    </div>
  );
}
