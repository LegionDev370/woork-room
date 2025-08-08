import React, {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import Icon from "./ui/Icon";

interface Props {
  phone_number: string;
  time: number;
  setCanSendOtp: Dispatch<SetStateAction<boolean>>;
}

const CodeTimer = ({ phone_number, time, setCanSendOtp }: Props) => {
  const [timer, setTimer] = useState<number>(time);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    setIntervalId(intervalId);
  }, []);
  useEffect(() => {
    if (timer == 0) {
      clearInterval(intervalId);
      setCanSendOtp(true);
    }
  }, [timer]);
  return (
    <div className="bg-[#F4F9FD] flex gap-x-[10px] p-[22px_31px_22px_20px] rounded-[14px] text-[#3F8CFF] font-normal text-[14px]">
      <Icon.infoTimerIcon />
      SMS was sent to your number {phone_number} It will be valid for 00:{timer}
    </div>
  );
};

export default CodeTimer;
