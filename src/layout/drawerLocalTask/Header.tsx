import { Box, Button, Flex, Show, useDisclosure } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { Typography } from "../../components/Typography";
import { FORM_INPUT_CREATE_REPO_LOCAL, SIDE_BAR_MENU } from "@/interface/index";
import ModalDrawer from "@/components/ModalDrawer";
import { sideBarLocalTaskMenu } from "@/const/sideBarMenu";
import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { HEADER_HEIGHT } from "../drawerLocal/DrawerLocal";

function Header({ item }: { item?: FORM_INPUT_CREATE_REPO_LOCAL }) {
  const { pathname } = useLocation();
  const currentNav = sideBarLocalTaskMenu.find((item) =>
    pathname.includes(item.path)
  );

  const { repo, colorTheme } = item || {};
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav: NavigateFunction = useNavigate();
  const { id } = useParams();
  const handleClickNavigation = (item: SIDE_BAR_MENU) => {
    nav(`${item.path}/${id}`);
    onClose();
  };
  return (
    <>
      <ModalDrawer
        navList={sideBarLocalTaskMenu}
        handleClickNavigation={handleClickNavigation}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Box
        sx={{
          bg: colorTheme?.bg,
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
          <Box>
            <Typography
              sx={{
                color: colorTheme?.color,
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              {currentNav?.label}
            </Typography>
            <Typography
              variantText="xs"
              sx={{
                color: colorTheme?.color,
                textTransform: "capitalize",
                mt: -1.5,
              }}
            >
              {repo}
            </Typography>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
