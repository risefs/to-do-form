import React, { useState, useEffect } from "react";
import { createUserWithFirebase,firebase } from "../../firebase";
import { loginIn } from "../../redux/ducks/loginDuck";
import { ToastContainer, toast } from "react-toastify";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "../commons/Modal";
import Register from "../login/Register";

// const Login = ({ fetching, loggedIn , loginIn }) => {
  
const Login = () => {

  const login = useSelector(store => store.login );
  const dispatch = useDispatch();
  
  // console.log("login", login);

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
    await dispatch(loginIn({ email: user, password: password }));
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
    history.push("/dashboard");
  }, [login.loggedIn])

  if (login.fetching) return <h2>Cargando....</h2>;

  return (
    <>
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
      <div className="box-content self-center w-1/4">
        <div className="container text-center p-2">
          <p className="text-2xl text-white font-medium">Login Here</p>
        </div>
        <div className="shadow-2xl box-content self-center w-auto bg-gray-400 p-2">
          <div className="p-4">
            <input
              type="text"
              name="email"
              className={style.input}
              placeholder="Email"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div className="p-4">
            <input
              name="password"
              type="text"
              className={style.input}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="p-4 flex justify-center">
            <button onClick={handleSubmit} className={style.button}>
              Login
            </button>
            <button onClick={handleModal} className={style.buttonSecundary}>
              Register
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

// const mapStateToProps = (state) => {
//   console.log("state", state);
//   return {
//     fetching: state.login.fetching,
//     loggedIn: state.login.loggedIn
//   };
// };

// export default connect(mapStateToProps, { loginIn })(Login);

export default Login;
