import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { DashBoard, SetQuestion, Result, TestSetting ,Login} from "../pages/import";
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
    path:'/login',
    element:<Login />
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
