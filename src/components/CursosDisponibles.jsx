import { CursoCard } from './CursoCard.jsx'

export const CursosDisponibles = () => {
  const cursos = [
    { nombre: 'Programacion Web', docente: 'Ing. Maldonado', horario: '08:00 - 10:00' },
    { nombre: 'Base de Datos', docente: 'Lic. Saquic', horario: '10:00 - 12:00' },
    { nombre: 'Redes', docente: 'Ing. Iver', horario: '14:00 - 16:00' },
  ]
  

  return (
    <div>
      <h2>Caso 2: Cursos Disponibles</h2>
      {cursos.map((curso, index) => (
        <CursoCard
          key={index}
          nombre={curso.nombre}
          docente={curso.docente}
          horario={curso.horario}
        />
      ))}
    </div>
  )
}
