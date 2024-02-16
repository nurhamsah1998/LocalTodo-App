import { Box, chakra, Flex } from "@chakra-ui/react";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { Typography } from "./Typography";
import styles from "./components.module.css";

function RepoGithub() {
  return (
    <Box
      sx={{
        minHeight: "200px",
        backgroundImage: "linear-gradient(to right, #2e3a50, #000)",
        borderRadius: styledPropTheme.borderRadius,
        p: 5,
      }}
    >
      <Flex>
        <Box sx={{ color: "#fff" }}>
          <Flex className={styles.Medsos3} sx={{ alignItems: "start", gap: 2 }}>
            <Typography
              variantText="2xl"
              sx={{ fontWeight: 800, lineHeight: 7 }}
            >
              ToDo
            </Typography>
            <Typography
              variantText="xs"
              sx={{
                fontWeight: 600,
                py: 0.5,
                px: 2,
                bg: "#fff",
                color: "#000",
                display: "inline",
                borderRadius: styledPropTheme.borderRadius,
              }}
            >
              Local Mode
            </Typography>
          </Flex>
          <Typography className={styles.Medsos3} variantText="xs">
            Official Repository
          </Typography>
          <Typography
            className={styles.Medsos6}
            variantText="md"
            maxWidth={["100%", "70%", "85%"]}
            sx={{ mt: 2, lineHeight: "19px" }}
          >
            You can get this project on my Gitlab for free by forking this
            repository
          </Typography>
          <Box sx={{ mt: 3 }}>
            <chakra.a
              href="https://github.com/nurhamsah1998/LocalTodo-App"
              target="_blank"
              className={styles.Medsos6}
              sx={{
                bg: "#fff",
                color: "#000",
                py: 1,
                px: 3,
                fontFamily: "Poppins, sans-serif",
                fontSize: "sm",
                borderRadius: styledPropTheme.borderRadius,
              }}
            >
              Visit
            </chakra.a>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default RepoGithub;
