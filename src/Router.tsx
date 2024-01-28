import { useRoutes } from "react-router-dom";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/notFound/NotFound";
import DrawerApp from "@/components/DrawerApp";
import Task from "@/pages/Task/Task";
import Repo from "@/pages/repo/Repo";
import DrawerTask from "@/components/DrawerTask";
import OverView from "@/pages/Task/overview/OverView";
import Auth from "@/pages/auth/Auth";
import CreateDB from "@/pages/Local/createDB/CreateDB";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DrawerApp />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/repo",
          element: <Repo />,
        },
      ],
    },
    {
      path: "/task",
      element: <DrawerTask />,
      children: [
        {
          path: "overview/:id",
          element: <OverView />,
        },
        {
          path: "todo/:id",
          element: <Task />,
        },
      ],
    },
    {
      path: "/local",
      element: <DrawerTask />,
      children: [{}],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/login",
      element: <Auth />,
    },
    {
      path: "/create-db",
      element: <CreateDB />,
    },
  ]);
}

export default Router;
