import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes({ Auth, redirectPath = '/ManageTournaments' }) {
  if (!Auth) {
    console.log('U dont have permissions');
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}

export default PrivateRoutes