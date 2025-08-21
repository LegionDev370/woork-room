import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import { useGetProfileQuestions } from "../../hooks/requests/useGetProfileQuestions";
import AttributeLayout from "../attribute-layout";

export interface IOptions {
  id: string;
  option_text: string;
  option_value: string;
}

export interface IQuestions {
  id: string;
  question_text: string;
  question_type: string;
  is_required: boolean;
  options?: IOptions[];
}

interface Props {
  setNextStep: Dispatch<SetStateAction<boolean>>;
  form: UseFormReturn<any>;
}

const Step2 = ({ setNextStep, form }: Props) => {
  const { data, isError, isSuccess } = useGetProfileQuestions(2);
  const questions: IQuestions[] = data?.data;
  useEffect(() => {
    setNextStep(true);
  }, []);
  return (
    <div className="flex flex-col gap-y-6">
      {questions &&
        questions.length >= 1 &&
        questions.map((question) => (
          <AttributeLayout
            form={form}
            key={question.id}
            is_required={question.is_required}
            question_id={question.id}
            question_text={question.question_text}
            type={question.question_type}
            options={question.options}
          />
        ))}
    </div>
  );
};

export default Step2;
