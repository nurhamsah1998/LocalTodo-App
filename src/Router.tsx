import { Suspense, lazy } from "react";

import { Navigate, Outlet, useRoutes } from "react-router-dom";
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
import DrawerLocal from "src/layout/drawerLocal/DrawerLocal";
import DrawerLocalTask from "src/layout/drawerLocalTask/DrawerLocalTask";
import LoadingScreen from "@/components/LoadingScreen";
export const DashboardLocal = lazy(
  () => import("@/pages/Local/dashboardLocal/DashboardLocal")
);
export const RepoLocal = lazy(
  () => import("@/pages/Local/repoLocal/RepoLocal")
);
export const OverViewLocal = lazy(
  () => import("@/pages/Local/overviewLocal/OverViewLocal")
);
export const TodoLocal = lazy(
  () => import("@/pages/Local/todoLocal/TodoLocal")
);
export const Setting = lazy(() => import("@/pages/Local/setting/Setting"));

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
      element: (
        <DrawerLocal>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DrawerLocal>
      ),
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
      path: "/local-task",
      element: (
        <DrawerLocalTask>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DrawerLocalTask>
      ),
      children: [
        {
          path: "overview/:id",
          element: <OverViewLocal />,
        },
        {
          path: "todo/:id",
          element: <TodoLocal />,
        },
        {
          path: "setting/:id",
          element: <Setting />,
        },
      ],
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
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
