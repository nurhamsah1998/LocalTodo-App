import { Box } from "@chakra-ui/react";
import React from "react";
import { Typography } from "../Typography";
import { FORM_INPUT_CREATE_REPO_LOCAL } from "@/interface/index";

function Header({ item }: { item?: FORM_INPUT_CREATE_REPO_LOCAL }) {
  const { repo, colorTheme } = item || {};
  return (
    <Box
      sx={{
        bg: colorTheme?.bg,
        minHeight: "50px",
        position: "sticky",
        top: 0,
        zIndex: 99,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          px: 4,
        }}
      >
        <Typography
          sx={{
            color: colorTheme?.color,
            fontWeight: 700,
            textTransform: "capitalize",
          }}
        >
          {repo}
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
