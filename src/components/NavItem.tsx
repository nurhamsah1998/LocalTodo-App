/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import { LIST_CARD_COLOR, SIDE_BAR_MENU } from "@/interface/index";
import { Typography } from "./Typography";
import { styledPropTheme } from "src/helper/styledPropTheme";

export const NavItem = ({
  item,
  handleClickNavigation,
  colorTheme,
}: {
  item: SIDE_BAR_MENU;
  colorTheme: LIST_CARD_COLOR;
  handleClickNavigation: (props?: any) => void;
}) => {
  const { bg, color } = colorTheme || {};
  const { pathname } = useLocation();
  const Icon: IconType = item.icon;
  const ActiveNavigation = pathname.includes(item.path);

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
        <Box sx={{ color: ActiveNavigation ? color : "gray.400" }}>
          <Icon size={16} />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: ActiveNavigation ? color : "gray.400",
          }}
        >
          {item.label}
        </Typography>
      </Flex>
    </Box>
  );
};
