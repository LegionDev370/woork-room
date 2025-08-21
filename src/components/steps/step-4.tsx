import type { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any>;
}

const Step4 = ({ form }: Props) => {
  return (
    <div className="flex flex-col gap-y-6">
      <input type="text" {...form.register("sassas")} />
    </div>
  );
};

export default Step4;
