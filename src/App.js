import React, { useState } from 'react';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import Login from '@/pages/login/Login';
import ToDoForm from './to-do-form/ToDoForm';
import Modal from './components/commons/Modal';
import Register from './pages/register/Register'; 

import useSignUp from "./hooks/loginHooks";
import {connect} from 'react-redux';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleInputChange, handleSubmit, clearUser } = useSignUp();

  const openModal = (e) => {
    setIsOpen(!isOpen);
    clearUser();
  };
  

  const handlerRegister = () => {
    handleSubmit("register").then((response) => {
      if (response.additionalUserInfo.isNewUser) {
        openModal(false);
        toast("Register Successfull", {
          type: "success",
        });
      }
    });
  };

  const signIn = () => {
    handleSubmit("login")
      .then((response) => {
        setIsLogin(true);
      })
      .catch((error) => {
        let errorCode = error.code,
          errorMessage = error.message;

        console.log(` code : ${errorCode} meessage  ${errorMessage} `);
      });
  };

  return (
    <>
      {isLogin ? (
        <div className="flex flex-col justify-center min-h-screen">
          <ToDoForm />
        </div>
      ) : (
        <div>
          <div
            className="flex flex-col justify-center min-h-screen"
            style={{ backgroundImage: "url(/loginFondo.jpg)" }}
          >
            <Login
              openModal={openModal}
              isOpen={isOpen}
              user={user}
              handleInputChange={handleInputChange}
              signIn={signIn}
            />
            {isOpen ? (
              <Modal
                buttons={[
                  { name: "Create", type: "primary", action: handlerRegister },
                ]}
                openModal={openModal}
                isOpen={isOpen}
              >
                <Register user={user} handleInputChange={handleInputChange} />
              </Modal>
            ) : null}
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}


export default App;
