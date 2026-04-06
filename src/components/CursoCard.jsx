export const CursoCard = ({ nombre, docente, horario }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Docente: {docente}</p>
      <p>Horario: {horario}</p>
    </div>
  )
}
