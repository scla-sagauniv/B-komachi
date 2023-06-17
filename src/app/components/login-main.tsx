"use client";

import React,{useEffect,useState} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


export default function Main() {
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const LogIn = () => {
    window.location.href = "/SNS";
    console.log("test");
  };
  return (
    <>
      <div className="w-80 h-full flex justify-center flex-col items-center">
        <div className="w-full flex flex-col">
          <p className="">e-mail</p>
          {/* <input type="text" className="w-full min-w-44 border border-black" /> */}
          <input 
              value={password}
              type={passwordType}
              placeholder={"Type New Password"}
              autoComplete="new-password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full min-w-44 border border-black Password"
            />

            {/* 非表示 */}
            {passwordType === "text" &&(
              <VisibilityOffIcon
                onClick={() => setPasswordType("text")}
                className="Password__visual"
              />
            )}

            {/* 表示 */}
            {passwordType === "type" &&(
              <VisibilityIcon
                onClick={() => setPasswordType("password")}
                className="Password__visual"
              />
            )}
        </div>
        <div className="w-full flex flex-col">
          <p className=" mt-3">password</p>
          <input type="text" className=" min-w-44 border border-black" />
        </div>
        <div className="flex flex-col">
          <button className="mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            sign up
          </button>
          <button
            onClick={LogIn}
            className="mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            log in
          </button>
        </div>
      </div>
    </>
  );
}
