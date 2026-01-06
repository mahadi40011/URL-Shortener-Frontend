import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
