import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 outline-none rounded-lg"
        />
        <input
          type="email"
          placeholder="Emeil"
          id="email"
          className="bg-slate-100 p-3 outline-none rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 outline-none p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Sing Up
        </button>
        <button className="bg-red-600 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Continue with google
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <NavLink to="/signin">
          <span className="text-blue-500">Sign In</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;
