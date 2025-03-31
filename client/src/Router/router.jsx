import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { DashBoard, SetQuestion, Result, TestSetting } from "../pages/import";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/test/:id/edit",
    element: <SetQuestion />,
  },
  {
    path: "/test/:id/setting",
    element: <TestSetting />,
  },
  {
    path: "/test/:id/result",
    element: <Result />
  },
]);
export default router;
