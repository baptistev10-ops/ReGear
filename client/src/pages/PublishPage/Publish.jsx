import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { motion } from "motion/react";

import Categories from "./components/Categories";
import Photos from "./components/Photos";
import ProgressBar from "./components/ProgressBar";
import StepsBar from "./components/StepsBar";
import BlackButton from "../../components/Common/BlackButton";
import useStep from "../../components/context/StepContext";
import Desc from "./components/Desc";
import Price from "./components/Price";
import Final from "./components/Localisation";
import LocalisationEtLivraison from "./components/Localisation";
import { uploadImage } from "../../lib/uploadService";
import { createBlog } from "../../api/blog.api";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../components/context/BlogContext";

export default function Publish() {
  const {
    formData,
    addCategory,
    selectedCategory,
    setSelectedCategory,
    isStepValid,
    resetForm,
  } = useStep();

  const { addBlogs } = useBlog();

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
    <div className="flex flex-col gap-3 w-[100%]">
      <ProgressBar />
      <StepsBar />

      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderStep()}
      </motion.div>

      <div className="flex justify-between">
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
            className={`flex items-center ${
              isStepValid()
                ? "cursor-pointer"
                : "cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            }`}
          >
            Publier mon annonce
          </BlackButton>
        ) : (
          <BlackButton
            onClick={next}
            disabled={!isStepValid()}
            className={`flex items-center ${
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
  );
}
