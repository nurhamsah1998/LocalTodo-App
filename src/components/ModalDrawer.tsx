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
import { NavigateFunction, useNavigate } from "react-router-dom";
import BackToMainMenu from "./BackToMainMenu";
import SignOut from "./ExitApp";
import { AuthContext } from "src/store/store";
import React from "react";

export default function ModalDrawer({
  onClose,
  isOpen,
  handleClickNavigation,
  navList,
  colorTheme,
  disabledBackToMain = false,
}: {
  onClose: () => void;
  handleClickNavigation?: any;
  isOpen: boolean;
  disabledBackToMain?: boolean;
  navList: any[];
  colorTheme: LIST_CARD_COLOR;
}) {
  const { color, bg } = colorTheme || { color: "" };
  const nav: NavigateFunction = useNavigate();
  const { _signOut } = React.useContext<any>(AuthContext);
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
                    bg={bg}
                    cl={color}
                    handleClickNavigation={() => handleClickNavigation(item)}
                    key={index}
                    item={item}
                  />
                );
              })}
              {disabledBackToMain ? (
                <SignOut handleSignOut={_signOut} bg="error.main" />
              ) : (
                <BackToMainMenu nav={nav} bg={colorTheme.color} />
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
