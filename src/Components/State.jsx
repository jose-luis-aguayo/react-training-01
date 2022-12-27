import { useState } from 'react'





export const Persona = () => {
    let datosPersona = {
        nombre: 'Jose',
        apellido: 'Aguilar',
        edad: 20,
    }

    const [ persona, setPersona ] = useState(datosPersona)

    const cambiarNobre = () => {
        setPersona({...datosPersona, nombre : 'luis'})
        //es necesario enviar datos de inicializacion

    }

    return (
        <>
            <h1>Nombre: {persona.nombre}</h1>
            <h1>Apellido: {persona.apellido}</h1>
            <h1>Edad: {persona.edad}</h1>
            <button onClick={cambiarNobre} >
                Cambiar nombre
            </button>
        </>
    )
}