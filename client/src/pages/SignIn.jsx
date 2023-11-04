import React from "react";
import { NavLink } from "react-router-dom";

const SingIn = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7">Sing In</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="bg-slate-200 outline-none rounded-lg p-3"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-200 outline-none rounded-lg p-3"
        />
        <button className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80">
          Sign In
        </button>
        <button className="bg-red-600 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80">
          Sign In
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have not an account?</p>
        <NavLink to="/signup">
          <span className="text-blue-500">Sing Up</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SingIn;
