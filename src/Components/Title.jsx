import PropTypes from 'prop-types'

export const Title = ({title}) => {

    if(!title){
        throw new Error('No existe el titulo')
    }

    return (
        <h1>{title}</h1>
    )
}

/* Nos sirven para definir un tipo de datos o indicar si 
   el campo es requerido. 
   esta caracteristica no es necesaria en typescript
*/

Title.propTypes = {
    title: PropTypes.string
}

/**
 * indica el valor por defalult que tomara un prop de no 
 * especificarlo en el componente padre
 */
Title.defaultProps = {
    title: 'No mandaron titulo'
}