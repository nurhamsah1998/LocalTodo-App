import Router from "./Router";
import RootAuthProvider from "@/utils/RootAuthProvider";

function App() {
  return (
    <RootAuthProvider>
      <Router />
    </RootAuthProvider>
  );
}

export default App;
