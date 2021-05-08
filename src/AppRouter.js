import Component, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ToDoForm from "./pages/to-do-form/ToDoForm";

const AppRouter = () => {
  const [token, setToken] = useState();

  
  return (
    <>
      <div>
          <BrowserRouter>
            <Route exact path="/" component={ToDoForm} />
          </BrowserRouter>
        </div>
    </>
  );
};

export default AppRouter;
