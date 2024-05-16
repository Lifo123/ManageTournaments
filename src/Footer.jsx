import React, { useContext } from 'react'
import { Context } from './App'
import Buttonn from './Buttonn'

function Footer() {
    const [Auth, setAuth] = useContext(Context)
  return (
    <div style={{width: '50%', margin:"auto"}}>
        {Auth ? 'Existe: ' : 'Error: '} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum labore nam et autem sed numquam, aliquid eaque eveniet obcaecati pariatur qui in assumenda eius excepturi dolore a maxime possimus.
        <Buttonn />
    </div>
  )
}

export default Footer