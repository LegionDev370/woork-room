import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";

export interface Answers {
  question_id: string;
  value: string | Array<string>;
}

export interface IRegister {
  email: string;
  password: string;
  phone_number: string;
  answers: Array<Answers>;
  members: string[];
}

export const useRegister = () => {
  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: IRegister) => {
      console.log(data);
      return await api.post("/auth/register", data);
    },
  });
  return { mutateAsync, isPending, isSuccess, isError, error };
};
