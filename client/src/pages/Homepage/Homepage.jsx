import Filter from "../../components/Filters/Filter";
import Filterbar from "../../components/Filters/Filterbar";
import FilterButton from "../../components/Filters/Filterbutton";
import { GiSettingsKnobs } from "react-icons/gi";
import { useState } from "react";
import Header from "../../components/Header";
import BlogCard from "../Blogs/BlogCard";
import { useBlog } from "../../components/context/BlogContext";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [filter, setFilter] = useState(false);
  const activeFilter = () => {
    setFilter(!filter);
  };
  const { blogs } = useBlog();

  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 w-full mt-5">
        <h1 className="font-roboto font-normal text-2xl text-center">
          Le marketplace des composants informatiques
        </h1>
        <h2 className="font-inter font-[300] text-sm text-center text-gray-500">
          Achetez et vendez vos composants PC d'occasion en toute sécurité
        </h2>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <Filterbar />
        <span className="text-sm font-medium">
          <FilterButton icon={GiSettingsKnobs} onClick={activeFilter}>
            Filtrer
          </FilterButton>
        </span>
        {filter && <Filter />}
      </div>
      <div className="w-full mt-11">
        <h3 className="text-left text-sm mb-6">Catégories populaires</h3>
        <hr className="border-gray-300 my-4 border-1 w-full" />
      </div>
      <div className="w-full mt-4">
        <h4 className="text-left text-sm mb-6">Dernières annonces</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </>
  );
}
