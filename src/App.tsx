import ThemeProvider from "@/theme/ThemeProvider";
import QueryProvider from "@/utils/QueryProvider";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
