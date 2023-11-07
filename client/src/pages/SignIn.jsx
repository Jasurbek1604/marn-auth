import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  singInStart,
  singInSuccess,
  singInFailrule,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

const SingIn = () => {
  const emailRef = useRef();
  const pwRef = useRef();
  const { error, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (emailRef.current.value === "" || pwRef.current.value === "") {
      alert("No input data!");
    } else {
      try {
        dispatch(singInStart());
        const res = await fetch("/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: pwRef.current.value,
          }),
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(singInFailrule(data));
          return;
        }
        dispatch(singInSuccess(data));
        navigate("/");
      } catch (err) {
        dispatch(singInFailrule(err));
      }
      emailRef.current.value = "";
      pwRef.current.value = "";
      setError(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7">Sing In</h1>
      <form action="" className="flex flex-col gap-4" onSubmit={handelSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="bg-slate-200 outline-none rounded-lg p-3"
          ref={emailRef}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-200 outline-none rounded-lg p-3"
          ref={pwRef}
        />
        <button
          disabled={loading}
          className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "...loading" : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <NavLink to="/signup">
          <span className="text-blue-500">Sing Up</span>
        </NavLink>
      </div>
      <p className="text-red-400 mt-5">
        {error ? error.message || "Somthing went wrong!" : ""}
      </p>
    </div>
  );
};

export default SingIn;
