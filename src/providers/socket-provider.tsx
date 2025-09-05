import { useEffect } from "react";
import { useSocketStore } from "../store/socket-store";
interface ISocketProps {
  children: React.ReactNode;
}

const SocketProvider = ({ children }: ISocketProps) => {
  const { handleConnection } = useSocketStore();
  useEffect(() => {
    handleConnection();
  }, []);
  return <>{children}</>;
};
export default SocketProvider;
