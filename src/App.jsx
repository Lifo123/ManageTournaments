import React, { Suspense, lazy, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
const LandingPage = lazy(() => import("./Pages/LadingPage/LandingPage"));

export const Context = React.createContext();

const LogReg = lazy(() => import("./Pages/LoginRegister/LogReg"));
const PageNotFound = lazy(() => import("./Pages/PageNoFound/PageNotFound"));

function App() {
  const [Auth, setAuth] = useState(localStorage.getItem('Auth') === 'true');

  return (
    <>
      <Context.Provider value={[Auth, setAuth]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Suspense fallback={<p>Cargando</p>}><LandingPage /></Suspense>} />
            <Route path="*" element={<Suspense fallback={<p>Cargando</p>}><PageNotFound /></Suspense>} />

            <Route path="Login" element={<Suspense fallback={<p>Cargando</p>}><LogReg m={'Log'} /></Suspense>}></Route>
            <Route path="Register" element={<Suspense fallback={<p>Cargando</p>}><LogReg m={'Reg'} /></Suspense>}></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}

export default App
