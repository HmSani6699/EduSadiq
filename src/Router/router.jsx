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
import ManageClassRoom from "../Dashboard/Admin/Academic/ManageClassRoom/ManageClassRoom";
import ManageClassRoutine from "../Dashboard/Admin/Academic/ManageClassRoutine/ManageClassRoutine";
import ManageTimeTable from "../Dashboard/Admin/Academic/ManageTimeTable/ManageTimeTable";
import Notice from "../Dashboard/Admin/Notice/Notice";
import Invoice from "../Component/Invoice/Invoice";
import SuperAdminLayout from "../Layout/SuperAdminLayout/SuperAdminLayout";
import SuperAdmin from "../Dashboard/SuperAdmin/SuperAdmin";
import ManageInstitute from "../Dashboard/SuperAdmin/ManageInstitute/ManageInstitute";
import ManageInstituteType from "../Dashboard/SuperAdmin/ManageInstituteType/ManageInstituteType";
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

  // ======= Super Admin <=====//
  {
    path: "/super-admin",
    element: <SuperAdminLayout />,
    children: [
      {
        path: "/super-admin",
        element: <SuperAdmin />,
      },
      {
        path: "institute",
        element: <ManageInstitute />,
      },
      {
        path: "institute-type",
        element: <ManageInstituteType />,
      },
      ,
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

      // ======> Academic <=====//
      {
        path: "section",
        element: <ManageSection />,
      },
      {
        path: "class-room",
        element: <ManageClassRoom />,
      },
      {
        path: "class-routine",
        element: <ManageClassRoutine />,
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
      {
        path: "time-table",
        element: <ManageTimeTable />,
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
      // ======> Notise & Events <=====//
      {
        path: "notise",
        element: <Notice />,
      },
      {
        path: "events",
        element: (
          <div className="flex items-center justify-center">
            <Invoice
              instituteName={"Pakunda Ismamia Madrasa"}
              invoiceNO={122}
              pay={" ৳ 122"}
              invoiceDate={"01/03/2025"}
              dueDate={"01/03/2025"}
            />
          </div>
        ),
      },
    ],
  },
]);

export default router;
