import { Box } from "@chakra-ui/react";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { IoChevronBack } from "react-icons/io5";
import { NavigateFunction } from "react-router-dom";
import { Typography } from "./Typography";

function BackToMainMenu({ bg, nav }: { bg: string; nav: NavigateFunction }) {
  return (
    <Box
      role="button"
      onClick={() => nav("/local/repo")}
      sx={{
        mt: 10,
        bg: bg,
        p: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderRadius: styledPropTheme.borderRadius,
      }}
    >
      <Box color="#fff">
        <IoChevronBack />
      </Box>
      <Typography color="#fff" variantText="sm">
        Main menu
      </Typography>
    </Box>
  );
}

export default BackToMainMenu;
