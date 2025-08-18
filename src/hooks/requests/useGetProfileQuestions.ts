import { useQuery } from "@tanstack/react-query";
import ENDPOINTS from "../../config/endpoints";
import { api } from "../../config/axios";

export const useGetProfileQuestions = (step_number: number) => {
  const url = ENDPOINTS.user.profileQuestions(step_number);
  const { data, isError, isSuccess } = useQuery({
    queryKey: ["user-profile-questions"],
    queryFn: async () => {
      return await api.get(url);
    },
  });
  return {
    data,
    isError,
    isSuccess,
  };
};
