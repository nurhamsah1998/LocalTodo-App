import {
  IoStatsChartSharp,
  IoNewspaper,
  IoFileTrayStacked,
  IoBuild,
} from "react-icons/io5";
import { SIDE_BAR_MENU } from "../interface";

export const sideBarMenu: SIDE_BAR_MENU[] = [
  {
    icon: IoStatsChartSharp,
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    icon: IoNewspaper,
    path: "/repo",
    label: "Repo",
  },
];
export const sideBarTaskMenu: SIDE_BAR_MENU[] = [
  {
    icon: IoStatsChartSharp,
    path: "/task/overview",
    label: "Overview",
  },
  {
    icon: IoNewspaper,
    path: "/task/todo", /// PENAMAAN PENGGANTI TAS TASK
    label: "To Do",
  },
];
export const sideBarLocalMenu: SIDE_BAR_MENU[] = [
  {
    icon: IoStatsChartSharp,
    path: "/local/dashboard",
    label: "Dashboard",
  },
  {
    icon: IoFileTrayStacked,
    path: "/local/repo",
    label: "Repo",
  },
];
export const sideBarLocalTaskMenu: SIDE_BAR_MENU[] = [
  {
    icon: IoStatsChartSharp,
    path: "/local-task/overview",
    label: "Overview",
  },
  {
    icon: IoNewspaper,
    path: "/local-task/todo", /// PENAMAAN PENGGANTI TAS TASK
    label: "To Do",
  },
  {
    icon: IoBuild,
    path: "/local-task/setting", /// PENAMAAN PENGGANTI TAS TASK
    label: "Setting",
  },
];
