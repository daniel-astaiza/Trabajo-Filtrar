import { useState, useContext } from 'react'
import './App.css'
import Input from "./Componentes/Input"
import Tabla from "./Componentes/Tabla"
import { Globalcontext } from './context/Globalcontext';

function App() {

  const { filtrar, setFiltrar } = useContext(Globalcontext)

  const Personas = [
    {id:"1", nombre:"daniel", apellido:"acevedo", descripcion:"sml"},
    {id:"2", nombre:"ana", apellido:"sánchez", descripcion:"come sushi"},
    {id:"3", nombre:"juan", apellido:"gómez", descripcion:"colecciona sellos"},
    {id:"4", nombre:"maría", apellido:"rodríguez", descripcion:"escribe poesía"},
    {id:"5", nombre:"laura", apellido:"martínez", descripcion:"es de asdo"}

];

  const datos = (datosValue) =>{
    setFiltrar(datosValue)
  }


//  // aqui se filtran las personas dependiendo el valor del input
  const pf= Personas.filter(persona =>
    persona.id.includes(filtrar)  ||
    persona.nombre.toLowerCase().includes(filtrar.toLowerCase()) || 
    persona.apellido.toLowerCase().includes(filtrar.toLowerCase()) ||
    persona.descripcion.toLowerCase().includes(filtrar.toLowerCase()) 
  );

  return (
    <div className='d-flex align-items-center flex-column p-4'>
      <Input datos={datos}></Input>
      <Tabla personas={pf}></Tabla>
    </div>
  );
}

export default App;


