/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Flex, Show, Stack } from "@chakra-ui/react";
import { sideBarLocalTaskMenu } from "@/const/sideBarMenu";
import { IoChevronBack } from "react-icons/io5";
import {
  NavigateFunction,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IconType } from "react-icons";
import { SIDE_BAR_MENU } from "../../interface";
import { Typography } from "../../components/Typography";
import Header from "./Header";
import { useEncript } from "src/hooks/useEncript";
import React from "react";

const DESKTOP_SIDEBAR_WIDTH: number = 250;

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
  const validId = data.find((item: any) => item?.id === id);
  React.useEffect(() => {
    if (!Boolean(validId)) {
      nav("/not-exist-route", { replace: true, state: null });
    }
  }, [id]);
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
                  bg: "primary.main",
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box color="#fff">
                  <IoChevronBack />
                </Box>
                <Typography color="#fff" variantText="sm">
                  Main menu
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Show>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Header item={validId} />
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

export default DrawerLocalTask;
