import GetInitialData from "../components/get-inital-data";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <GetInitialData />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
