import React, { lazy, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Context = React.createContext();
import GrafficMatch from "./Components/GrafficMatch/GrafficMatch";


function App() {
  const [Auth, setAuth] = useState(localStorage.getItem('Auth') || false);

  return (
    <>
      <Context.Provider value={[Auth, setAuth]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GrafficMatch />} />
            <Route path="*" element={<p>Error Page not found</p>} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}

export default App
