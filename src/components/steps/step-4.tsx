import { useState, type RefObject } from "react";
import type { UseFormReturn } from "react-hook-form";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Input from "../ui/Input";

interface Props {
  form: UseFormReturn<any>;
  formRef: RefObject<HTMLFormElement>;
}

const Step4 = ({ form, formRef }: Props) => {
  const [countInput, setCountInput] = useState([1]);

  const onAddCount = () => {
    const isValid = formRef.current.checkValidity();
    if (!isValid) return formRef.current.reportValidity();
    if (countInput.length < 4) {
      setCountInput((previus) => [...previus, 1]);
    }
  };

  return (
    <div className="flex flex-col gap-y-6">
      {countInput.map((e, index) => {
        return (
          <Input
            label="Member’s Email"
            type="email"
            placeholder="memberemail@gmail.com"
            required={true}
            {...form.register(`members-${index}`)}
            inputClassName="w-full"
          />
        );
      })}
      <Button
        type="button"
        variant="small"
        onClick={onAddCount}
        className="!flex !bg-transparent !shadow-none !cursor-pointer !text-[#3F8CFF] !w-[250px] !items-center !justify-start !pl-0 !gap-2 !h-[24px] "
      >
        <Icon.plusIcon />
        Add another Member
      </Button>
    </div>
  );
};

export default Step4;
