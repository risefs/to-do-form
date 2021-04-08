import { signInWithEmail } from "../../firebase";
// constans
let initialState = {
  loggedIn: false,
  fetching: false,
};

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

// reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, fetching: true };
    case LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, loggedIn:true ,fetching: false, ...action.payload };
    case LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}

//actions
export const loginIn = (user = null) => (dispatch) => {

  dispatch({
    type: LOGIN,
  });

  if(user !== null){
    return signInWithEmail(user)
      .then((response) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            email: response.user.email,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: e.message,
        });
      });
  }
  

};
