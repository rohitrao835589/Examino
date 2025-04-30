import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  DashBoard,
  SetQuestion,
  Result,
  TestSetting,
  Login,
  LandingTest
} from "../pages/import";
import { AuthProvider } from "../context/AuthProvider";
import RequireAuth from "./RequireAuth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/dashboard",
    element: (
      <AuthProvider>
        <RequireAuth>
          <DashBoard />
        </RequireAuth>
      </AuthProvider>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/test/:id/edit",
    element: (
      <AuthProvider>
        <RequireAuth>
          <SetQuestion />
        </RequireAuth>
      </AuthProvider>
    ),
  },
  {
    path: "/test/:id/setting",
    element: (
      <AuthProvider>
        <RequireAuth>
          <TestSetting />
        </RequireAuth>
      </AuthProvider>
    ),
  },
  {
    path: "/test/:id/result",
    element: (
      <AuthProvider>
        <RequireAuth>
          <Result />
        </RequireAuth>
      </AuthProvider>
    ),
  },
  {
    path:"/test/:id",
    element:<LandingTest></LandingTest>
  },
]);
export default router;
