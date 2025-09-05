import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SocketProvider from "./socket-provider";
const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SocketProvider>{children}</SocketProvider>
    </QueryClientProvider>
  );
};

export default Providers;
