import { getSaludo } from '../js-only/02-template-strings'

describe('Pruebas en 02-template-strings', () => {

    test('getSaludo debe retornar "Hola Jose"', () => {
        const name = 'Jose'
        const message = getSaludo(name)
    })

})