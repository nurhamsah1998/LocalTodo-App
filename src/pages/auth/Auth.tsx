/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas } from "@/components/Canvas";
import { Typography } from "@/components/Typography";
import { Box, Button, Container, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { useEncript } from "src/hooks/useEncript";
import { AuthContext } from "src/store/store";
import { v4 as uuidv4 } from "uuid";

function Auth() {
  const { isAuth, mode, _signIn } = React.useContext<any>(AuthContext);
  const nav: NavigateFunction = useNavigate();
  const { data } = useEncript("repo", "array");
  const handleClickOfflineMode = () => {
    if (!data) {
      nav("/create-db");
      return;
    }
    _signIn({
      mode: "local",
      keyToken: uuidv4(),
    });
    nav("/local/dashboard");
  };
  React.useEffect(() => {
    if (isAuth) {
      if (mode === "local") {
        nav("/local/dashboard");
        return;
      }
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
      <Container
        width={[
          "80%", // 0-30em
          "80%", // 30em-48em
          "45%", // 48em-62em
          "45%", // 62em+
        ]}
        sx={{
          px: 6,
          py: 5,
          bg: "#fff",
          borderRadius: styledPropTheme.borderRadius,
        }}
      >
        <Flex sx={{ alignItems: "start", gap: 2, mb: 5 }}>
          <Typography
            variantText="2xl"
            sx={{ fontWeight: 800, lineHeight: 7, color: "gray.800" }}
          >
            ToDo
          </Typography>
          <Typography
            variantText="xs"
            sx={{
              fontWeight: 600,
              py: 0.5,
              px: 2,
              bg: "gray.800",
              color: "#fff",
              display: "inline",
              borderRadius: styledPropTheme.borderRadius,
            }}
          >
            Local Mode
          </Typography>
        </Flex>
        <VStack>
          <Button isDisabled sx={{ width: "100%" }}>
            Login
          </Button>
          <Button isDisabled sx={{ width: "100%" }} variant="outline">
            Register
          </Button>
        </VStack>
        <Flex
          sx={{
            alignItems: "center",
            gap: 3,
            mt: 3,
          }}
        >
          <Box sx={{ width: "100%", bg: "gray.200", height: 0.5 }} />
          <Typography>or</Typography>
          <Box sx={{ width: "100%", bg: "gray.200", height: 0.5 }} />
        </Flex>
        <Flex sx={{ width: "100%", justifyContent: "center", mt: 3 }}>
          <Button
            onClick={handleClickOfflineMode}
            sx={{
              width: "100%",
              bg: "orange.500",
              p: 3,
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography variantText="md">Local Mode</Typography>
          </Button>
        </Flex>
      </Container>
    </Canvas>
  );
}

export default Auth;
