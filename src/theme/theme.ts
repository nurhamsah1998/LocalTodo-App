import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Input } from "./input";
import { colors } from "@/const/themeColors";

const { Modal, CloseButton } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Modal,
    CloseButton,
  },
  colors,
});

export { theme };
