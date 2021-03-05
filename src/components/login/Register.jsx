import React from "react";
import useSignUp from "./hooks";
import {useEffect} from "react";

const Register = (props) => {

    const style = {
        input: "p-1  bg-blue-100 rounded-md w-full",
        button:"rounded-sm bg-red-500 p-2 m-2 text-white w-2/4 border-none hover:bg-red-700 rounded-md",
        buttonSecundary:"rounded-sm bg-blue-500 p-2 m-2 text-white w-2/4 border-none hover:bg-blue-700 rounded-md",
        label: "font-bold text-md p-4",
      };
      const { user, handleInputChange } = props;

  return (
    <div className="box-content self-center w-full">
        <div className="text-2xl font-medium p-4">
            Register
        </div>
        <div className="shadow-2xl box-content self-center w-auto  p-2">
          <div className="p-4">
            <input
              type="text"
              name="email"
              className={style.input}
              placeholder="Email"
              value={user.email || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-4">
            <input
              name="password"
              type="text"
              className={style.input}
              placeholder="Password"
              value={user.password || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
    </div>
  );
};
export default Register;
