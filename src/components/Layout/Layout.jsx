import { Outlet } from "react-router";
import { AppBar } from "../AppBar/AppBar.jsx";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
