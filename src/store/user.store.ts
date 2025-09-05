import { create } from "zustand";

interface IUserData {
  email: string;
  phone_number: string;
}

interface IUserStore {
  loggedIn: boolean;
  user?: IUserData;
  setLoggedIn: (loggedIn: boolean) => void;
  setUserData: (data: IUserData) => void;
}

export const useUserStore = create<IUserStore>((set, get) => ({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => {
    set(() => ({
      loggedIn,
    }));
  },
  setUserData: (data: IUserData) => {
    set(() => ({
      user: data,
    }));
  },
}));
