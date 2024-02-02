import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Input } from "./input";
import { colors } from "@/const/themeColors";

const { Modal, CloseButton, Alert, Checkbox } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Modal,
    CloseButton,
    Alert,
    Checkbox,
  },
  colors,
});

export { theme };
