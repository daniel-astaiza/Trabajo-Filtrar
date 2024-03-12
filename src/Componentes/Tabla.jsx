import React from 'react';

const Tabla = ({personas}) => {
    return (
        <div>
             <table className="table border border-black ">
                <thead>
                    <tr className='table-dark'>
                        <td className="col border border-black  ">Id</td>
                        <td className="col border border-black">Nombre</td>
                        <td className="col border border-black">Apellido</td>
                        <td className="col border border-black">Descripcion</td>
                    </tr>
                </thead>
                <tbody className='border border-black'>
                        {personas.map((persona) => (
                        <tr key={persona.id}>
                            <td className='border border-black'>{persona.id}</td>
                            <td className='border border-black'>{persona.nombre}</td>
                            <td className='border border-black'>{persona.apellido}</td>
                            <td>{persona.descripcion}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );
}

export default Tabla;
