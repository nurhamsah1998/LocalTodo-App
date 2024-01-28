import { Box, Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { sideBarMenu } from "../const/sideBarMenu";
import { Outlet } from "react-router-dom";
import { IconType } from "react-icons";

const DESKTOP_SIDEBAR_WIDTH: number = 250;
function DrawerApp() {
  return (
    <Box
      sx={{
        height: "100dvh",
      }}
    >
      <HStack sx={{ alignItems: "flex-start", width: "100dvw" }}>
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
                  <Flex>
                    <Icon size={16} style={{ color: "blue" }} />
                    <Text>{item.label}</Text>
                  </Flex>
                </Button>
              );
            })}
            asdadada sdas dasd asd ada dad adwrf aafsdasd
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

export default DrawerApp;
