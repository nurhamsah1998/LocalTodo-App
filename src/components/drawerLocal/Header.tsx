import { Box } from "@chakra-ui/react";
import { Typography } from "../Typography";

function Header() {
  return (
    <Box
      sx={{
        bg: "primary.main",
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
        <Typography sx={{ color: "#fff", fontWeight: 700 }}>
          Todo Apps
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
