import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Vendre from "./pages/Vendre";
import Annonces from "./pages/Annonces";
import Errorpage from "./pages/Error/Errorpage";
import AuthPage from "./pages/Login/AuthPage";
import { rootLoader } from "./loaders/rootLoaders";
import Publish from "./pages/PublishPage/Publish";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import BlogDetails from "./pages/Blogs/BlogDetails";
import Profile from "./pages/Profile/Profile";
import MentionsLegales from "./pages/MentionsLegales";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/vendre",
        element: (
          <UserConnected>
            <Vendre />
          </UserConnected>
        ),
      },
      {
        path: "/annonces",
        element: (
          <UserConnected>
            <Annonces />
          </UserConnected>
        ),
      },
      {
        path: "/login",
        element: <AuthPage />,
      },
      {
        path: "/publish",
        element: (
          <UserConnected>
            <Publish />
          </UserConnected>
        ),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/profile/:id",
        element: (
          <UserConnected>
            <Profile />
          </UserConnected>
        ),
      },
      {
        path: "/mentions-legales",
        element: <MentionsLegales />,
      },
    ],
  },
]);

export default router;
