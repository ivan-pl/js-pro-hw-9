import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => (
  <div>
    <Outlet />
  </div>
);

export default Layout;
