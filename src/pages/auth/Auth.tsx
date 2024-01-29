import { Canvas } from "@/components/Canvas";
import { Typography } from "@/components/Typography";
import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/store/store";
import Cookies from "universal-cookie";

function Auth() {
  const cookie = new Cookies();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isAuth, _signIn, mode } = React.useContext(AuthContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,
  const nav = useNavigate();
  const handleClickOfflineMode = () => {
    cookie.set("@token", "offline-mode-mamamia", { path: "/" });
    cookie.set("@mode", "offline", { path: "/" });
    _signIn({
      mode: "offline",
      keyToken: "offline-mode-mamamia",
    });
    nav("/create-db");
  };
  React.useEffect(() => {
    if (isAuth) {
      if (mode === "offline") return nav("/local/dashboard");
      nav("/");
    }
  }, [isAuth]);
  return (
    <Canvas
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container width="100%">
        <Flex sx={{ width: "100%", justifyContent: "center" }}>
          <Flex
            sx={{
              width: "40%",
              bg: "#fff",
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                bg: "red.300",
                p: 3,
                cursor: "pointer",
              }}
            >
              <Typography variantText="2xl">Login</Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                bg: "green.300",
                p: 3,
                cursor: "pointer",
              }}
            >
              <Typography variantText="2xl">Register</Typography>
            </Box>
          </Flex>
        </Flex>
        <Flex sx={{ width: "100%", justifyContent: "center", mt: 3 }}>
          <Flex
            onClick={handleClickOfflineMode}
            sx={{
              width: "40%",
              bg: "#fff",
              p: 3,
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography variantText="2xl">Offline Mode</Typography>
          </Flex>
        </Flex>
      </Container>
    </Canvas>
  );
}

export default Auth;
