import "./App.css";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import { Toaster } from "react-hot-toast";
import { StepProvider } from "./components/context/StepContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BlogProvider } from "./components/context/BlogContext";

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH;
  return (
    <div className="h-screen flex flex-col items-center">
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <BlogProvider>
            <StepProvider>
              <main className="flex flex-col items-center">
                <Outlet />
              </main>
            </StepProvider>
          </BlogProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
      <Toaster
        position="top-center"
        reverseOrder={true}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            color: "black",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(11px)",
            WebkitBackdropFilter: "blur(11px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          },
          // ✅ success
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
