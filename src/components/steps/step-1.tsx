import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import "../../assets/styles/input.css";
import useSendOtp from "../../hooks/requests/useSendOtp";
import Input from "../ui/Input";
import InputMask from "../ui/input-mask";
import OtpInput from "../ui/otp-input";
import { toast } from "react-toastify";
import CodeTimer from "../code-timer";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  setNextStep: Dispatch<SetStateAction<boolean>>;
}

const Step1 = ({ register, watch, setNextStep }: Props) => {
  const [canSendOtp, setCanSendOtp] = useState<boolean>(true);
  const {
    mutateAsync,
    isSuccess: sendOtpSuccess,
    isError,
    error,
    isPending,
  } = useSendOtp();
  const ref = useRef<HTMLInputElement>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("+998950086735");
  const handleClick = () => {
    const phoneNumber = ref.current?.value;
    setPhoneNumber(phoneNumber);
    mutateAsync(phoneNumber);
  };
  useEffect(() => {
    if (sendOtpSuccess) {
      toast.success(`Sms code sended`);
      setNextStep(true);
      setCanSendOtp(false);
    }
  }, [sendOtpSuccess]);
  useEffect(() => {
    if (isError) {
      toast.error(error["response"].data.message);
    }
  }, [isError]);
  return (
    <>
      <InputMask
        handleClick={handleClick}
        isLoading={isPending}
        sendOtpSuccess={!canSendOtp}
        inputRef={ref}
        label="Mobile Number"
      />
      {!canSendOtp && (
        <OtpInput
          setCanSendOtp={setCanSendOtp}
          phone_number={phoneNumber}
          label="Code from SMS"
        />
      )}
      {!canSendOtp && (
        <CodeTimer
          setCanSendOtp={setCanSendOtp}
          phone_number={phoneNumber}
          time={59}
        />
      )}
      <Input
        inputClassName="w-full"
        type="email"
        required={true}
        label="Email Address"
        placeholder="youremail@gmail.com"
        {...register("email")}
      />
      <Input
        required={true}
        inputClassName="w-full"
        label="Create Password"
        type={"password"}
        placeholder="••••••••"
        eyeIcon={true}
        {...register("password")}
      />
    </>
  );
};

export default Step1;
