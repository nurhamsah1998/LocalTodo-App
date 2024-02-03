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

export default function ModalDrawer({
  onClose,
  isOpen,
  handleClickNavigation,
  navList,
}: {
  onClose: () => void;
  handleClickNavigation?: any;
  isOpen: boolean;
  navList: any[];
}) {
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader sx={{ px: 5 }} borderBottomWidth="1px">
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
