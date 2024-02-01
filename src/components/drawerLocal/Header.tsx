import { Box } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box
      sx={{
        bg: "red.500",
        minHeight: "50px",
        position: "sticky",
        top: 0,
        zIndex: 99,
      }}
    >
      Header
    </Box>
  );
}

export default Header;
