import moment from "moment";

export const WIDTH_BUTTON_DRAG_CARD = 30;
export const MIN_WIDTH_CONTAINER_CARD = 250;
export const difficultyStatusKanban = [
  {
    name: "complex",
    label: "Complex",
    bg: "purple.700",
    color: "purple.200",
  },
  {
    name: "medium",
    label: "Normal",
    bg: "blue.700",
    color: "blue.200",
  },
  {
    name: "easy",
    label: "Easy",
    bg: "cyan.700",
    color: "cyan.200",
  },
  {
    name: "much_easy",
    label: "Much Easy",
    bg: "green.700",
    color: "green.200",
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
