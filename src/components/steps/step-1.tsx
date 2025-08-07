import { useEffect, useRef } from "react";
import "../../assets/styles/input.css";
import useSendOtp from "../../hooks/requests/useSendOtp";
import Input from "../ui/Input";
import InputMask from "../ui/input-mask";
import OtpInput from "../ui/otp-input";
import { toast } from "react-toastify";
const Step1 = () => {
  const {
    mutateAsync,
    isSuccess: sendOtpSuccess,
    isError,
    isPending,
  } = useSendOtp();
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    const phoneNumber = ref.current?.value;
    mutateAsync(phoneNumber);
  };
  useEffect(() => {
    if (sendOtpSuccess) toast.success(`Sms code sended`);
  }, [sendOtpSuccess]);
  return (
    <div className="w-full">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col gap-y-[31px] mt-[33px]"
      >
        <InputMask
          handleClick={handleClick}
          isLoading={isPending}
          inputRef={ref}
          label="Mobile Number"
        />
        {sendOtpSuccess && <OtpInput label="Code from SMS" />}
        <Input
          inputClassName="w-full"
          type="email"
          label="Email Address"
          placeholder="youremail@gmail.com"
        />
        <Input
          inputClassName="w-full"
          label="Create Password"
          type={"password"}
          placeholder="••••••••"
          eyeIcon={true}
        />
      </form>
    </div>
  );
};

export default Step1;
