import React, { useEffect } from "react";
import { useGetProfile } from "../hooks/requests/useGetProfile";
import { useUserStore } from "../store/user.store";

const GetInitialData = () => {
  const { data } = useGetProfile();
  const { setUserData, setLoggedIn } = useUserStore();
  const user = data?.data;
  useEffect(() => {
    if (user) {
      setUserData(user);
      setLoggedIn(true);
    }
  }, [user]);
  return <></>;
};

export default GetInitialData;
