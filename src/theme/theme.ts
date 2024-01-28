import { extendBaseTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Input } from "./input";
import { colors } from "@/const/themeColors";

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
  },
  colors,
});

export { theme };
