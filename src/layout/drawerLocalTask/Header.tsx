import { Box, Button, Flex, Show, useDisclosure } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { Typography } from "../../components/Typography";
import { SIDE_BAR_MENU } from "@/interface/index";
import ModalDrawer from "@/components/ModalDrawer";
import { sideBarLocalTaskMenu } from "@/const/sideBarMenu";
import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { HEADER_HEIGHT } from "../drawerLocal/DrawerLocal";
import { useAtom } from "jotai";
import { localSelectedRepo } from "src/store/store";
import { useConciseText } from "src/hooks/useConciseText";

function Header() {
  const { pathname } = useLocation();
  const [selectedRepo] = useAtom(localSelectedRepo);
  const currentNav = sideBarLocalTaskMenu.find((item) =>
    pathname.includes(item.path)
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav: NavigateFunction = useNavigate();
  const { id } = useParams();
  const handleClickNavigation = (item: SIDE_BAR_MENU) => {
    nav(`${item.path}/${id}`);
    onClose();
  };
  const { text: repoTitle } = useConciseText({
    text: selectedRepo?.repo,
    limit: 70,
  });
  return (
    <>
      <ModalDrawer
        colorTheme={selectedRepo?.colorTheme}
        navList={sideBarLocalTaskMenu}
        handleClickNavigation={handleClickNavigation}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Box
        sx={{
          bg: selectedRepo?.colorTheme?.bg,
          minHeight: HEADER_HEIGHT,
          position: "sticky",
          top: 0,
          zIndex: 5,
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
                color: selectedRepo?.colorTheme?.color,
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              {currentNav?.label}
            </Typography>
            <Typography
              variantText="xs"
              sx={{
                color: selectedRepo?.colorTheme?.color,
                textTransform: "capitalize",
                mt: -1.5,
              }}
            >
              {repoTitle}
            </Typography>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
