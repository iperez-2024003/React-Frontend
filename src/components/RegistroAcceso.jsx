import { useEffect } from 'react'

export const RegistroAcceso = () => {
  useEffect(() => {
    console.log('Caso 5: Usuario ingreso al sistema')
  }, [])

  return (
    <div>
      <h2>Caso 5: Registro de Acceso</h2>
      <p>Revisa la consola del navegador para ver el registro de acceso.</p>
    </div>
  )
}
