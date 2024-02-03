import { Canvas } from "@/components/Canvas";
import { Typography } from "@/components/Typography";
import { Box, Button } from "@chakra-ui/react";
import { NavigateFunction, useNavigate } from "react-router-dom";

function NotFound() {
  const nav: NavigateFunction = useNavigate();
  return (
    <Canvas
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variantText="2xl">
          Upss... Error 404, Page Not Found
        </Typography>
        <Button onClick={() => nav("/")} sx={{ mt: 3 }}>
          Home
        </Button>
      </Box>
    </Canvas>
  );
}

export default NotFound;
