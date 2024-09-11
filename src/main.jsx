import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./index.css";
import CMSCounty from "./pages/CMSCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "details", element: <DetailPage /> },
      { path: "cms-country", element: <CMSCounty /> },
      { path: "*", element: <NotFound /> },
      { path: "sign-in", element: <SignIn />},
      { path: "sign-up", element: <SignUp />},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
