/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-extra-boolean-cast */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Flex, Stack, Show, Container } from "@chakra-ui/react";
import { sideBarLocalMenu } from "@/const/sideBarMenu";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { NavItem } from "../../components/NavItem";
import { SIDE_BAR_MENU } from "@/interface/index";
import { Typography } from "@/components/Typography";
import { Canvas } from "@/components/Canvas";

const DESKTOP_SIDEBAR_WIDTH: number = 250;
export const HEADER_HEIGHT = 70;
function DrawerLocal() {
  const nav: NavigateFunction = useNavigate();
  const handleClickNavigation = (item: SIDE_BAR_MENU) => {
    nav(`${item.path}`);
  };

  return (
    <Canvas
      sx={{
        overflow: "auto",
      }}
      css={{
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#c7c7c7",
        },
        "::-webkit-scrollbar-track": {
          background: "#f3f3f3",
        },
      }}
    >
      <Flex sx={{ alignItems: "flex-start" }}>
        <Show above="md">
          {/* SIDE BAR MENU */}
          <Box
            sx={{
              bgColor: "#fff",
              height: "100dvh",
              position: "sticky",
              top: 0,
              borderRightColor: "gray.200",
              borderRightStyle: "solid",
              borderRightWidth: "1px",
              overflow: "auto",
              width: DESKTOP_SIDEBAR_WIDTH,
              display: { xs: "none", lg: "block" },
            }}
            css={{
              "::-webkit-scrollbar": {
                width: "2px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "#c7c7c7",
              },
              "::-webkit-scrollbar-track": {
                background: "#f3f3f3",
              },
            }}
          >
            <Container
              sx={{
                minHeight: HEADER_HEIGHT,
                bg: "primary.main",
                position: "sticky",
                top: 0,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                px: 3,
              }}
            >
              <Box>
                <Typography color="#fff" variantText="lg">
                  Todo App
                </Typography>
                <Typography color="#fff" mt={-1} variantText="xs">
                  by nurhamsah
                </Typography>
              </Box>
            </Container>
            <Stack
              sx={{
                m: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {sideBarLocalMenu.map((item, index) => {
                return (
                  <NavItem
                    colorTheme={{
                      bg: "primary.light",
                      color: "primary.main",
                      label: "",
                    }}
                    handleClickNavigation={() => handleClickNavigation(item)}
                    key={index}
                    item={item}
                  />
                );
              })}
            </Stack>
          </Box>
        </Show>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Header />
          <Box
            sx={{
              py: 4,
              px: 5,
              minHeight: `calc(100dvh - ${HEADER_HEIGHT})`,
              overflow: "hidden",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </Canvas>
  );
}

export default DrawerLocal;
