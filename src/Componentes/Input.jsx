import React, { useContext,  } from 'react';
import {Globalcontext} from "../context/Globalcontext"



const Input = ({datos}) => {

    const {filtar , setFiltrar} = useContext(Globalcontext)

    const handleoChange = (e) => {
         const datosValue = e.target.value;
         setFiltrar(datosValue);
         datos(datosValue)
      };
    



    return (
        <div>
        <input type="text" 
        placeholder='FILTRAR'
        value={filtar}
        onChange={handleoChange} />

        </div>

    );
}

export default Input;