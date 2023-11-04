import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/signin");
    } catch (err) {
      setError(true);
      setLoading(false);
    }
    usernameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setError(false);
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-200 p-3 outline-none rounded-lg"
          ref={usernameRef}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-200 p-3 outline-none rounded-lg"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-200 outline-none p-3 rounded-lg"
          ref={passwordRef}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "...loading" : "Sign Up"}
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
      <p className="text-red-400 mt-5">{error && "Somthing went wrong!"}</p>
    </div>
  );
};

export default SignUp;
