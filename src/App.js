import React, { useState } from 'react';
import './App.css';

import Login from './components/login/Login';
import ToDoForm from './components/to-do-form/ToDoForm';
import Modal from './components/Modal';
import Register from './components/login/Register';

function App() {


  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    setIsOpen(!isOpen);
  }

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
                buttons={[{ name: "Create", type: "primary" }]}
                openModal={openModal}
                isOpen={isOpen}
              >
                <Register />
              </Modal>
              :
              null
            }
          </div>
        </div>
      }

    </>
  );
}
export default App;
