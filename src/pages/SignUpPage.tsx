import { useEffect, useState } from "react";
import Step1 from "../components/steps/step-1";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import ProgressStepAuth from "../components/ui/progress-step-auth";
import useStepProgressAuth from "../hooks/useStepProgressAuth";
import Step2 from "../components/steps/step-2";
import Step3 from "../components/steps/step-3";
import Step4 from "../components/steps/step-4";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCheckEmail } from "../hooks/requests/useCheckEmail";
import { toast } from "react-toastify";
const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [nextStep, setNextStep] = useState<boolean>(false);
  const form = useForm();
  const totalStep = 4;
  const { progressData, setProgressData } = useStepProgressAuth();
  const handleSavePreviusStep = () => {
    const findStep = progressData.find((step) => step.step === currentStep - 1);
    findStep.isSuccess = true;
    setProgressData([...progressData]);
  };
  const incrementCurrentStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prevState) => prevState + 1);
    }
  };

  const decrementCurrentStep = () => {
    setCurrentStep((prevState) => prevState - 1);
  };

  useEffect(() => {
    if (currentStep !== 1) {
      handleSavePreviusStep();
    }
  }, [currentStep]);
  const getCurrentStep = () => {
    switch (currentStep) {
      case 1: {
        return <Step1 form={form} setNextStep={setNextStep} />;
      }
      case 2: {
        return <Step2 form={form} setNextStep={setNextStep} />;
      }
      case 3: {
        return <Step3 form={form} setNextStep={setNextStep} />;
      }
      case 4: {
        return <Step4 />;
      }
    }
  };

  const { mutateAsync, data, isSuccess } = useCheckEmail();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    if (currentStep < 4) {
      return incrementCurrentStep();
    }
    console.log(data);
  };

  useEffect(() => {
    if (isSuccess) {
      const status = data.data;
      if (!status) {
        return incrementCurrentStep();
      }
      toast.error("email already exists");
    }
  }, [isSuccess]);

  const onCheckEmail = () => {
    if (currentStep <= 1) {
      const email = form.getValues("email");
      mutateAsync(email);
    }
  };

  return (
    <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
      <div className="flex h-full gap-x-8">
        <div className="bg-[#3F8CFF] w-[100%] pt-[60px] rounded-[24px] max-w-[25%] pl-[40px]">
          <div className="flex flex-col gap-y-14 h-full items-start">
            <div className="mt-4 text-white gap-x-8">
              <Icon.companyLogo />
            </div>
            <p className="description text-white text-[40px] max-w-[400px]">
              Get started
            </p>
            <ProgressStepAuth steps={progressData} currentStep={currentStep} />
          </div>
        </div>
        <div className="w-[100%] justify-between max-w-[70%] rounded-[24px]  bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex flex-col w-full mx-auto items-center pt-[55px] h-full">
            <span className="font-bold text-[14px] text-[#3F8CFF]">
              Step {currentStep}/{totalStep}
            </span>
            <h2 className="signin-title">
              {progressData[currentStep - 1].title}
            </h2>
            <form
              className="w-full h-full flex flex-col justify-between"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex w-full max-w-[403px] mx-auto flex-col gap-y-[15px] mt-[33px]">
                {getCurrentStep()}
              </div>
              <div
                className={`border-t-2 border-[#E4E6E8] pt-[10px] pb-[10px] ${
                  currentStep !== 1 ? "flex" : ""
                }`}
              >
                {currentStep !== 1 && (
                  <Button
                    variant="small"
                    type="button"
                    onClick={() => decrementCurrentStep()}
                    className={`flex ml-[50px] previus items-center gap-x-3`}
                  >
                    <Icon.leftArrowIcon />
                    Previous
                  </Button>
                )}
                <Button
                  variant="small"
                  type={currentStep <= 1 ? "button" : "submit"}
                  disabled={!nextStep}
                  onClick={onCheckEmail}
                  className={`flex ml-auto mr-10 items-center gap-x-3 ${
                    !nextStep ? "disabled" : ""
                  }`}
                >
                  Next Step
                  <Icon.rightArrowIcon />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
