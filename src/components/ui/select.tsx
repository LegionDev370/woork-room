import ReactSelect from "react-select";
import type { IOptions } from "../steps/step-2";
import { Controller, type UseFormReturn } from "react-hook-form";

interface Props {
  question_text: string;
  options: IOptions[];
  is_required: boolean;
  name: string;
  form: UseFormReturn<any>;
}

const Select = ({ question_text, options, is_required, form, name }: Props) => {
  const optionsData = options?.map((option) => {
    return {
      value: option.id,
      label: option.option_text,
    };
  });
  return (
    <div className="flex flex-col gap-y-2">
      <label className="font-semibold text-[#7D8592]">{question_text}</label>
      <Controller
        name={name}
        control={form.control}
        render={(props) => {
          return (
            <ReactSelect
              options={optionsData}
              onChange={props.field.onChange}
              value={props.field.value}
              required={is_required}
              styles={{
                indicatorSeparator: (base) => {
                  return {
                    listStyle: "none",
                  };
                },
                control(base, props) {
                  return {
                    color: "red",
                    border: "1px solid #D8E0F0",
                    borderRadius: "14px",
                    display: "flex",
                    padding: "6px 12px",
                  };
                },
                placeholder(base, props) {
                  return {
                    ...base,
                    color: "#7D8592",
                  };
                },
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default Select;
