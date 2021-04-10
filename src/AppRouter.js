import Component, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/login/Login";

const AppRouter = () => {
  const [token, setToken] = useState();

  
  return (
    <>
      <div>
        <div
          className="flex flex-col justify-center min-h-screen"
          style={{ backgroundImage: "url(/pets_fondo.jpg)" }}
        >
          <BrowserRouter>
            <Route
              exact
              path="/"
              component={() => <Login setToken={setToken} />}
            />
            <PrivateRoute  path="/dashboard" component={Dashboard} />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default AppRouter;
