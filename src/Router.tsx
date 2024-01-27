import { useRoutes } from "react-router-dom";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/notFound/NotFound";
import DrawerApp from "@/components/DrawerApp";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DrawerApp />,
      children: [
        {
          index: true,
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}

export default Router;
