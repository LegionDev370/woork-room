import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import OTPInput from "react-otp-input";
import useVerifyOtp from "../../hooks/requests/useVerifyOtp";
import { toast } from "react-toastify";

interface Props {
  label: string;
  phone_number: string;
  setCanSendOtp: Dispatch<SetStateAction<boolean>>;
  setNextStep: Dispatch<SetStateAction<boolean>>;
}

const OtpInput = ({
  label,
  phone_number,
  setCanSendOtp,
  setNextStep,
}: Props) => {
  const [otp, setOtp] = useState("");
  const { mutateAsync, isError, isPending, error, isSuccess } = useVerifyOtp();
  useEffect(() => {
    if (otp.length == 4) {
      mutateAsync({ phone_number, code: otp });
    }
  }, [otp]);
  useEffect(() => {
    if (isSuccess) {
      toast.success("otp verified");
      setTimeout(() => {
        setCanSendOtp(true);
        setNextStep(true);
      }, 2000);
    }
  }, [isSuccess]);
  return (
    <div className="flex flex-col gap-y-2">
      <label className="input-label">{label}</label>
      <OTPInput
        value={otp}
        containerStyle={"gap-x-[16px]"}
        inputStyle={`!w-[58px] !h-[50px] rounded-[14px] border-2 ${
          isSuccess ? "border-green-400" : "border-[#D8E0F0]"
        }  text-[#7D8592]`}
        onChange={setOtp}
        numInputs={4}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default OtpInput;
