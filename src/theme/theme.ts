import { extendBaseTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { colors } from "@/const/themeColors";

const theme = extendBaseTheme({
  components: {
    Button,
  },
  colors,
});

export { theme };
