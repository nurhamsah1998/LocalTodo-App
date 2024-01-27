import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function QueryProvider({ children }: { children: JSX.Element }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
