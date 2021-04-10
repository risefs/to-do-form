import React, { useState, useEffect } from "react";
import { createUserWithFirebase, firebase } from "@/firebase";
import { loginIn } from "@/redux/ducks/loginDuck";
import { ToastContainer, toast } from "react-toastify";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "@/components/commons/Modal";
import Register from "../register/Register";

const Login = () => {
  const login = useSelector((store) => store.login);
  const dispatch = useDispatch();

  const style = {
    input: "p-1  bg-blue-100 rounded-md w-full",
    button:
      "rounded-sm bg-red-500 p-2 m-2 text-white w-2/4 border-none hover:bg-red-700 rounded-md",
    buttonSecundary:
      "rounded-sm bg-blue-500 p-2 m-2 text-white w-2/4 border-none hover:bg-blue-700 rounded-md text-center",
    label: "font-bold text-md p-4",
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userRegister, setUserRegister] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  let history = useHistory();

  const handleSubmit = async () => {
    const responseLogin = await dispatch(
      loginIn({ email: user, password: password })
    );
    if (responseLogin) {
      history.push("/dashboard");
    }
  };

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
    setUserRegister({});
  };

  const getUserRegister = (name, value) => {
    setUserRegister({ ...userRegister, [name]: value });
  };

  const createUser = () => {
    if (!userRegister.email) {
      toast("El campo Email es requerido", {
        type: "error",
      });
      return;
    } else if (!userRegister.password) {
      toast("El campo Password es requerido", {
        type: "error",
      });
      return;
    }
    createUserWithFirebase(userRegister)
      .then((res) => {
        toast("Register Successfull", {
          type: "success",
        });
        setIsOpenModal(false);
      })
      .catch((error) => {
        toast(error.message, {
          type: "error",
        });
      });
  };

  useEffect(() => {
    toast(login.error, {
      type: "error",
    });
  }, [login.error]);

  return (
    // <>
    // {isOpenModal ? (
    //   <Modal
    //     buttons={[
    //       { name: "Create", type: "primary", action: () => createUser },
    //     ]}
    //     handleModal={handleModal}
    //     isOpen={isOpenModal}
    //   >
    //     <Register
    //       userRegister={userRegister}
    //       getUserRegister={getUserRegister}
    //     />
    //   </Modal>
    // ) : null}
    //   <div className="box-content self-center w-1/4">
    //     <div className="container text-center p-2">
    //       <p className="text-2xl text-white font-medium">Login Here</p>
    //     </div>
    //     <div className="shadow-2xl box-content self-center w-auto bg-gray-400 p-2">
    //       <div className="p-4">
    //         <input
    //           type="text"
    //           name="email"
    //           className={style.input}
    //           placeholder="Email"
    //           value={user}
    //           onChange={(e) => {
    //             setUser(e.target.value);
    //           }}
    //         />
    //       </div>
    //       <div className="p-4">
    //         <input
    //           name="password"
    //           type="text"
    //           className={style.input}
    //           placeholder="Password"
    //           value={password}
    // onChange={(e) => {
    //   setPassword(e.target.value);
    // }}
    //         />
    //       </div>
    //       <div className="p-4 flex justify-center">
    //         <button onClick={handleSubmit} className={style.button}>
    //           Login
    //         </button>
    //         <button onClick={handleModal} className={style.buttonSecundary}>
    //           Register
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <ToastContainer />
    // </>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div> */}

        {isOpenModal ? (
          <Modal
            buttons={[
              { name: "Create", type: "primary", action: () => createUser },
            ]}
            handleModal={handleModal}
            isOpen={isOpenModal}
          >
            <Register
              userRegister={userRegister}
              getUserRegister={getUserRegister}
            />
          </Modal>
        ) : null}
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Email"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="relative mb-4">
            <button
              onClick={handleSubmit}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>
          </div>
          <div className="relative mb-4">
            <button
              onClick={handleModal}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Register
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
