/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex, Show, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { HEADER_HEIGHT } from "../drawerLocal/DrawerLocal";
import { useNavigate, useParams } from "react-router-dom";
import { FORM_INPUT_CREATE_REPO_LOCAL, SIDE_BAR_MENU } from "@/interface/index";
import { sideBarLocalTaskMenu } from "@/const/sideBarMenu";
import { useEncript } from "src/hooks/useEncript";
import Header from "./Header";
import { localSelectedRepo } from "src/store/store";
import { useAtom } from "jotai";
import HeaderSideBar from "@/components/HeaderSIdeBar";
import { NavItem } from "@/components/NavItem";
import BackToMainMenu from "@/components/BackToMainMenu";

const DESKTOP_SIDEBAR_WIDTH: number = 250;

function DrawerLocalTask({ children }: { children: React.ReactNode }) {
  const { data } = useEncript("repo", "array");
  const { id } = useParams();
  const nav = useNavigate();
  const [, setSelectedRepo] = useAtom(localSelectedRepo);
  const validId: FORM_INPUT_CREATE_REPO_LOCAL = React.useMemo(() => {
    return data?.find((item: any) => item?.id === id);
  }, []);
  const handleClickNavigation = (item: SIDE_BAR_MENU) => {
    nav(`${item.path}/${id}`);
  };

  React.useEffect(() => {
    if (!Boolean(validId)) {
      nav("/not-exist-route", { replace: true, state: null });
    }
  }, [id]);
  React.useEffect(() => {
    setSelectedRepo(validId);
  }, []);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
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
              }}
            >
              <HeaderSideBar colorTheme={validId?.colorTheme} />
              <Flex
                sx={{
                  flexDirection: "column",
                  p: 3,
                  gap: 2,
                  maxHeight: `calc(100% - ${HEADER_HEIGHT}px)`,
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
                {sideBarLocalTaskMenu.map((item, index) => {
                  return (
                    <NavItem
                      handleClickNavigation={() => handleClickNavigation(item)}
                      bg={validId?.colorTheme?.bg}
                      cl={validId?.colorTheme?.color}
                      key={index}
                      item={item}
                    />
                  );
                })}
                <BackToMainMenu bg={validId.colorTheme.color} nav={nav} />
              </Flex>
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
    </>
  );
}

export default DrawerLocalTask;
