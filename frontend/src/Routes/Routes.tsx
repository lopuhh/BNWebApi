import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import DepartmentsPage from "../Pages/DepartmentPage/DepartmentPage";
import WorkerPage from "../Pages/WorkerPage/WorkerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {
        path: "department",
        element: (
          <ProtectedRoute>
            <DepartmentsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "worker/:departmentId",
        element: (
          <ProtectedRoute>
            <WorkerPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
