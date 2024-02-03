/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import { LIST_CARD_COLOR } from "../interface";

export default function ModalDrawer({
  onClose,
  isOpen,
  handleClickNavigation,
  navList,
  colorTheme,
}: {
  onClose: () => void;
  handleClickNavigation?: any;
  isOpen: boolean;
  navList: any[];
  colorTheme: LIST_CARD_COLOR;
}) {
  const { color } = colorTheme || { color: "" };
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            sx={{ px: 5, color: "#fff", bg: color }}
            borderBottomWidth="1px"
          >
            Todo App by nur
          </DrawerHeader>
          <DrawerBody sx={{ px: 1 }}>
            <Stack
              sx={{
                m: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {navList.map((item: any, index) => {
                return (
                  <NavItem
                    colorTheme={colorTheme}
                    handleClickNavigation={() => handleClickNavigation(item)}
                    key={index}
                    item={item}
                  />
                );
              })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
