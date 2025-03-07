import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import Dashboard from "../Dashboard/Admin/Dashboard";
import StudentAdmission from "../Dashboard/Admin/StudentAdmission/StudentAdmission";
import StudentPromotion from "../Dashboard/Admin/StudentAdmission/StudentPromotion";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  // =======> Admin Route <=====//
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: "profile",
      //   element: <div>On going amdin Profile ......!</div>,
      // },
      // =====> Studetn Admission <=====//
      {
        path: "student_admission",
        element: <StudentAdmission />,
      },
      {
        path: "student_promotion",
        element: <StudentPromotion />,
      },
    ],
  },
]);

export default router;
