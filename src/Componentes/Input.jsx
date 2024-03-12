import {useContext} from 'react';
import { Globalcontext } from '../context/Globalcontext';

const Input = ({datos}) => {
    


    const { filtrar, setFiltrar } = useContext(Globalcontext)

    const handleFiltroChange = (e) => {
        const datosValue = e.target.value;
        setFiltrar(datosValue);
        datos(datosValue)
      };

    return (
        <div className='mb-3'>
        <input 
        type="text"
        placeholder='FILTRAR'
        value={filtrar}
        onChange={handleFiltroChange}
      />
        </div>
    );
}

export default Input;
