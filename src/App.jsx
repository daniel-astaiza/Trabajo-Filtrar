import { useState, useContext } from 'react'
import './App.css'
import Input from "./Componentes/Input"
import Tabla from "./Componentes/Tabla"
import { Globalcontext } from './context/Globalcontext'
import Select from './Componentes/Select'

function App() {

  

  const { filtrar, setFiltrar } = useContext(Globalcontext)
  const [Contador, setContador] = useState(5);

  const [Personas] = useState([
    {id:"1", nombre:"daniel", apellido:"acevedo", descripcion:"sml"},
    {id:"2", nombre:"ana", apellido:"sánchez", descripcion:"come sushi"},
    {id:"3", nombre:"juan", apellido:"gómez", descripcion:"colecciona sellos"},
    {id:"4", nombre:"maría", apellido:"rodríguez", descripcion:"escribe poesía"},
    {id:"5", nombre:"laura", apellido:"martínez", descripcion:"es de asdo"}, 
    { id: "6", nombre: "Carlos", apellido: "López", descripcion: "practica yoga" },
    { id: "7", nombre: "Sofía", apellido: "Hernández", descripcion: "tocaba el piano" },
    { id: "8", nombre: "Pablo", apellido: "Pérez", descripcion: "le gusta hacer senderismo" },
    { id: "9", nombre: "Luis", apellido: "García", descripcion: "juega al ajedrez" },
    { id: "10", nombre: "Elena", apellido: "Díaz", descripcion: "habla varios idiomas" },
    { id: "11", nombre: "Andrés", apellido: "Fernández", descripcion: "cocina platos italianos" },
    { id: "12", nombre: "Marta", apellido: "González", descripcion: "corre maratones" },
    { id: "13", nombre: "Diego", apellido: "Martínez", descripcion: "lee novelas de ciencia ficción" },
    { id: "14", nombre: "Lucía", apellido: "Sánchez", descripcion: "baila salsa" },
    { id: "15", nombre: "Alejandro", apellido: "López", descripcion: "pinta al óleo" },
    { id: "16", nombre: "Carolina", apellido: "Ruiz", descripcion: "practica surf" },
    { id: "17", nombre: "Manuel", apellido: "García", descripcion: "hace fotografía" },
    { id: "18", nombre: "Natalia", apellido: "Fernández", descripcion: "adora los gatos" },
    { id: "19", nombre: "Javier", apellido: "Serrano", descripcion: "toca la guitarra" },
    { id: "20", nombre: "Isabel", apellido: "Torres", descripcion: "hace esculturas en madera" }

  ]);

  const datos = (datosValue) =>{
    setFiltrar(datosValue)
  }

  const handleContadorChange = (e) => {
    setContador(Number(e.target.value));
  };

  const ContadorOpciones = [5, 10, 15, 20];


//  // aqui se filtran las personas dependiendo el valor del input
  const PF= Personas.filter(persona =>
    persona.id.includes(filtrar)  ||
    persona.nombre.toLowerCase().includes(filtrar.toLowerCase()) || 
    persona.apellido.toLowerCase().includes(filtrar.toLowerCase()) ||
    persona.descripcion.toLowerCase().includes(filtrar.toLowerCase()) 
  ).slice(0, Contador);
  



  return (
    <div className='d-flex align-items-center flex-column p-4'>
      <Input datos={datos}></Input>

      <p>REGISTRO DE PERSONAS</p>
      <select value={Contador} onChange={handleContadorChange}>
        {ContadorOpciones.map((opcion)=>(
          <option key={opcion}
          value={opcion}>
            {opcion}
          </option>

        ))}
 
      </select>
      
      <Tabla personas={PF}></Tabla>
      <Select
      todosRegistro={PF.length}
      totalPersonas={Personas.length}></Select>
    </div>
  );
}



export default App


