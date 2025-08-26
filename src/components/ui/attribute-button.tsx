import type { UseFormReturn } from "react-hook-form";
import type { IOptions } from "../steps/step-2";
import { useState } from "react";

interface Props {
  label: string;
  form: UseFormReturn<any>;
  options: IOptions[];
  name: string;
  question_id: string;
}

const AttributeButton = ({
  label,
  options,
  name,
  form,
  question_id,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="flex flex-col gap-y-2">
      <label className="input-label">{label}</label>
      <div className="flex gap-4 flex-wrap">
        {options.map((option) => {
          return (
            <label
              onClick={() => setSelectedValue(option.id)}
              htmlFor={option.id}
              className={`p-[12.5px_17.5px] ${
                selectedValue === option.id
                  ? "bg-[#3F8CFF] text-white"
                  : "bg-none text-[#7D8592]"
              } cursor-pointer font-normal text-sm border-[#D8E0F0] border rounded-[10px] shadow-[rgba(184_200_224_0.22)]`}
            >
              {option.option_text}
              <input
                type="radio"
                value={option.id}
                className="hidden"
                id={option.id}
                {...form.register(question_id)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default AttributeButton;
