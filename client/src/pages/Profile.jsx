import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" className="flex flex-col gap-4">
        <img
          src={currentUser.progilePhoto}
          className="w-24 h-24 rounded-full mx-auto cursor-pointer object-cover"
          alt=""
        />
        <input
          type="text"
          className="bg-slate-200 rounded-lg p-3 outline-none"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
        />
        <input
          type="email"
          className="bg-slate-200 rounded-lg p-3 outline-none"
          id="email"
          placeholder="Email"
          defaultValue={currentUser.email}
        />
        <input
          type="text"
          className="bg-slate-200 rounded-lg p-3 outline-none"
          id="Password"
          placeholder="Password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="cursor-pointer text-red-700">Delete Accaunt</span>
        <span className="cursor-pointer text-red-700">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
