import { Typography } from "@/components/Typography";
import { Box } from "@chakra-ui/react";
import { styledPropTheme } from "src/helper/styledPropTheme";
import styles from "./dashboardLocal.module.css";

function DashboardLocal() {
  return (
    <Box>
      <Box
        sx={{
          height: "200px",
          bg: "purple.600",
          borderRadius: styledPropTheme.borderRadius,
          color: "#fff",
          p: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variantText="xl"
          sx={{
            fontWeight: 800,
          }}
        >
          Welcome,
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box className={styles.box_animation1}></Box>
          <Box className={styles.box_animation2} />
          <Box className={styles.box_animation3} />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLocal;
