import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";

const useCheckAuth = () => {
  const { isSuccess, data, isFetching } = useQuery({
    queryKey: ["check-auth"],
    queryFn: async () => {
      return await api.get("auth/check");
    },
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
  return { isSuccess, data, isFetching };
};

export default useCheckAuth;
