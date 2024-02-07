/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@/components/Typography";
import { Box, Container, Flex, Show, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { HEADER_HEIGHT } from "../drawerLocal/DrawerLocal";
import { styledPropTheme } from "src/helper/styledPropTheme";
import {
  NavigateFunction,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IconType } from "react-icons";
import { FORM_INPUT_CREATE_REPO_LOCAL, SIDE_BAR_MENU } from "@/interface/index";
import { sideBarLocalTaskMenu } from "@/const/sideBarMenu";
import { useEncript } from "src/hooks/useEncript";
import Header from "./Header";
import { localSelectedRepo } from "src/store/store";
import { useAtom } from "jotai";
import { IoChevronBack } from "react-icons/io5";

const DESKTOP_SIDEBAR_WIDTH: number = 250;

const HeaderSideBar = ({
  validId,
}: {
  validId: FORM_INPUT_CREATE_REPO_LOCAL;
}) => {
  return (
    <Container
      sx={{
        bg: validId?.colorTheme?.bg,
        height: `${HEADER_HEIGHT}px`,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        px: 3,
      }}
    >
      <Box>
        <Typography color={validId?.colorTheme?.color} variantText="lg">
          Todo App
        </Typography>
        <Typography color={validId?.colorTheme?.color} mt={-1} variantText="xs">
          by nurhamsah
        </Typography>
      </Box>
    </Container>
  );
};
const NavItem = React.memo(function Item({
  item,
  id,
  bg,
  cl,
}: {
  item: SIDE_BAR_MENU;
  id: any;
  bg: string;
  cl: string;
}) {
  const { pathname } = useLocation();
  const nav: NavigateFunction = useNavigate();
  const Icon: IconType = item.icon;
  const ActiveNavigation = pathname.includes(item.path);
  const handleClickNavigation = () => {
    nav(`${item.path}/${id}`);
  };
  return (
    <Box
      onClick={handleClickNavigation}
      sx={{
        cursor: "pointer",
        borderRadius: styledPropTheme.borderRadius,
        bgColor: ActiveNavigation ? bg : "",
        _active: {
          bgColor: "primary.light",
          transition: "0.3s",
        },
        p: 2,
      }}
    >
      <Flex alignItems="center" gap={2}>
        <Box sx={{ color: ActiveNavigation ? cl : "gray.400" }}>
          <Icon size={16} />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: ActiveNavigation ? cl : "gray.400",
          }}
        >
          {item.label}
        </Typography>
      </Flex>
    </Box>
  );
});
function DrawerLocalTask() {
  const { data } = useEncript("repo", "array");
  const { id } = useParams();
  const nav = useNavigate();
  const [, setSelectedRepo] = useAtom(localSelectedRepo);
  const validId: FORM_INPUT_CREATE_REPO_LOCAL = React.useMemo(() => {
    return data.find((item: any) => item?.id === id);
  }, []);
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
            <HeaderSideBar validId={validId} />
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
                    id={id}
                    bg={validId?.colorTheme?.bg}
                    cl={validId?.colorTheme?.color}
                    key={index}
                    item={item}
                  />
                );
              })}
              <Box
                role="button"
                onClick={() => nav("/local/repo")}
                sx={{
                  mt: 10,
                  bg: validId?.colorTheme?.color,
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  borderRadius: styledPropTheme.borderRadius,
                }}
              >
                <Box color="#fff">
                  <IoChevronBack />
                </Box>
                <Typography color="#fff" variantText="sm">
                  Main menu
                </Typography>
              </Box>
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
            <Outlet />
          </Container>
        </Box>
      </Flex>
    </Container>
  );
}

export default DrawerLocalTask;
