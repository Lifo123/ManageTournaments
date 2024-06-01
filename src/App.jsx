import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export const AuthContext = createContext();
export const UserContext = createContext();

function App() {
  const [Auth, setAuth] = useState(localStorage.getItem('Auth') === 'true');
  const [UserData, setUserData] = useState(localStorage.getItem('User') || null);

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
        <BrowserRouter>
          <AppRoutes Auth={Auth} />
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
