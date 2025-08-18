import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";
import ENDPOINTS from "../../config/endpoints";

export const useCheckEmail = () => {
  const url = ENDPOINTS.user.checkEmail();
  const { data, isSuccess, mutateAsync } = useMutation({
    mutationKey: ["check-email"],
    mutationFn: async (email: string) => {
      return await api.post(url, { email });
    },
  });
  return { data, isSuccess, mutateAsync };
};
