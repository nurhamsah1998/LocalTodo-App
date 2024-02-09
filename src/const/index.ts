import moment from "moment";
import { DIFFICULTY_STATUS_KANBAN } from "../interface";

export const WIDTH_BUTTON_DRAG_CARD = 30;
export const MIN_WIDTH_CONTAINER_CARD = 250;
export const difficultyStatusKanban: DIFFICULTY_STATUS_KANBAN[] = [
  {
    name: "much_easy",
    label: "Much Easy",
    bg: "green.700",
    color: "#fff",
  },
  {
    name: "easy",
    label: "Easy",
    bg: "cyan.700",
    color: "#fff",
  },
  {
    name: "medium",
    label: "Normal",
    bg: "primary.main",
    color: "#fff",
  },
  {
    name: "hard",
    label: "Hard",
    bg: "error.main",
    color: "#fff",
  },
  {
    name: "complex",
    label: "Complex",
    bg: "purple.700",
    color: "#fff",
  },
];
export const priorityStatusKanban: DIFFICULTY_STATUS_KANBAN[] = [
  {
    name: "enjoy",
    label: "Enjoy",
    bg: "green.700",
    color: "#fff",
  },
  {
    name: "asp",
    label: "ASP",
    bg: "red.700",
    color: "#fff",
  },
  {
    name: "urgent",
    label: "Urgent",
    bg: "error.main",
    color: "#fff",
  },
];

export const initialValueLocalTodo = {
  ["To Do"]: [
    JSON.stringify({
      label: "Be the Best",
      desc: "Horray! this is first todo example, now you can create more todo. Hope you can enjoy this services Thank You and good luck !",
      createdAt: moment().format("DD MMM YYYY"),
      difficulty: "easy",
      emotion: "normal",
      priority: "",
    }),
  ],
  ["On Progress"]: [],
  ["Done"]: [],
  ["Pending"]: [],
  ["Cancel"]: [],
};
