import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

export default function BlogCard({ blog }) {
  return (
    <div className="group bg-white rounded-xl shadow hover:shadow-xl transition p-0 overflow-hidden cursor-pointer border">
      <div className="relative w-full h-56 overflow-hidden z-0">
        <img
          src={blog.image?.[0]}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full inline-block mb-2">
          {blog.category}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{blog.desc}</p>

        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-lg text-gray-900">
            {blog.prixVente}€
          </span>

          <div className="flex items-center text-sm text-gray-500">
            <FaMapMarkerAlt className="mr-1 text-gray-400" />
            <span>{blog.ville}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <span className="font-medium"></span>
          </div>

          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar size={12} />
            <span>{blog.rating || "4.8"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
