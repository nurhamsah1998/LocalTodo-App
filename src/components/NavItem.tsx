/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import { SIDE_BAR_MENU } from "@/interface/index";
import { Typography } from "./Typography";

export const NavItem = ({
  item,
  handleClickNavigation,
}: {
  item: SIDE_BAR_MENU;
  handleClickNavigation: (props?: any) => void;
}) => {
  const { pathname } = useLocation();
  const Icon: IconType = item.icon;
  const ActiveNavigation = pathname.includes(item.path);

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
