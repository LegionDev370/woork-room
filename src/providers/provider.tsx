import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CookieProvider from "./cookie-provider";
import SocketProvider from "./socket-provider";
import { Buffer } from "buffer";
import { useEffect } from "react";
const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CookieProvider>
        <SocketProvider>{children}</SocketProvider>
      </CookieProvider>
    </QueryClientProvider>
  );
};

export default Providers;
