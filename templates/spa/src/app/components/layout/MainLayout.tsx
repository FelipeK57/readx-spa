import { Outlet } from "react-router";
import { Navbar } from "../shared/Navbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
