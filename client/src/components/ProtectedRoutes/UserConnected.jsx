import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
export default function UserConnected({ children }) {
  const { userConnected } = useAuth();
  return userConnected ? children : <Navigate to="/login" />;
}
