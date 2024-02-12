/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex, Show, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SIDE_BAR_MENU } from "@/interface/index";
import { sideBarLocalMenu } from "@/const/sideBarMenu";
import Header from "./Header";
import HeaderSideBar from "@/components/HeaderSIdeBar";
import { NavItem } from "@/components/NavItem";
import SignOut from "@/components/SignOut";
import { AuthContext } from "src/store/store";

const DESKTOP_SIDEBAR_WIDTH: number = 250;
export const HEADER_HEIGHT = 70;
function DrawerLocalTask({ children }: { children: React.ReactNode }) {
  const nav = useNavigate();
  const { _signOut } = React.useContext<any>(AuthContext);
  const handleClickNavigation = (item: SIDE_BAR_MENU) => {
    nav(`${item.path}`);
  };

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Container sx={{ height: "100vh" }}>
      <Flex
        sx={{
          height: "100%",
          overflowX: "hidden",
        }}
      >
        {/* ---------- LEFT SECTION START ---------- */}
        <Show above="md">
          <Box
            sx={{
              bg: "#fff",
              minW: `${DESKTOP_SIDEBAR_WIDTH}px`,
              position: "sticky",
              left: 0,
              top: 0,
              zIndex: 6,
              borderRightColor: "gray.200",
              borderRightWidth: "1px",
              borderRightStyle: "solid",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxHeight: `100%`,
              overflowY: "auto",
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
            <Box>
              <HeaderSideBar
                colorTheme={{ bg: "primary.main", color: "primary.light" }}
              />
              <Flex
                sx={{
                  flexDirection: "column",
                  p: 3,
                  gap: 2,
                }}
              >
                {sideBarLocalMenu.map((item, index) => {
                  return (
                    <NavItem
                      handleClickNavigation={() => handleClickNavigation(item)}
                      bg="primary.main"
                      cl="primary.light"
                      key={index}
                      item={item}
                    />
                  );
                })}
              </Flex>
            </Box>
            <Box
              sx={{
                p: 3,
              }}
            >
              <SignOut handleSignOut={_signOut} bg="error.main" />
            </Box>
          </Box>
        </Show>
        {/* ---------- LEFT SECTION END ---------- */}
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Header />
          <Container
            sx={{
              height: `calc(100% - ${HEADER_HEIGHT}px)`,
              overflowY: "auto",
              maxWidth: isLargerThan768
                ? `calc(100vw - ${DESKTOP_SIDEBAR_WIDTH}px)`
                : `calc(100vw + ${DESKTOP_SIDEBAR_WIDTH}px)`,
              overflowX: "auto",
              py: 3,
              px: 5,
              bg: "gray.50",
            }}
            css={{
              "::-webkit-scrollbar": {
                height: "8px",
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
            {children}
          </Container>
        </Box>
      </Flex>
    </Container>
  );
}

export default DrawerLocalTask;
