import React, { Suspense, createContext, lazy, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";


const LandingPage = lazy(() => import("./Pages/LadingPage/LandingPage"));
const LogReg = lazy(() => import("./Pages/LoginRegister/LogReg"));
const PageNotFound = lazy(() => import("./Pages/PageNoFound/PageNotFound"));

export const AuthContext = createContext();
export const UserContext = createContext();

function App() {
  const [Auth, setAuth] = useState(localStorage.getItem('Auth') === 'true');
  const [UserData, setUserData] = useState(null);

  return (
    <>
      <AuthContext.Provider value={{ Auth, setAuth }}>
        <UserContext.Provider value={{ UserData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Suspense fallback={<p>Cargando</p>}><LandingPage /></Suspense>} />
              <Route path="*" element={<Suspense fallback={<p>Cargando</p>}><PageNotFound /></Suspense>} />

              <Route path="Login" element={<Suspense fallback={<p>Cargando</p>}><LogReg m={'Log'} /></Suspense>}></Route>
              <Route path="Register" element={<Suspense fallback={<p>Cargando</p>}><LogReg m={'Reg'} /></Suspense>}></Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </>
  )
}

export default App
