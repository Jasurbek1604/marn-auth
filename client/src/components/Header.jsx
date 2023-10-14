import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Auth App</h1>
          <ul>
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
