import { IMaskInput } from "react-imask";
import Button from "./Button";
import type { RefObject } from "react";
import Loader from "./Loader";
import { Controller, type UseFormReturn } from "react-hook-form";

interface Props {
  label: string;
  handleClick: () => void;
  sendOtpSuccess: boolean;
  isLoading?: boolean;
  form: UseFormReturn<any>;
}

const InputMask = ({
  label,
  sendOtpSuccess,
  handleClick,
  isLoading,
  form,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <label className="input-label">{label}</label>
        <div className="flex gap-2">
        <Controller
          name="phone_number"
          control={form.control}
          render={({ field }) => {
            return (
              <IMaskInput
                onChange={field.onChange}
                className="input w-full"
                mask="{+998} 00 000 00 00"
                defaultValue="+998"
                unmask="+998000000000"
                inputMode="tel"
                minLength={17}
              />
            );
          }}
        />
          <Button
            onClick={handleClick}
            type="button"
            disabled={sendOtpSuccess}
            variant="small"
            className={`flex !py-[5px] ${
              sendOtpSuccess && `disabled`
            } items-center gap-x-3`}
          >
            {isLoading ? <Loader /> : "Send"}
          </Button>
        </div>
      </div>
    </>
  );
};
export default InputMask;
