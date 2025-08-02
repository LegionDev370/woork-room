import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const AppWrapperLayout = () => {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default AppWrapperLayout;
