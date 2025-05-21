import { Outlet } from "react-router-dom";

import { AppNavbar } from "@components";

const Layout = () => {
  return (
    <>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
