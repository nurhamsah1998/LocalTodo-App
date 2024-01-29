import { createContext } from "react";
import { AUTH } from "src/interface";

const AuthContext = createContext<AUTH>({
  keyToken: null,
  isAuth: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userData: {},
  mode: "",
});

export { AuthContext };
