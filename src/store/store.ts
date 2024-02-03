import { atom } from "jotai";
import { createContext } from "react";
import { AUTH, FORM_INPUT_CREATE_REPO_LOCAL } from "src/interface";

const AuthContext = createContext<AUTH>({
  keyToken: null,
  isAuth: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userData: {},
  mode: "",
});
/// JOTAI
const localSelectedRepo = atom<FORM_INPUT_CREATE_REPO_LOCAL>({
  repo: "",
  colorTheme: { bg: "", color: "", label: "" },
});
export { AuthContext, localSelectedRepo };
