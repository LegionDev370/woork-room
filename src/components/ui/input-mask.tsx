import { IMaskInput } from "react-imask";
import Button from "./Button";
import Icon from "./Icon";

interface Props {
  label: string;
}

const InputMask = ({ label }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <label className="input-label">{label}</label>
        <div className="flex w-full gap-x-1.5">
          <IMaskInput
            className="input w-full"
            mask="{+998} 00 000 00 00"
            defaultValue="+998"
            unmask="+998000000000"
            inputMode="tel"
            minLength={17}
          />
          <Button
            variant="small"
            className="flex !py-[5px] items-center gap-x-3"
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
};
export default InputMask;
