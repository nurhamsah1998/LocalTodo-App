import { Box } from "@chakra-ui/react";
import { FORM_INPUT_CREATE_REPO_LOCAL } from "../interface";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { IoChevronBack } from "react-icons/io5";
import { NavigateFunction } from "react-router-dom";
import { Typography } from "./Typography";

function BackToMainMenu({
  validId,
  nav,
}: {
  validId: FORM_INPUT_CREATE_REPO_LOCAL;
  nav: NavigateFunction;
}) {
  return (
    <Box
      role="button"
      onClick={() => nav("/local/repo")}
      sx={{
        mt: 10,
        bg: validId?.colorTheme?.color,
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
