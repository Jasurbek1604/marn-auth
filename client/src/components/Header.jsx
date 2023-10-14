import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-slate-200">
        <div className="flex justify-between items-senter max-w-6xl mx-auto p-3">
          <h1 className="font-bold">Auth App</h1>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
      {<Outlet />}
    </div>
  );
};

export default Header;
