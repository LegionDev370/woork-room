import React from "react";
import { useSocketStore } from "../store/socket-store";
import { useUserStore } from "../store/user.store";

const Chat = () => {
  const { socket, isConnected } = useSocketStore();
  const { user } = useUserStore();
  console.log(user, socket);
  return <div></div>;
};

export default Chat;
