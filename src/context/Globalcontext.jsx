import {createContext , useState} from 'react';
export const Globalcontext = createContext();
//el children nos dice que el app es el padre y los demas componentes son los hijos
const GlobalcontextProvider = ({children}) => {

    const [filtar , setFiltrar] = useState("");
    return (
        <Globalcontext.Provider value={{
            filtar, 
            setFiltrar
        }}>
            {children}

        </Globalcontext.Provider>
    );
}

export default GlobalcontextProvider;
