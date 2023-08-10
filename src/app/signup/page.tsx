"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>SignUp</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        value={user.username}
        //everything but username are kept unchanged
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        //everything but username are kept unchanged
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        //everything but username are kept unchanged
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        onClick={onSignup}
        className=" p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Signup
      </button>
      <Link
        href="/login"
        className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login
      </Link>
    </div>
  );
};

export default page;
