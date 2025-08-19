import React from "react";
import type { IOptions } from "./steps/step-2";
import Select from "./ui/select";
import AttributeRadio from "./ui/attribute-radio";
import type {
  UseControllerReturn,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";

interface Props {
  type: string;
  options?: IOptions[];
  question_text: string;
  question_id: string;
  is_required: boolean;
  form: UseFormReturn<any>;
}

const AttributeLayout = ({
  options,
  question_text,
  is_required,
  form,
  type,
  question_id,
}: Props) => {
  return (
    <>
      {type === "select" && (
        <Select
          form={form}
          name={question_text}
          is_required={is_required}
          options={options}
          question_text={question_text}
        />
      )}
      {type === "radio" && (
        <AttributeRadio
          form={form}
          name={question_text}
          options={options}
          question_text={question_text}
        />
      )}
    </>
  );
};

export default AttributeLayout;
