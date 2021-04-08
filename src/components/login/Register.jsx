import React, {useState} from "react";
import useSignUp from "./hooks";

const style = {
    input: "p-1  bg-blue-100 rounded-md w-full",
    button:"rounded-sm bg-red-500 p-2 m-2 text-white w-2/4 border-none hover:bg-red-700 rounded-md",
    buttonSecundary:"rounded-sm bg-blue-500 p-2 m-2 text-white w-2/4 border-none hover:bg-blue-700 rounded-md",
    label: "font-bold text-md p-4",
  };

const Register = ({ userRegister, getUserRegister }) => {
  return (
    <div className="box-content self-center w-full">
      <div className="text-2xl font-medium p-4">Register</div>
      <div className="shadow-2xl box-content self-center w-auto  p-2">
        <div className="p-4">
          <input
            type="text"
            name="email"
            className={style.input}
            placeholder="Email"
            value={userRegister.email || ''}
            onChange={(e) => getUserRegister(e.target.name, e.target.value)}
          />
        </div>
        <div className="p-4">
          <input
            name="password"
            type="text"
            className={style.input}
            placeholder="Password"
            value={userRegister.password || ''}
            onChange={(e) => getUserRegister(e.target.name, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
