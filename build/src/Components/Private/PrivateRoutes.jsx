import { Navigate, Outlet } from "react-router-dom"

function PrivateRoutes({ isAuth, redirectPath = '/'}) {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace/>
  }
  return <Outlet />
}

export default PrivateRoutes