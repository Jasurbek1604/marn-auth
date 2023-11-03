import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-slate-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold">Auth App</h1>
          </Link>
          <ul className="flex gap-4">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/signin">
              <li>Sign In</li>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
