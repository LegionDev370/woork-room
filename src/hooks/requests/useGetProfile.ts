import { useQuery } from "@tanstack/react-query";
import ENDPOINTS from "../../config/endpoints";
import { api } from "../../config/axios";

export const useGetProfile = () => {
  const baseUrl = import.meta.env.VITE_API_BACKEND_URL;
  const url = `${baseUrl}/${ENDPOINTS.user.me()}`;
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await api.get(url);
    },
    refetchOnWindowFocus: false,
  });
  return { data };
};
