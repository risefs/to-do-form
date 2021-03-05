import { useState } from 'react'
import firebase from 'firebase/app';


const useSignUp = () => {
  const [user, setuser] = useState({});

  const createUser =  async (user) => {
      return await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  }

  const clearuser = () => {
    setuser({});
  }

  const handleSubmit =   (requestType) => {
      if(requestType==='register') return createUser(user);
  }
  const handleInputChange = (event) => {
    event.persist();
    setuser(user => ({ ...user, [event.target.name]: event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    user,
    clearuser
  };
}

export default useSignUp;