import { createStore, combineReducers, compose, applyMiddleware } from "redux";
//ducks
import loginReducer from "../redux/ducks/loginDuck";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  login: loginReducer
});

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function generateStore() {
  let store = createStore(rootReducer,
                            composeEnhancers(applyMiddleware(thunk)) 
                );
        return store
}
