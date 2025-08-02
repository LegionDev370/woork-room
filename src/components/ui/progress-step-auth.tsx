import type { IDataProgress } from "../../hooks/useStepProgressAuth";
import Icon from "./Icon";

interface ProgressProps {
  currentStep: number;
  steps: IDataProgress[];
}

const ProgressStep = ({ currentStep, steps }: ProgressProps) => {
  return (
    <div className="flex gap-y-1.5 gap-x-[22px]">
      <div className="flex flex-col items-center justify-between gap-[6px]">
        {steps.map(({ isSuccess }, index) => {
          return (
            <>
              {isSuccess ? (
                <>
                  <div
                    className={`w-[24px] h-[24px] rounded-full border-2 bg-white border-none flex items-center justify-center`}
                  >
                    <Icon.correctIcon />
                  </div>
                  {index !== steps.length - 1 && (
                    <div
                      className={`w-[2px] h-[26px] bg-white rounded-[1px]`}
                    ></div>
                  )}
                </>
              ) : (
                <>
                  <div
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    className={`w-[24px] h-[24px] ${
                      index !== currentStep - 1 ? "opacity-30" : ""
                    } rounded-full bg-[rgba(255_255_255_0.3)] border-2 border-white`}
                  ></div>
                  {index !== steps.length - 1 && (
                    <div
                      className={`w-[2px] h-[26px] ${
                        index + 1 !== currentStep && "opacity-30"
                      } bg-white rounded-[1px]`}
                    ></div>
                  )}
                </>
              )}
            </>
          );
        })}
      </div>
      <div className="flex flex-col justify-between text-white text-[18px] font-semibold">
        {steps.map(({ title, isSuccess }, index) => {
          return (
            <>
              {isSuccess ? (
                <span className={`block`}>{title}</span>
              ) : (
                <span
                  className={`block ${
                    index !== currentStep - 1 && "opacity-30"
                  }`}
                >
                  {title}
                </span>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressStep;
