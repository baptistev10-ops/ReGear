import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Vendre from "./pages/Vendre";
import Annonces from "./pages/Annonces";
import Errorpage from "./pages/Error/Errorpage";
import AuthPage from "./pages/Login/AuthPage";
import { rootLoader } from "./loaders/rootLoaders";
import Publish from "./pages/PublishPage/Publish";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
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
        element: <AuthPage />,
      },
      {
        path: "/publish",
        element: <Publish />,
      },
    ],
  },
]);
