import { Provider as JotaiProvider } from "jotai";
import Router from "./Router";
import RootAuthProvider from "@/utils/RootAuthProvider";

function App() {
  return (
    <RootAuthProvider>
      <JotaiProvider>
        <Router />
      </JotaiProvider>
    </RootAuthProvider>
  );
}

export default App;
