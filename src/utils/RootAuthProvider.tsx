/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { AuthContext } from "src/store/store";
import { AUTH, SIGNIN } from "src/interface";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
// import Footer from "@/components/Footer";

function RootAuthProvider({ children }: { children: React.ReactNode }) {
  const cookie = new Cookies();
  const [keyToken, setKeyToken] = React.useState<string | null | undefined>(
    cookie.get("@token") || null
  );
  const [userData, setUserData] = React.useState({});
  const [mode, setMode] = React.useState<string | undefined>(
    cookie.get("@mode") || ""
  );
  const nav = useNavigate();
  const initialAuthValue: AUTH = React.useMemo(() => {
    return {
      keyToken,
      isAuth: Boolean(keyToken) || false,
      userData,
      mode,
    };
  }, [keyToken, mode, userData]);
  const _signIn = React.useCallback((props: SIGNIN) => {
    setKeyToken(props.keyToken);
    setUserData(props.userData);
    setMode(props.mode);
  }, []);
  const _signOut = React.useCallback(() => {
    setKeyToken(null);
    setUserData({});
    setMode("");
    cookie.remove("@token", { path: "/" });
    cookie.remove("@mode", { path: "/" });
  }, []);

  React.useEffect(() => {
    if (!initialAuthValue.isAuth) nav("/auth");
    return;
  }, [keyToken, userData, mode]);
  return (
    <AuthContext.Provider value={{ ...initialAuthValue, _signIn, _signOut }}>
      {children}
      {/* <Footer /> */}
    </AuthContext.Provider>
  );
}

export default RootAuthProvider;
