import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import { theme } from "./theme";

const { ToastContainer } = createStandaloneToast();
function ThemeProvider({ children }: { children: JSX.Element }) {
  return (
    <>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      <ToastContainer />
    </>
  );
}

export default ThemeProvider;
