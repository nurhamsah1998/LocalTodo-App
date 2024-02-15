import { Typography } from "@/components/Typography";
import { Box, Button } from "@chakra-ui/react";
import { styledPropTheme } from "src/helper/styledPropTheme";
import styles from "./dashboardLocal.module.css";
import AddTask from "src/assets/svg/AddTask";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

function DashboardLocal() {
  const nav: NavigateFunction = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          height: "200px",
          bg: "orange.500",
          // borderColor:"primary.main",
          // borderWidth:'2px',
          // borderStyle:"solid",
          borderRadius: styledPropTheme.borderRadius,
          color: "#fff",
          p: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          className={styles.text_animation1}
          variantText="2xl"
          sx={{
            fontWeight: 800,
          }}
        >
          Todo APP
        </Typography>
        <Typography
          className={styles.text_animation2}
          variantText="md"
          sx={{
            lineHeight: "19px",
          }}
          maxWidth={["100%", "70%", "60%"]}
        >
          Hi, welcome to the simple todo list application, it's really simple,
          you don't need to sign in to be able to use this application. Simple,
          Fast and Free
        </Typography>
        <Button
          onClick={() => nav("/local/repo")}
          className={styles.text_animation2}
          sx={{
            mt: 3,
            bg: "#fff",
            color: "orange.500",
            borderRadius: `${styledPropTheme.borderRadius} !important`,
          }}
          size="sm"
        >
          Get Started
        </Button>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            className={styles.box_animation2}
            sx={{ transition: "0.3s" }}
            opacity={["0.2", "0.5", "0.8", "1"]}
          >
            <AddTask size={350} />
          </Box>
          {/* <Box className={styles.box_animation1}>
            <IoBrush size={50} />
          </Box>*/}
          <Box
            sx={{ bg: "orange.600" }}
            display={["none", "none", "block"]}
            className={styles.box_animation3}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default DashboardLocal;
