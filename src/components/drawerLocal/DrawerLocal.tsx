/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-extra-boolean-cast */
import { Box, Flex, Stack } from "@chakra-ui/react";
import { sideBarLocalMenu } from "@/const/sideBarMenu";
import {
  NavigateFunction,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IconType } from "react-icons";
import { SIDE_BAR_MENU } from "../../interface";
import { Typography } from "../Typography";
import Header from "./Header";

const DESKTOP_SIDEBAR_WIDTH: number = 250;

const NavItem = ({ item }: { item: SIDE_BAR_MENU }) => {
  const { pathname } = useLocation();
  const nav: NavigateFunction = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();
  const Icon: IconType = item.icon;
  const ActiveNavigation = pathname.includes(item.path);
  const handleClickNavigation = () => {
    nav(`${item.path}`);
  };
  return (
    <Box
      onClick={handleClickNavigation}
      sx={{
        cursor: "pointer",
        bgColor: ActiveNavigation ? "primary.light" : "",
        _active: {
          bgColor: "primary.light",
          transition: "0.3s",
        },
        p: 2,
      }}
    >
      <Flex alignItems="center" gap={2}>
        <Box sx={{ color: ActiveNavigation ? "primary.main" : "gray.400" }}>
          <Icon size={16} />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: ActiveNavigation ? "primary.main" : "gray.400",
          }}
        >
          {item.label}
        </Typography>
      </Flex>
    </Box>
  );
};
function DrawerLocal() {
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
            {sideBarLocalMenu.map((item, index) => {
              return <NavItem key={index} item={item} />;
            })}
          </Stack>
        </Box>
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
