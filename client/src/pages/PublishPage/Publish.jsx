import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { motion } from "motion/react";
import { ImSpinner8 } from "react-icons/im";
import Categories from "./components/Categories";
import Photos from "./components/Photos";
import ProgressBar from "./components/ProgressBar";
import StepsBar from "./components/StepsBar";
import BlackButton from "../../components/Common/BlackButton";
import useStep from "../../components/context/StepContext";
import Desc from "./components/Desc";
import Price from "./components/Price";
import LocalisationEtLivraison from "./components/Localisation";
import { uploadImage } from "../../lib/uploadService";
import { createBlog } from "../../api/blog.api";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../components/context/BlogContext";
import { useState } from "react";

export default function Publish() {
  const {
    formData,
    addCategory,
    selectedCategory,
    setSelectedCategory,
    isStepValid,
    resetForm,
  } = useStep();

  const { addBlogs, blogs } = useBlog();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const back = () => {
    if (selectedCategory > 0) {
      setSelectedCategory(selectedCategory - 1);
    }
  };

  const next = () => {
    if (isStepValid()) addCategory();
  };

  const submitForm = async () => {
    setLoading(true);
    const urlStorage = [];

    for (let i = 0; i < formData.files.length; i++) {
      const url = await uploadImage(formData.files[i]);
      urlStorage.push(url);
      console.log(url);
    }

    const payload = {
      category: formData.category,
      image: urlStorage,
      title: formData.desc.title,
      marque: formData.desc.marque,
      modele: formData.desc.modele,
      desc: formData.desc.desc,
      livraison: formData.livraison,
      ville: formData.ville,
      prixVente: Number(formData.prixVente),
      prixAchat: Number(formData.prixAchat),
      etat: formData.etat,
      anneeAchat: formData.anneeAchat,
    };

    try {
      const response = await createBlog(payload);
      addBlogs(response);
      navigate("/");
      resetForm();
    } catch (error) {
      console.error("Erreur lors de la création ❌:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (selectedCategory) {
      case 0:
        return <Categories key="cat" />;
      case 1:
        return <Photos key="photos" />;
      case 2:
        return <Desc key="desc" />;
      case 3:
        return <Price key="price" />;
      case 4:
        return <LocalisationEtLivraison key="localisation" />;
      default:
        return <Categories key="cat" />;
    }
  };

  return (
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden bg-white">
      {/* Conteneur commun à tout le contenu */}
      <div className="w-full max-w-[880px] mx-auto flex flex-col gap-4 px-4 sm:px-6 flex-1">
        {/* Progress + Steps */}
        <div className="flex flex-col gap-2 w-full">
          <ProgressBar />
          <StepsBar />
        </div>

        {/* Contenu central scrollable sur mobile */}
        <div className="flex-1 lg:overflow-visible overflow-y-auto max-h-[75vh] sm:max-h-[80vh] pb-4">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {renderStep()}
          </motion.div>
        </div>

        {/* Boutons d’action */}
        <div className="flex justify-between items-center sticky bottom-0 bg-white py-3 sm:py-4 w-full z-20">
          <button
            onClick={back}
            className="flex items-center text-black py-2 px-4 rounded-lg border"
          >
            <IoArrowBack className="text-sm mr-3" />
            Précédent
          </button>

          {selectedCategory === 4 ? (
            <BlackButton
              onClick={submitForm}
              disabled={!isStepValid()}
              className={`flex items-center text-white bg-gray-950 ${
                isStepValid()
                  ? "cursor-pointer"
                  : "cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
              }`}
            >
              {loading && (
                <ImSpinner8 className="transition-all animate-spin mr-2" />
              )}{" "}
              Publier mon annonce
            </BlackButton>
          ) : (
            <BlackButton
              onClick={next}
              disabled={!isStepValid()}
              className={`flex items-center text-white bg-gray-950 ${
                isStepValid()
                  ? "cursor-pointer"
                  : "cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
              }`}
            >
              Suivant <IoArrowForward className="text-sm ml-3" />
            </BlackButton>
          )}
        </div>
      </div>
    </div>
  );
}
