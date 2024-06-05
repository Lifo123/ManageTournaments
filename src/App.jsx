import React, { createContext, useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

//Import JS
import LifoFunct from './Functions/Sort.js'
import Alert from "./Components/Alert/Alert.jsx";

//Global Context
export const AuthContext = createContext();
export const UserContext = createContext();
export const FunctContext = createContext();

function App() {
  //Global Context
  const [Auth, setAuth] = useState(localStorage.getItem('Auth') === 'true');
  const [UserData, setUserData] = useState(localStorage.getItem('User') || null);

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, time) => {
    setAlert({
      message: message,
      type: type,
      time: time || 'infinite',
    });
  };



  useEffect(() => {
    localStorage.setItem('Auth', Auth);
  }, [Auth])

  useEffect(() => {
    localStorage.setItem('User', UserData)
  }, [UserData]);

  useEffect(() => {
    if (UserData !== null) {
      setUserData(UserData.split(','));
    }
  }, [])




  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      <UserContext.Provider value={{ UserData, setUserData }}>
        <FunctContext.Provider value={{ LifoFunct, showAlert }}>
          <HashRouter>
            <AppRoutes Auth={Auth} />
          </HashRouter>
          {alert ? <Alert data={alert} funct={setAlert} /> : null}
        </FunctContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
