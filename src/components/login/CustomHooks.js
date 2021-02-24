import { useState } from 'react'
import firebase from 'firebase/app';


const useSignUp = () => {
  const [inputs, setInputs] = useState({});

  const createUser = (user) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        console.log('logeado', user);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      createUser(inputs);
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useSignUp;