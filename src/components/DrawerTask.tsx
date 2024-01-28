import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { sideBarTaskMenu } from "../const/sideBarMenu";
import {
  NavigateFunction,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IconType } from "react-icons";
import { SIDE_BAR_MENU } from "../interface";

const DESKTOP_SIDEBAR_WIDTH: number = 250;

const NavItem = ({ item }: { item: SIDE_BAR_MENU }) => {
  const { pathname } = useLocation();
  const nav: NavigateFunction = useNavigate();
  const { id } = useParams();
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
        <Text
          sx={{
            fontWeight: 600,
            color: ActiveNavigation ? "primary.main" : "gray.400",
          }}
        >
          {item.label}
        </Text>
      </Flex>
    </Box>
  );
};
function DrawerTask() {
  return (
    <Box
      sx={{
        height: "100dvh",
      }}
    >
      <HStack sx={{ alignItems: "flex-start", width: "100dvw" }}>
        <Box
          sx={{
            bgColor: "#fff",
            height: "100dvh",
            borderRightColor: "gray.200",
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            width: DESKTOP_SIDEBAR_WIDTH,
          }}
        >
          <Box sx={{ m: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            {sideBarTaskMenu.map((item, index) => {
              return <NavItem key={index} item={item} />;
            })}
          </Box>
        </Box>
        <Container
          sx={{
            width: "100%",
            p: 2,
            pl: 0,
          }}
        >
          <Outlet />
        </Container>
      </HStack>
    </Box>
  );
}

export default DrawerTask;
