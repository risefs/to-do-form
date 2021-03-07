import React from "react";

const Login = (props) => {
  const style = {
    input: "p-1  bg-blue-100 rounded-md w-full",
    button:"rounded-sm bg-red-500 p-2 m-2 text-white w-2/4 border-none hover:bg-red-700 rounded-md",
    buttonSecundary:"rounded-sm bg-blue-500 p-2 m-2 text-white w-2/4 border-none hover:bg-blue-700 rounded-md text-center",
    label: "font-bold text-md p-4",
  };

  // const { user, handleInputChange, handleSubmit } = useSignUp();
  const {isOpen, openModal,user, handleInputChange, signIn} = props;

  return (
    <>
      <div className="box-content self-center w-1/4">
        <div className="container text-center p-2">
          <p className="text-2xl text-white font-medium">Login Here</p>
        </div>
          <div className="shadow-2xl box-content self-center w-auto bg-gray-400 p-2">
            <div className="p-4">
              <input type="text"
                name="email"
                className={style.input}
                placeholder="Email"
                value={ user.email || '' }
                onChange={handleInputChange}
              />
            </div>
            <div className="p-4">
              <input
                name="password"
                type="text"
                className={style.input}
                placeholder="Password"
                value={user.password || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="p-4 flex justify-center">
              <button className={style.button} onClick={ () => signIn('login') } >
                Login
              </button>
              <span className={style.buttonSecundary}
                onClick={ () => {openModal(isOpen)} }
              >
                Register
              </span>
            </div>
          </div>
      </div>
    </>
  );
};

export default Login;
