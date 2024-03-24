import React, { useState } from "react";
import "./Loginsignup.css";

function LoginSignup() {
  const [action, setAction] = useState("Sign up");

  return (
    <div className="container flex flex-col justify-center items-center h-screen bg-black text-white">
      <div className="box border rounded-lg p-5 flex flex-col">
      <div className="header m-3">
        <div className="text text-center font-bold text-2xl">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs m-5 flex gap-6 flex-col">
        {action === "Login" ? (
          null
        ) : (
          <div className="input">
            <img src="" alt="" />
            <input type="text" name="" id="" className="border p-1 rounded-lg" placeholder="Name"/>
          </div>
        )}

        <div className="input">
          <img src="" alt="" />
          <input type="email" name="" id="" className="border p-1 rounded-lg" placeholder="Email"/>
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="password" name="" id="" className="border p-1 rounded-lg" placeholder="Password"/>
        </div>
      </div>
      {action === "Sign up" ? (
        null
      ) : (
        <div className="forgot-password text-center ">
          lost password? <span className="cursor-pointer text-cyan-500">Click Here</span>
        </div>
      )}

      <div className="submit-container flex justify-center">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign up");
          }}
        >
          SignUp
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
      </div>
  );
}

export default LoginSignup;
