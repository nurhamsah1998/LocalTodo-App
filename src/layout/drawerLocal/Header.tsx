import { Box, Button, Flex, Show, useDisclosure } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { Typography } from "../../components/Typography";
import { sideBarLocalMenu } from "@/const/sideBarMenu";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import ModalDrawer from "@/components/ModalDrawer";
import { SIDE_BAR_MENU } from "@/interface/index";
import { HEADER_HEIGHT } from "./DrawerLocal";

function Header() {
  const { pathname } = useLocation();
  const currentNav = sideBarLocalMenu.find((item) =>
    item.path.includes(pathname)
  );
  const nav: NavigateFunction = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClickNavigation = (item: SIDE_BAR_MENU) => {
    nav(`${item.path}`);
    onClose();
  };
  return (
    <>
      <ModalDrawer
        navList={sideBarLocalMenu}
        handleClickNavigation={handleClickNavigation}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Box
        sx={{
          bg: "primary.main",
          minHeight: HEADER_HEIGHT,
          position: "sticky",
          top: 0,
          zIndex: 99,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            px: 4,
            alignItems: "center",
            gap: 3,
          }}
        >
          <Show below="md">
            <Button
              onClick={onOpen}
              size="sm"
              variant="text"
              sx={{
                bg: "gray.50",
                _active: {
                  transform: "scale(0.9)",
                  transition: "0.3s",
                },
              }}
            >
              <IoMenu />
            </Button>
          </Show>
          <Typography sx={{ color: "#fff", fontWeight: 700 }}>
            {currentNav?.label || "Todo Apps"}
          </Typography>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
