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
import ManageSection from "../Dashboard/Admin/ManageSection/ManageSection";
import ManageClass from "../Dashboard/Admin/ManageClass/ManageClass";
import ManageSubject from "../Dashboard/Admin/ManageSubject/ManageSubject";
import ManageClassGroup from "../Dashboard/Admin/ManageClassGroup/ManageClassGroup";
import Staff from "../Dashboard/Admin/Staff/Staff";
import FeesCollectedType from "../Dashboard/Admin/ManageFinance/FeesCollectedType/FeesCollectedType";
import FeesCollected from "../Dashboard/Admin/ManageFinance/FeesCollected/FeesCollected";
import ManageDonation from "../Dashboard/Admin/ManageDonation/ManageDonation";
import ManageExamType from "../Dashboard/Admin/Exam/ManageExamType/ManageExamType";
import ManageExamSchedule from "../Dashboard/Admin/Exam/ManageExamSchedule/ManageExamSchedule";
import ManageExamAttendance from "../Dashboard/Admin/Exam/ManageExamAttendance/ManageExamAttendance";
import ManageExamResult from "../Dashboard/Admin/Exam/ManageExamResult/ManageExamResult";
import ManageExamGrade from "../Dashboard/Admin/Exam/ManageExamGrade/ManageExamGrade";
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

      // =====> Staff Admission <=====//
      {
        path: "staff_admission",
        element: <Staff />,
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

      // ======> Class <=====//
      {
        path: "section",
        element: <ManageSection />,
      },
      {
        path: "class",
        element: <ManageClass />,
      },
      {
        path: "subject",
        element: <ManageSubject />,
      },
      {
        path: "class_group",
        element: <ManageClassGroup />,
      },

      // ======> Finance <=====//
      {
        path: "fees_collect_type",
        element: <FeesCollectedType />,
      },
      {
        path: "fees_collect",
        element: <FeesCollected />,
      },
      {
        path: "donation",
        element: <ManageDonation />,
      },

      // =====> Exam <=====//
      {
        path: "exam_type",
        element: <ManageExamType />,
      },
      {
        path: "exam_schedule",
        element: <ManageExamSchedule />,
      },
      {
        path: "exam_attendance",
        element: <ManageExamAttendance />,
      },
      {
        path: "exam_result",
        element: <ManageExamResult />,
      },
      {
        path: "exam_grade",
        element: <ManageExamGrade />,
      },
    ],
  },
]);

export default router;
