import {
  Box,
  Flex,
  HStack,
  Tooltip,
  chakra,
  useMediaQuery,
} from "@chakra-ui/react";
import { Typography } from "./Typography";
import { medsos } from "../const";
import styles from "./components.module.css";
import { styledPropTheme } from "src/helper/styledPropTheme";

function SelfBranding() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <chakra.div
      sx={{
        py: 10,
        px: 5,
        backgroundImage: "linear-gradient(to right, primary.dark, green.700)",
        borderRadius: styledPropTheme.borderRadius,
        overflow: "hidden",
        height: "200px",
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
            <Typography variantText="xs">made with love by</Typography>
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
            {medsos.map((item, index) => {
              const Icon = item.icon;
              return (
                <Tooltip label={item.label} key={item.link}>
                  <chakra.a
                    href={item.link}
                    target="_blank"
                    className={styles[`Medsos${index}`]}
                    sx={{
                      bg: item.colorTheme,
                      color: "#fff",
                      p: 1,
                      borderRadius: styledPropTheme.borderRadius,
                      transition: "0.3s",
                      cursor: "pointer",
                      _active: {
                        transform: "scale(0.9)",
                      },
                    }}
                  >
                    <Icon />
                  </chakra.a>
                </Tooltip>
              );
            })}
          </HStack>
        </Box>
        <Box sx={{ color: "#fff" }}>
          <Typography
            className={styles.BrandingTitlePalestine}
            sx={{ fontWeight: 700 }}
          >
            STAND WITH PALESTINE
          </Typography>
        </Box>
      </Flex>
    </chakra.div>
  );
}

export default SelfBranding;
