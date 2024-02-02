import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "@/theme/ThemeProvider";
import QueryProvider from "@/utils/QueryProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </QueryProvider>
  </React.StrictMode>
);
