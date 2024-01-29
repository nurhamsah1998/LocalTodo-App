import { useRoutes } from "react-router-dom";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/notFound/NotFound";
import DrawerApp from "@/components/DrawerApp";
import Task from "@/pages/Task/Task";
import Repo from "@/pages/repo/Repo";
import DrawerTask from "@/components/DrawerTask";
import OverView from "@/pages/Task/overview/OverView";
// import OverViewLocal from "@/pages/Local/overviewLocal/OverViewLocal";
import Auth from "@/pages/auth/Auth";
import CreateDB from "@/pages/Local/createDB/CreateDB";
import DrawerLocal from "@/components/DrawerLocal";
import DashboardLocal from "@/pages/Local/dashboardLocal/DashboardLocal";
import RepoLocal from "@/pages/Local/repoLocal/RepoLocal";

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
      element: <DrawerLocal />,
      children: [
        {
          path: "dashboard",
          element: <DashboardLocal />,
        },
        {
          path: "repo",
          element: <RepoLocal />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/create-db",
      element: <CreateDB />,
    },
  ]);
}

export default Router;
