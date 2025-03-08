import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import Dashboard from "../Dashboard/Admin/Dashboard";
import Teacher from "../Dashboard/Admin/Teacher/Teacher";
import StudentAdmissionList from "../Dashboard/Admin/Student/StudentAdmissionList";
import StudentPromotion from "../Dashboard/Admin/Student/StudentPromotion";
import Student from "../Dashboard/Admin/Student/Student";
import TeacherAddClass from "../Dashboard/Admin/Teacher/TeacherAddClass/TeacherAddClass";
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

      // =====> Teacher Admission <=====//
      {
        path: "teacher_admission",
        element: <Teacher />,
      },
      {
        path: "teacher_add_class",
        element: <TeacherAddClass />,
      },

      // =====> Studetn Admission <=====//
      {
        path: "student_admission",
        element: <Student />,
      },
      {
        path: "student_promotion",
        element: <StudentPromotion />,
      },
    ],
  },
]);

export default router;
