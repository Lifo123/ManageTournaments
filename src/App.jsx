import React, { lazy, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Context = React.createContext();
import LandingPage from "./Pages/LadingPage/LandingPage";
import PageNotFound from "./Pages/PageNoFound/PageNotFound";


function App() {
  const [Auth, setAuth] = useState(localStorage.getItem('Auth') === 'true');

  return (
    <>
      <Context.Provider value={[Auth, setAuth]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}

export default App
