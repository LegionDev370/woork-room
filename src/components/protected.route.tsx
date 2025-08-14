import React from "react";
import useCheckAuth from "../hooks/requests/useCheckAuth";
import { Navigate } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}

const ProtectedRouteComponent = ({ children }: Props) => {
  const { isSuccess, data, isFetching } = useCheckAuth();

  if (isFetching) {
    return;
  }

  const status = data?.data;

  return <>{isSuccess && status ? children : <Navigate to={"sign-in"} />}</>;
};

export default ProtectedRouteComponent;
