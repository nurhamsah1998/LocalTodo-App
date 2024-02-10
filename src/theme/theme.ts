import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Input } from "./input";
import { Select } from "./select";
import { colors } from "@/const/themeColors";

const {
  Modal,
  CloseButton,
  Alert,
  Checkbox,
  Drawer,
  Divider,
  Textarea,
  Tooltip,
} = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Modal,
    CloseButton,
    Alert,
    Checkbox,
    Drawer,
    Divider,
    Textarea,
    Select,
    Tooltip,
  },
  colors,
});

export { theme };
