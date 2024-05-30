import Loading from "./Components/Loading/Loading";
import React, { Suspense, createContext, lazy, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";



const LandingPage = lazy(() => import("./Pages/LadingPage/LandingPage"));
const LogReg = lazy(() => import("./Pages/LoginRegister/LogReg"));
const PageNotFound = lazy(() => import("./Pages/PageNoFound/PageNotFound"));

//Private
const PrivateRoutes = lazy(() => import("./Pages/Private/PrivateRoutes"));
const Home = lazy(() => import('./Pages/Private/Home/Home'));
const Profile = lazy(() => import('./Pages/Private/Profile/Profile'))

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
              <Route path="/" element={<Suspense fallback={<Loading t={1} />}><LandingPage /></Suspense>} />
              <Route path="*" element={<Suspense fallback={<Loading t={1} />}><PageNotFound /></Suspense>} />

              <Route path="Login" element={<Suspense fallback={<Loading t={1} />}><LogReg m={'Log'} /></Suspense>}></Route>
              <Route path="Register" element={<Suspense fallback={<Loading t={1} />}><LogReg m={'Reg'} /></Suspense>}></Route>

              <Route element={<Suspense fallback={<Loading t={1} />}><PrivateRoutes Auth={Auth} /></Suspense>} >
                <Route path='/Home' element={<Suspense fallback={<Loading t={1} />}><Home /></Suspense>} />
                <Route path='/Profile/:user' element={<Suspense fallback={<Loading t={1} />}><Profile /></Suspense>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </>
  )
}

export default App
