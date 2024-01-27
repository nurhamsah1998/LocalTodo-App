import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { sideBarMenu } from "../const/sideBarMenu";
import { Outlet } from "react-router-dom";
import { IconType } from "react-icons";

const DESKTOP_SIDEBAR_WIDTH: number = 200;
function DrawerApp() {
  return (
    <Box
      sx={{
        height: "100dvh",
      }}
    >
      <HStack sx={{ alignItems: "flex-start" }}>
        <Box
          sx={{
            bgColor: "pink",
            height: "100dvh",
            width: DESKTOP_SIDEBAR_WIDTH,
          }}
        >
          <Box sx={{ m: 2 }}>
            {sideBarMenu.map((item, index) => {
              const Icon: IconType = item.icon;
              return (
                <Button key={index}>
                  <HStack>
                    <Icon size={16} style={{ color: "blue" }} />
                    <Text>{item.label}</Text>
                  </HStack>
                </Button>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Outlet />
        </Box>
      </HStack>
    </Box>
  );
}

export default DrawerApp;
