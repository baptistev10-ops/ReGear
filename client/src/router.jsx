import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Vendre from "./pages/Vendre";
import Annonces from "./pages/Annonces";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Errorpage from "./pages/Error/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/vendre",
        element: <Vendre />,
      },
      {
        path: "/annonces",
        element: <Annonces />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
