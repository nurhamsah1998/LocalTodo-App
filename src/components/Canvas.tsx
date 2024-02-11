import { Box } from "@chakra-ui/react";
import React from "react";
import { CANVAS } from "../interface";

export const Canvas: React.FunctionComponent<CANVAS> & {
  children?: React.ReactNode;
} = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        bg: "gray.200",
        width: "100vw",
        height: "100vh",
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};
