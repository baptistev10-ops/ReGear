import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${blog._id}`)}
      className="group bg-white rounded-xl shadow hover:shadow-xl transition p-0 overflow-hidden cursor-pointer border font-roboto"
    >
      <div className="relative w-full h-56 overflow-hidden z-0">
        <img
          src={blog.image?.[0]}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full inline-block mb-2 font-opensans">
          {blog.category}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1 font-inter">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2 mb-3 font-roboto">
          {blog.desc}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-lg text-gray-900 font-inter">
            {blog.prixVente}€
          </span>

          <div className="flex items-center text-sm text-gray-500 font-opensans">
            <FaMapMarkerAlt className="mr-1 text-gray-400" />
            <span>{blog.ville}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center font-opensans">
            <span className="font-medium">{blog.author?.username || null}</span>
          </div>

          <div className="flex items-center gap-1 text-yellow-500 font-opensans">
            <FaStar size={12} />
            <span>{blog.rating || "4.8"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
