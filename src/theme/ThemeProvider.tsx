import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

function ThemeProvider({ children }: { children: JSX.Element }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default ThemeProvider;
