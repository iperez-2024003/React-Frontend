import { useState } from 'react'

export const RegistroInteracciones = () => {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <h2>Caso 3: Registro de Interacciones</h2>
      <p>Interacciones: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  )
}
