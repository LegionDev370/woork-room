import { useGetProfileQuestions } from "../../hooks/requests/useGetProfileQuestions";
import Select from "../ui/select";

export interface IOptions {
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

const Step2 = () => {
  const { data, isError, isSuccess } = useGetProfileQuestions(2);
  const questions: IQuestions[] = data?.data;
  return (
    <div className="flex flex-col gap-y-6">
      {questions &&
        questions.length >= 1 &&
        questions.map((question) => {
          if (question.question_type === "select") {
            return (
              <Select
                key={question.id}
                question_text={question.question_text}
                options={question.options}
              />
            );
          }
        })}
    </div>
  );
};

export default Step2;
