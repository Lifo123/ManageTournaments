import React, { lazy, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Context = React.createContext();


import Login from "./Components/Login";

const Home = lazy(() => import('./Components/Home'))
const About = lazy(() => import('./Components/About'))

const ModifyTable = lazy(() => import("./Components/Private/ModifyTable"));
const PrivateRoutes = lazy(() => import("./Components/Private/PrivateRoutes"));
const Admin = lazy(() => import('./Components/Private/Admin'))


function App() {
 const [Auth, setAuth] = useState(localStorage.getItem('Auth') || false);

  return (
    <>
      <Context.Provider value={[Auth, setAuth]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<p>Error Page not found</p>} />

            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />

            <Route element={<PrivateRoutes isAuth={Auth} />}>
              <Route path="Admin" element={<Admin />} />
              <Route path="Modify" element={<ModifyTable />} />
            </Route >
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}

export default App
