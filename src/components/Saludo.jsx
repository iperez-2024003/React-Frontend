import React from 'react'

export const Saludo = (props) => {
  return (
    <div>
     <h1>Hola {props.nombre} {props.apellido} </h1>
    </div>
  )
}

export default Saludo
