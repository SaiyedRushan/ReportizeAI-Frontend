import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing";
import Dashboard from "@/pages/Dashboard";
import RootLayout from "@/layouts/root-layout";
import DashboardLayout from "@/layouts/dashboard-layout";
import Classes from "@/pages/Classes";
import { Class } from "@/pages/Class";
import { ReportCard } from "@/pages/ReportCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/solutions",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        element: <DashboardLayout />,
        path: "/dashboard",
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/class",
            element: <Classes />,
          },
          {
            path: "/dashboard/class/:id",
            element: <Class />,
          },
          {
            path: "/dashboard/class/:id/:studentId/report",
            element: <ReportCard />,
          },
        ],
      },
    ],
  },
]);
