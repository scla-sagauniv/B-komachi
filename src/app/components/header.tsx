"use client";
import React, { useEffect, useState } from "react";
// import username from "./login-main";
import { useContext } from "react";
import { UserNameContext } from "../layout";

const Header = (): JSX.Element => {
  // const Header = () => {
  //const [username] = useState();
  //const { username } = this.state;
  const { userName } = useContext(UserNameContext);

  console.log("username", userName);
  return (
    <header className="fixed top-0 w-full bg-rose-500 p-4 z-10">
      <nav className="flex justify-between mx-auto container items-center">
        <div className="text-white font-bold text-4xl">PROITIGO</div>
        <div className="space-x-12">
          <a
            href=""
            className="text-white font-bold text-3xl no-underline hover:underline"
          >
            {userName}
          </a>
          <a
            href=""
            className="text-white font-bold text-3xl no-underline hover:underline"
          >
            ×
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
