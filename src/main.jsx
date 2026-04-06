import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Saludo} from './components/Saludo.jsx'
import { Contador } from './components/Contador.jsx'
import { Efecto } from './components/Efecto.jsx'
import { PerfilEstudiante } from './components/PerfilEstudiante.jsx'
import { CursosDisponibles } from './components/CursosDisponibles.jsx'
import { RegistroInteracciones } from './components/RegistroInteracciones.jsx'
import { BusquedaUsuarios } from './components/BusquedaUsuarios.jsx'
import { RegistroAcceso } from './components/RegistroAcceso.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Saludo nombre="Iverson" apellido="Pérez"/ >
    <Contador/>
    <Efecto/>
    <PerfilEstudiante />
    <CursosDisponibles />
    <RegistroInteracciones />
    <BusquedaUsuarios />
    <RegistroAcceso />
  </StrictMode>,
)
