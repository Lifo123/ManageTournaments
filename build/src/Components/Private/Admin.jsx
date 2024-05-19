import React, { useContext } from 'react'
import { Context } from '../../App'

function Admin() {
  const [Auth, setAuth] = useContext(Context)


  //Functions
  const HandleLogout = () => {
    console.log('Sesión Cerrada Cambios pe');
    localStorage.setItem('Auth', false);
    setAuth(false);
  }


  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <p>Usuario {Auth ? 'Validado' : 'Denegado'}</p>
        <button onClick={HandleLogout}>Change</button>
      </div>
    </div>
  )
}

export default Admin