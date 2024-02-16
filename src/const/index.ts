import moment from "moment";
import { DIFFICULTY_STATUS_KANBAN, MEDSOS_LIST } from "../interface";
import { v4 as uuidv4 } from "uuid";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoInstagram,
  IoGlobeOutline,
  IoLogoGitlab,
  IoMailOutline,
} from "react-icons/io5";

export const WIDTH_BUTTON_DRAG_CARD = 30;
export const MIN_WIDTH_CONTAINER_CARD_LG = 360;
export const MIN_WIDTH_CONTAINER_CARD_MD = 260;
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
    name: "asap",
    label: "ASAP",
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
export const medsos: MEDSOS_LIST[] = [
  {
    icon: IoLogoLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/nur-hamsah-kd1998",
    colorTheme: "blue.500",
  },
  {
    icon: IoLogoFacebook,
    label: "Facebook",
    link: "https://web.facebook.com/nur.hamsah.948",
    colorTheme: "cyan.500",
  },
  {
    icon: IoLogoWhatsapp,
    label: "Whatsapp",
    link: "https://wa.me/081213221343",
    colorTheme: "green.500",
  },
  {
    icon: IoLogoGithub,
    label: "Github",
    link: "https://github.com/nurhamsah1998",
    colorTheme: "gray.900",
  },
  {
    icon: IoLogoInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/nurhamsah_tech/",
    colorTheme: "pink.500",
  },
  {
    icon: IoGlobeOutline,
    label: "Website",
    link: "https://nurhamsah.vercel.app/",
    colorTheme: "gray.500",
  },
  {
    icon: IoLogoGitlab,
    label: "Gitlab",
    link: "https://gitlab.com/nurhamsah1998",
    colorTheme: "orange.500",
  },
  {
    icon: IoMailOutline,
    label: "Email",
    link: "mailto:nur.hamsah.cash@gmail.com",
    colorTheme: "red.500",
  },
];
export const initialValueLocalTodo = {
  ["To Do"]: [
    JSON.stringify({
      card_id: uuidv4(),
      label: "Be the Best",
      desc: "Horray! this is first todo example, now you can create more todo. Hope you can enjoy this services Thank You and good luck !",
      createdAt: moment().format("DD MMM YYYY"),
      updatedAt: moment().format("DD MMM YYYY"),
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
