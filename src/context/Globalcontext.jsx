import { createContext, useState } from "react";
//el children nos dice que el app es el padre y los demas componentes son los hijos
export const Globalcontext = createContext()

const GlobalcontextProvider = ({children}) => {


    const [filtrar, setFiltrar] = useState("");


    return (
        <Globalcontext.Provider value={{
            filtrar, 
            setFiltrar
        }}>
            {children}
        </Globalcontext.Provider>
    );
}

export default GlobalcontextProvider;