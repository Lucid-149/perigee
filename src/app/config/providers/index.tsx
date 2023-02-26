import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "../../../Theme/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { DataProvider } from "../hooks/useData";
const queryClient = new QueryClient();
import AuthProvider from "../hooks/useAuth";
const Providers = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
      <HelmetProvider>
        <ThemeProvider>
          <BrowserRouter>
            <AuthProvider>{children}</AuthProvider>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </DataProvider>
    </QueryClientProvider>
  );
};

export default Providers;
