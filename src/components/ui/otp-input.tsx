import { useState } from "react";
import OTPInput from "react-otp-input";

interface Props {
  label: string;
}

const OtpInput = ({ label }: Props) => {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex flex-col gap-y-2">
      <label className="input-label">{label}</label>
      <OTPInput
        value={otp}
        containerStyle={"gap-x-[16px]"}
        inputStyle={
          "!w-[58px] !h-[50px] rounded-[14px] border-2 border-[#D8E0F0] text-[#7D8592]"
        }
        onChange={setOtp}
        numInputs={4}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default OtpInput;
