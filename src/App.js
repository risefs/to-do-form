import React, { useState,useEffect } from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import Login from './components/login/Login';
import ToDoForm from './components/to-do-form/ToDoForm';
import Modal from './components/Modal';
import Register from './components/login/Register';

import useSignUp from "./components/login/hooks";



function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleInputChange, handleSubmit,clearuser } = useSignUp();

  const openModal = (e) => {
    setIsOpen(!isOpen);
    clearuser();
  }

  const handlerRegister =  () => {
    handleSubmit('register').then( (response) => {
      if( response.additionalUserInfo.isNewUser){
        openModal(false);
        toast("Register Successfull", {
          type: "success",
        });
      }
    });
  }

  useEffect(() => {
    console.log('entro aca');
  })

  return (
    <>
      {isLogin ?
        <div className="flex flex-col justify-center min-h-screen">
          <ToDoForm />
        </div>
        :
        <div>
          <div className="flex flex-col justify-center min-h-screen" style={{ backgroundImage: "url(/loginFondo.jpg)" }}>
            <Login 
            openModal={openModal}
            isOpen={isOpen}
            />
            {isOpen ?
              <Modal
                buttons={[{ name: "Create", type: "primary", action:handlerRegister }]}
                openModal={openModal}
                isOpen={isOpen}
              >
                <Register 
                  user={user}
                  handleInputChange={handleInputChange}
                />
              </Modal>
              :
              null
            }
          </div>
        </div>
      }
      <ToastContainer />
    </>
  );
}
export default App;
