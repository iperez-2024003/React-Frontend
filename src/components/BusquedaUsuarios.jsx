import { useState } from 'react'

export const BusquedaUsuarios = () => {
  const [texto, setTexto] = useState('')

  return (
    <div>
      <h2>Caso 4: Busqueda Dinamica de Usuarios</h2>
      <input
        type="text"
        placeholder="Escribe un nombre de usuario"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Buscando: {texto}</p>
    </div>
  )
}
