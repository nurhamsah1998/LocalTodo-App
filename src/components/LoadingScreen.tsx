import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Typography } from "./Typography";

function LoadingScreen() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100%",
      }}
    >
      <Flex sx={{ gap: 3, alignItems: "center" }}>
        <Spinner size="xl" />
        <Typography variantText="xl">Loading</Typography>
      </Flex>
    </Box>
  );
}

export default LoadingScreen;
