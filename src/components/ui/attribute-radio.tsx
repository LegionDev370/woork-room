import type { UseFormReturn } from "react-hook-form";
import type { IOptions } from "../steps/step-2";

interface Props {
  question_text: string;
  options: IOptions[];
  name: string;
  form: UseFormReturn<any>;
}

const AttributeRadio = ({ question_text, form, options, name }: Props) => {
  return (
    <div className="flex justify-between">
      <label className="font-semibold text-[#7D8592]">{question_text}</label>
      <div className="flex gap-x-9">
        {options.map((option) => {
          return (
            <div key={option.id} className="flex items-center">
              <input
                id="link-radio"
                type="radio"
                {...form.register(name)}
                value={option.option_value}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-radio"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {option.option_text}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttributeRadio;
