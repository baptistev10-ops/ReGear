import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./components/context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-screen flex flex-col items-center">
      <AuthProvider>
        <main className="flex flex-col items-center w-[80vw]">
          <Outlet />
        </main>
      </AuthProvider>
      <Toaster />
    </div>
  );
}

export default App;
