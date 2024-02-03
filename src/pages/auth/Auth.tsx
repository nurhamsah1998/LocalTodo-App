import { Canvas } from "@/components/Canvas";
import { Typography } from "@/components/Typography";
import { Box, Button, Container, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { AuthContext } from "src/store/store";

function Auth() {
  const { isAuth, mode } = React.useContext(AuthContext);
  const nav: NavigateFunction = useNavigate();
  const handleClickOfflineMode = () => {
    nav("/create-db");
  };
  React.useEffect(() => {
    if (isAuth) {
      if (mode === "local") return nav("/local/dashboard");
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
        <Box sx={{ width: "fit-content", mb: 10 }}>
          <Typography
            variantText="3xl"
            sx={{ fontWeight: 700, color: "gray.600" }}
          >
            TODO APPS
          </Typography>
          <Typography variantText="sm" sx={{ mt: -3, color: "gray.600" }}>
            by nurhamsah
          </Typography>
        </Box>
        <VStack>
          <Button sx={{ width: "100%" }}>Login</Button>
          <Button sx={{ width: "100%" }} variant="outline">
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
