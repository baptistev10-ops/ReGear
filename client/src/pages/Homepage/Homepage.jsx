import Filter from "../../components/Filters/Filter";
import Filterbar from "../../components/Filters/Filterbar";
import FilterButton from "../../components/Filters/Filterbutton";
import { GiSettingsKnobs } from "react-icons/gi";
import { useState } from "react";
import Header from "../../components/Header";
import BlogCard from "../Blogs/BlogCard";
import { useBlog } from "../../components/context/BlogContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { AnimatePresence, motion } from "motion/react";

export default function Homepage() {
  const [filter, setFilter] = useState(false);
  const activeFilter = () => {
    setFilter(!filter);
  };
  const { blogs } = useBlog();

  return (
    <>
      <Header />

      <div className="flex flex-col gap-2 w-full mt-5 text-center">
        <h1 className="font-inter font-semibold text-2xl">
          Le marketplace des composants informatiques
        </h1>

        <h2 className="font-roboto font-light text-sm text-gray-500">
          Achetez et vendez vos composants PC d'occasion en toute sécurité
        </h2>
      </div>

      <div className="flex flex-col justify-center gap-4 font-roboto">
        <Filterbar />
        <span className="text-sm font-medium font-opensans">
          <FilterButton icon={GiSettingsKnobs} onClick={activeFilter}>
            Filtrer
          </FilterButton>
        </span>
        <AnimatePresence>
          {filter && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.95,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                type: "spring",
                stiffness: 260,
                damping: 18,
                mass: 0.6,
              }}
            >
              <Filter />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full mt-11 lg:px-5">
        <h3 className="text-left text-sm mb-6 font-opensans">
          Catégories populaires
        </h3>
        <hr className="border-gray-300 my-4 border-1 w-full" />
      </div>

      <div className="w-full mt-4 lg:px-5">
        <h4 className="text-left text-sm mb-6 font-opensans">
          Dernières annonces
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:px-5 font-roboto">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <Footer />
    </>
  );
}
