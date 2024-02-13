import { Typography } from "@/components/Typography";
import { Box } from "@chakra-ui/react";
import { styledPropTheme } from "src/helper/styledPropTheme";
import styles from "./dashboardLocal.module.css";
import { IoBrush } from "react-icons/io5";

function DashboardLocal() {
  return (
    <Box>
      <Box
        sx={{
          height: "200px",
          bg: "purple.300",
          borderRadius: styledPropTheme.borderRadius,
          color: "#fff",
          p: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          className={styles.text_animation1}
          variantText="xl"
          sx={{
            fontWeight: 800,
          }}
        >
          Welcome,
        </Typography>
        <Typography className={styles.text_animation2} variantText="xs">
          Lorem pekkadokf jaipdf oasonas kishasd koiasd sjkn oashoiansid
          lashaiwnd nauodfasn kjsokaias mkasdoiqn kns koasdnhiawnd noasndoiqwnd
          lkasnodiansid mkmksd okajsid nkasnidand naosndoinaoisdn knoasndin
          nknasnd aosndoiasn
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box className={styles.box_animation1}>
            <IoBrush size={50} />
          </Box>
          <Box className={styles.box_animation2} />
          <Box className={styles.box_animation3} />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLocal;
