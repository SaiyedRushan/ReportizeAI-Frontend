import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Routes.jsx";
import "./styles/global.css"; // Import global CSS
import { RouterProvider } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
