import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useLogin = () => {
  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: { email: string; password: string }) => {
      return await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
    },
  });
  return { mutateAsync, isPending, isSuccess, isError, error };
};
