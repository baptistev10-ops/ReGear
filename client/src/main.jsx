import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router}
      // ⚙️ >>> AJOUTE CETTE LIGNE POUR FIX IOS + WARNING
      future={{ v7_startTransition: true }}
      hydrationFallbackElement={
        <div className="h-screen w-screen flex flex-col items-center justify-center text-gray-600 bg-white">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin mb-3"></div>
          <p className="text-sm font-medium">Chargement de ReGear...</p>
        </div>
      }
    />
  </StrictMode>
);
