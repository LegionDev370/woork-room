import { create } from "zustand";
import { io, Socket } from "socket.io-client";
import ENDPOINTS from "../config/endpoints";

interface ISocket {
  socket: Socket | null;
  isConnected: boolean;
  handleConnection?: () => void;
  handleDisconnect?: () => void;
}

export const useSocketStore = create<ISocket>((set, get) => {
  return {
    socket: null,
    isConnected: false,
    handleConnection: () => {
      const socketData = get();
      if (!socketData.isConnected) {
        const baseUrl = import.meta.env.VITE_API_SOCKET_URL;
        const socketUrl = ENDPOINTS.socket.chat();
        const url = `${baseUrl}${socketUrl}`;
        const newSocket = io(url, {
          transports: ["polling", "websocket"],
          reconnection: true,
          reconnectionAttempts: Infinity,
          withCredentials: true,
        });
        const socket = newSocket.connect();
        newSocket.on("connect", () => {
          set(() => ({
            socket,
            isConnected: true,
          }));
        });
        newSocket.on("connect_error", () => {
          const socket = get();
          socket.handleDisconnect();
        });
      }
    },
    handleDisconnect: () => {
      const socketData = get();
      if (socketData.socket) {
        socketData.socket.disconnect();
        set(() => ({
          socket: null,
          isConnected: false,
        }));
      }
    },
  };
});
