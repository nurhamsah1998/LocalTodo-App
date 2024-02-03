/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-extra-boolean-cast */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Flex, Stack, Show } from "@chakra-ui/react";
import { sideBarLocalMenu } from "@/const/sideBarMenu";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { NavItem } from "../../components/NavItem";
import { SIDE_BAR_MENU } from "@/interface/index";

const DESKTOP_SIDEBAR_WIDTH: number = 250;

function DrawerLocal() {
  const nav: NavigateFunction = useNavigate();
  const handleClickNavigation = (item: SIDE_BAR_MENU) => {
    nav(`${item.path}`);
  };
  return (
    <Box
      sx={{
        height: "100dvh",
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
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default DrawerLocal;
