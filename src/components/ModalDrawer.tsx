/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import { IoChevronBack } from "react-icons/io5";
import { LIST_CARD_COLOR } from "../interface";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { Typography } from "./Typography";
import { NavigateFunction, useNavigate } from "react-router-dom";

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
  const nav: NavigateFunction = useNavigate();
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
              <Box
                role="button"
                onClick={() => nav("/local/repo")}
                sx={{
                  mt: 10,
                  bg: color,
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  borderRadius: styledPropTheme.borderRadius,
                }}
              >
                <Box color="#fff">
                  <IoChevronBack />
                </Box>
                <Typography color="#fff" variantText="sm">
                  Main menu
                </Typography>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
