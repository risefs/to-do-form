import { db } from "../../firebase";

//Constans
let initialState = {
  fetching: false,
  tasks: [],
};

const GET_DATA = "GET_DATE";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const GET_DATA_ERROR = "GET_DATE_ERROR";

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, fetching: true };
    case GET_DATA_SUCCESS:
      return { ...state, fetching: false, tasks: action.payload };
    case GET_DATA_ERROR:
      return { ...state, fetching: false };
    default:
        return state;
  }
}

//actions
export const getTaskList = () => (dispatch) => {
  dispatch({
    type: GET_DATA,
  });

  db.collection("list").onSnapshot((querySnapshot) => {
      let tasks = [];
    querySnapshot.forEach((doc) => {
        const response = { ...doc.data(), id: doc.id };
        tasks.push(response);
    });
    dispatch({
      type: GET_DATA_SUCCESS,
      payload: tasks,
    });
  });
};
