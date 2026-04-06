export const PerfilEstudiante = () => {
  const estudiante = {
    nombre: 'Iverson',
    apellido: 'Perez',
    carrera: 'Ingenieria de Sistemas',
    edad: 22,
    carne: '2024003',
  }

  return (
    <div>
      <h2>Caso 1: Perfil de Estudiante</h2>
      <p>Nombre: {estudiante.nombre} {estudiante.apellido}</p>
      <p>Carrera: {estudiante.carrera}</p>
      <p>Edad: {estudiante.edad}</p>
      <p>Carne: {estudiante.carne}</p>
    </div>
  )
}
