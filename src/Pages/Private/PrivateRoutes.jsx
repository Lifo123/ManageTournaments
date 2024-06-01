import { Navigate, Outlet } from 'react-router-dom'
import PageNotFound from '../PageNoFound/PageNotFound';

function PrivateRoutes({ Auth }) {
  if (!Auth) {
    console.log('U dont have permissions');
    return <Navigate to='/error' replace />
  }
  return <Outlet />
}

export default PrivateRoutes