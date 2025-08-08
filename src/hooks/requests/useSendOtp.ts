import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";
const useSendOtp = () => {
  const { mutateAsync, data, isSuccess, error, isError, isPending } =
    useMutation({
      mutationKey: ["send-otp"],
      mutationFn: async (phone_number: string) => {
        return await api.post("/auth/send-otp", {
          phone_number,
        });
      },
    });
  return { mutateAsync, data, error, isSuccess, isError, isPending };
};
export default useSendOtp;
