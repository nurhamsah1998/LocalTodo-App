import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

export { theme };
