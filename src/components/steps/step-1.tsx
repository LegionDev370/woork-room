import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { UseFormReturn } from "react-hook-form";
import { toast } from "react-toastify";
import "../../assets/styles/input.css";
import useSendOtp from "../../hooks/requests/useSendOtp";
import CodeTimer from "../code-timer";
import Input from "../ui/Input";
import InputMask from "../ui/input-mask";
import OtpInput from "../ui/otp-input";

interface Props {
  form: UseFormReturn<any>;
  setNextStep: Dispatch<SetStateAction<boolean>>;
}

const Step1 = ({ form, setNextStep }: Props) => {
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
          setNextStep={setNextStep}
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
        {...form.register("email")}
      />
      <Input
        required={true}
        inputClassName="w-full"
        label="Create Password"
        type={"password"}
        placeholder="••••••••"
        eyeIcon={true}
        {...form.register("password")}
      />
    </>
  );
};

export default Step1;
