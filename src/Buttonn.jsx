import React, { useContext } from 'react'
import { Context } from './App'

function Buttonn() {
    const [Auth , setAuth] = useContext(Context)

  return (
    <button>{Auth ? 'Logeado' : 'Iniciar Sesion'}</button>
  )
}

export default Buttonn