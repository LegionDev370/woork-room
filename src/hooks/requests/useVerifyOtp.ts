import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";

const useVerifyOtp = () => {
  const { mutateAsync, isError, error, isPending, isSuccess } = useMutation({
    mutationKey: ["verify-otp"],
    mutationFn: async (data: { phone_number: string; code: string }) => {
      return await api.post("/auth/verify-otp", {
        phone_number: data.phone_number,
        code: data.code,
      });
    },
  });
  return { mutateAsync, isError, error, isPending, isSuccess };
};

export default useVerifyOtp;
