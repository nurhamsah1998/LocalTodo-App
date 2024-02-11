import { Box, Container } from "@chakra-ui/react";
import { HEADER_HEIGHT } from "src/layout/drawerLocal/DrawerLocal";
import { Typography } from "./Typography";

export default function HeaderSideBar({
  colorTheme,
}: {
  colorTheme: { bg: string; color: string };
}) {
  return (
    <Container
      sx={{
        bg: colorTheme?.bg,
        height: `${HEADER_HEIGHT}px`,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        px: 3,
        position: "sticky",
        top: 0,
      }}
    >
      <Box>
        <Typography color={colorTheme?.color} variantText="lg">
          Todo App
        </Typography>
        <Typography color={colorTheme?.color} mt={-1} variantText="xs">
          by nurhamsah
        </Typography>
      </Box>
    </Container>
  );
}
