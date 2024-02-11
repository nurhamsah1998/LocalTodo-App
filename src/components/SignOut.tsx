import { Box } from "@chakra-ui/react";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { IoChevronBack } from "react-icons/io5";
import { Typography } from "./Typography";

function SignOut({
  bg,
  handleSignOut,
}: {
  bg: string;
  handleSignOut: () => void;
}) {
  return (
    <Box
      role="button"
      onClick={handleSignOut}
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
        Sign Out
      </Typography>
    </Box>
  );
}

export default SignOut;
