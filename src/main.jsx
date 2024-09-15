import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import CMSCountries from "./pages/CMSCountries";
import CMSAwards from "./pages/CMSAwards";
import CMSGenres from "./pages/CMSGenres";
import CMSActors from "./pages/CMSActors";
import CMSComments from "./pages/CMSComments";
import CMSUsers from "./pages/CMSUsers";
import CMSShows from "./pages/CMSShows";
import CMSInputShow from "./pages/CMSInputShow";


import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "details", element: <DetailPage /> },
      { path: "cms-countries", element: <CMSCountries /> },
      { path: "cms-awards", element: <CMSAwards /> },
      { path: "cms-genres", element: <CMSGenres /> },
      { path: "cms-actors", element: <CMSActors /> },
      { path: "cms-comments", element: <CMSComments /> },
      { path: "cms-users", element: <CMSUsers /> },
      { path: "cms-shows", element: <CMSShows /> },
      { path: "cms-show-input", element: <CMSInputShow /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
