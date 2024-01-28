import { Canvas } from "@/components/Canvas";
import { Typography } from "@/components/Typography";
import { Box, Container, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const nav = useNavigate();
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
            onClick={() => nav("/create-db")}
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
