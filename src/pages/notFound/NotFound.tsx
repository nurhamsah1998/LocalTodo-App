import { Canvas } from "@/components/Canvas";
import { Typography } from "@/components/Typography";
import { Box, Button, Flex } from "@chakra-ui/react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ServerDown from "src/assets/svg/ServerDown";
import styles from "./notFound.module.css";

function NotFound() {
  const nav: NavigateFunction = useNavigate();
  return (
    <Canvas
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={styles.Container}
    >
      <Box sx={{ textAlign: "center", px: 3 }}>
        <Flex sx={{ justifyContent: "center" }}>
          <ServerDown size={250} />
        </Flex>
        <Typography
          sx={{ mt: -3, fontWeight: 700, color: "gray.600" }}
          variantText="2xl"
        >
          Upss... ,Page Not Found
        </Typography>
        <Typography sx={{ mt: -1.5, color: "gray.600" }} variantText="sm">
          Check the URL address you are going to.
        </Typography>
        <Button onClick={() => nav("/")} sx={{ mt: 2 }}>
          Home
        </Button>
      </Box>
    </Canvas>
  );
}

export default NotFound;
