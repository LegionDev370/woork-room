import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Illustration from "../assets/icons/Illustration.svg";
import "../assets/styles/sign-up.css";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import { useLogin } from "../hooks/requests/useLogin";
import useCheckAuth from "../hooks/requests/useCheckAuth";
import { useUserStore } from "../store/user.store";

interface ILoginForm {
  email: string;
  password: string;
}

const SignInPage = () => {
  const { register, handleSubmit } = useForm<ILoginForm>();
  const { mutateAsync, isPending, isSuccess, isError, error } = useLogin();
  const { setLoggedIn } = useUserStore();
  const { isSuccess: checkAuthSuccess, data, isFetching } = useCheckAuth();
  const navigate = useNavigate();
  const onLogin: SubmitHandler<ILoginForm> = ({ email, password }) => {
    mutateAsync({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("success");
      setTimeout(() => {
        setLoggedIn(true);
        navigate("/");
      }, 2000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error["response"].data.message);
    }
  }, [isError]);

  if (isFetching) {
    return <></>;
  }

  const statusAuth = data?.data;

  return (
    <>
      {checkAuthSuccess && statusAuth ? (
        <Navigate to={"/"} />
      ) : (
        <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
          <div className="flex rounded-[24px] overflow-hidden h-full">
            <div className="bg-[#3F8CFF] w-[100%] max-w-[50%] pl-[84px]">
              <div className="flex flex-col h-full justify-around items-start">
                <div className="flex items-center mt-4 text-white gap-x-8">
                  <Icon.companyLogo />
                  <span className="brand-title">Woorkroom</span>
                </div>
                <p className="description text-white text-[40px] max-w-[400px]">
                  Your place to work Plan. Create. Control.
                </p>
                <img
                  width={500}
                  height={373}
                  src={Illustration}
                  alt="Illustration"
                />
              </div>
            </div>
            <div className="w-[100%] max-w-[50%] bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
              <div className="flex flex-col max-w-[403px] mx-auto items-center pt-[115px]">
                <h2 className="signin-title">Sign In to Woorkroom</h2>
                <form
                  onSubmit={handleSubmit(onLogin)}
                  className="w-full flex flex-col gap-y-[31px] mt-[33px]"
                >
                  <Input
                    inputClassName="w-full"
                    type="email"
                    label="Email Address"
                    placeholder="youremail@gmail.com"
                    {...register("email")}
                  />
                  <Input
                    inputClassName="w-full"
                    label="Password"
                    type={"password"}
                    placeholder="••••••••"
                    {...register("password")}
                    eyeIcon={true}
                  />
                  <div className="flex justify-between">
                    <div className="flex gap-x-2">
                      <input id="save-me" type="checkbox" />
                      <label
                        htmlFor="save-me"
                        className="font-medium text-[16px] text-[rgb(125_133_146)]"
                      >
                        Remember me
                      </label>
                    </div>
                    <span className="font-medium text-[16px] text-[rgb(125_133_146)] cursor-pointer">
                      Forgot Password?
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-y-[20px]">
                    <Button
                      type="submit"
                      variant="medium"
                      className="flex items-center gap-x-2"
                    >
                      {isPending ? (
                        <Loader />
                      ) : (
                        <>
                          {"Sign In"}
                          <Icon.rightArrowIcon />
                        </>
                      )}
                    </Button>
                    <Link
                      to={"/sign-up"}
                      className="font-semibold text-[16px] text-[#3F8CFF]"
                    >
                      Don’t have an account?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SignInPage;
