import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading/Loading";

// Lazy loaded components
const LandingPage = lazy(() => import("./Pages/LadingPage/LandingPage"));
const LogReg = lazy(() => import("./Pages/LoginRegister/LogReg"));
const PageNotFound = lazy(() => import("./Pages/PageNoFound/PageNotFound"));
const PrivateRoutes = lazy(() => import("./Pages/Private/PrivateRoutes"));
const Home = lazy(() => import('./Pages/Private/Home/Home'));
const Profile = lazy(() => import('./Pages/Private/Profile/Profile'));
const Game = lazy(() => import('./Pages/Private/Game/Game'))
const Tournament = lazy(() => import("./Pages/Private/Tournament/Tournament"));

const SuspenseWrapper = ({ children }) => (
    <Suspense fallback={<Loading t={1} />}>{children}</Suspense>
);

const AppRoutes = ({ Auth }) => {
    return (
        <Routes>
            <Route path='/' element={<SuspenseWrapper><LandingPage /></SuspenseWrapper>}></Route>
            <Route path='ManageTournaments'>
                <Route index element={<SuspenseWrapper><LandingPage /></SuspenseWrapper>} />
                <Route path="Login" element={<SuspenseWrapper><LogReg m={'Log'} /></SuspenseWrapper>} />
                <Route path="Register" element={<SuspenseWrapper><LogReg m={'Reg'} /></SuspenseWrapper>} />

                <Route element={<SuspenseWrapper><PrivateRoutes Auth={Auth} /></SuspenseWrapper>} >
                    <Route path='Home'>
                        <Route index element={<SuspenseWrapper><Home /></SuspenseWrapper>} />
                    </Route>
                    <Route path="Game" element={<SuspenseWrapper><Game /></SuspenseWrapper>} />
                    <Route path='Tournament'>
                        <Route path="View/:id" element={<SuspenseWrapper><Tournament /></SuspenseWrapper>} />
                    </Route>
                    <Route path='Profile/:user' element={<SuspenseWrapper><Profile /></SuspenseWrapper>} />
                </Route>
            </Route>
            <Route path="*" element={<SuspenseWrapper><PageNotFound /></SuspenseWrapper>} />
        </Routes>
    )
}

export default AppRoutes;