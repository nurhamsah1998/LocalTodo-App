import ThemeProvider from "@/theme/ThemeProvider";
import QueryProvider from "@/utils/QueryProvider";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import RootAuthProvider from "@/utils/RootAuthProvider";

function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <BrowserRouter>
          <RootAuthProvider>
            <Router />
          </RootAuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
