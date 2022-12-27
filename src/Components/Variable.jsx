const nombre = "Jose Luis"

const persona = {
    nombre: 'Jose',
    apellido: 'Aguayo',
}

function getNombre(persona) {
    return persona.nombre
}

export function Component1() {
    return (
        <div>{getNombre(persona)}</div>
    )
}