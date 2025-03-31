import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { DashBoard, SetQuestion, Result } from "../pages/import";
import PreviewQuestion from "../pages/result/PreviewQuestion";
import TestSetting from "../pages/result/TestSetting";
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
    path: "/test/:id/result",
    element: <Result />
  },
]);
export default router;
