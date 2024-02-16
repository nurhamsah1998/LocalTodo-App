/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { AuthContext } from "src/store/store";
import { AUTH, SIGNIN } from "src/interface";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function RootAuthProvider({ children }: { children: React.ReactNode }) {
  const cookie = new Cookies();
  const [keyToken, setKeyToken] = React.useState<string | null | undefined>(
    cookie.get("@token") || null
  );
  const [mode, setMode] = React.useState<string | undefined>(
    cookie.get("@mode") || ""
  );
  const nav = useNavigate();
  const initialAuthValue: AUTH = React.useMemo(() => {
    return {
      isAuth: Boolean(keyToken) || false,
      mode,
    };
  }, [keyToken, mode]);
  const _signIn = React.useCallback((props: SIGNIN) => {
    cookie.set("@token", props.keyToken, { path: "/" });
    cookie.set("@mode", props.mode, { path: "/" });
    setKeyToken(props.keyToken);
    setMode(props.mode);
  }, []);
  const _signOut = React.useCallback(() => {
    setKeyToken(null);
    setMode("");
    cookie.remove("@token", { path: "/" });
    cookie.remove("@mode", { path: "/" });
  }, []);

  React.useEffect(() => {
    if (!initialAuthValue.isAuth) nav("/auth");
    return;
  }, [keyToken, mode]);
  return (
    <AuthContext.Provider value={{ ...initialAuthValue, _signIn, _signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default RootAuthProvider;
