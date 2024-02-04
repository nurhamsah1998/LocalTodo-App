import { Typography } from "./Typography";
import { Box } from "@chakra-ui/react";

function EmptyItemMessage({
  title,
  desc,
  underlineColor,
}: {
  title: string;
  desc: string;
  underlineColor: string;
}) {
  return (
    <Box
      sx={{
        py: 1,
        px: 5,
        borderBottomColor: underlineColor,
        borderWidth: "2px",
        borderStyle: "solid",
      }}
    >
      <Typography variantText="xl" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <Typography
        variantText="sm"
        sx={{ textAlign: "center", color: "gray.600", mt: -1 }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

export default EmptyItemMessage;
