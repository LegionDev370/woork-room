import { useEffect } from "react";
import { useSocketStore } from "../store/socket-store";
import { useUserStore } from "../store/user.store";
interface ISocketProps {
  children: React.ReactNode;
}

const SocketProvider = ({ children }: ISocketProps) => {
  const { handleConnection } = useSocketStore();
  const { loggedIn } = useUserStore();
  useEffect(() => {
    if (loggedIn) {
      handleConnection();
    }
  });
  return <>{children}</>;
};
export default SocketProvider;
