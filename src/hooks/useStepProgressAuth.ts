import { useState } from "react";

export interface IDataProgress {
  title: string;
  step: number;
  isSuccess: boolean;
}

const data: IDataProgress[] = [
  {
    title: "Valid your phone",
    step: 1,
    isSuccess: false,
  },
  {
    title: "Tell about yourself",
    step: 2,
    isSuccess: false,
  },
  {
    title: "Tell about your company",
    step: 3,
    isSuccess: false,
  },
  {
    title: "Invite Team Members",
    step: 4,
    isSuccess: false,
  },
];

const useStepProgressAuth = () => {
  const [progressData, setProgressData] = useState<IDataProgress[]>(data);
  return { progressData, setProgressData };
};

export default useStepProgressAuth;
