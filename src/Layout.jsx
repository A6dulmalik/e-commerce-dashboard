import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import AppContext from "./context/AppContext";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { openSidebar } = useContext(AppContext);
  return (
    <>
      <div className="border border-b  ">
        <Navbar />
      </div>
      <div className="flex">
        <div
          className={`border border-r border-t-0 h-vh sm:translate-x-0 pt-6 px-4 h-max ${
            openSidebar
              ? "-translate-x-full transition-all"
              : "translate-x-0 transition-all"
          }`}
        >
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
