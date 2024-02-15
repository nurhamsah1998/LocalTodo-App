import {
  Box,
  Button,
  Flex,
  HStack,
  Tooltip,
  chakra,
  useMediaQuery,
} from "@chakra-ui/react";
import { Typography } from "./Typography";
import { footerMedSos } from "../const";
import styles from "./components.module.css";
import { styledPropTheme } from "src/helper/styledPropTheme";

function Footer() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <chakra.footer
      sx={{
        py: 10,
        px: 5,
        bg: "gray.900",
        borderRadius: styledPropTheme.borderRadius,
        overflow: "hidden",
      }}
    >
      <Flex
        sx={{
          flexDirection: isLargerThan768 ? "row" : "column",
          justifyContent: "space-between",
          alignItems: isLargerThan768 ? "flex-start" : "center",
          gap: 4,
        }}
      >
        <Box>
          <Box
            className={styles.FooterTitle}
            sx={{
              color: "#fff",
              textAlign: isLargerThan768 ? "left" : "center",
            }}
          >
            <Typography variantText="xs">Made by</Typography>
            <Typography
              variantText="2xl"
              sx={{
                fontWeight: 700,
                mt: -2,
              }}
            >
              Nurhamsah
            </Typography>
          </Box>
          <HStack sx={{ mt: 2 }}>
            {footerMedSos.map((item, index) => {
              const Icon = item.icon;
              return (
                <Tooltip label={item.label} key={item.link}>
                  <Button
                    className={styles[`FooterMedsos${index}`]}
                    size="xs"
                    sx={{
                      bg: item.colorTheme,
                      transition: "0.3s",
                      border: item.label === "Github" && "#fff 1px solid",
                      _active: {
                        transform: "scale(0.9)",
                      },
                    }}
                  >
                    <Icon />
                  </Button>
                </Tooltip>
              );
            })}
          </HStack>
        </Box>
        <Box sx={{ color: "#fff" }}>
          <Typography className={styles.FooterTitle}>FREE PALESTINE</Typography>
        </Box>
      </Flex>
    </chakra.footer>
  );
}

export default Footer;
