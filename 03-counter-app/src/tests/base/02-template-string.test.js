import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Test on file 02', () => {
    test('Test method getSaludo', () => {
        const name = 'Hasmael';
        const greeting = getSaludo( name );

        expect( greeting ).toBe( 'Hola ' + name );
    })

    test('Test method getSaludo with optionals parameters', () => {
        
        const name = 'Pew';
        const result = getSaludo();

        expect( getSaludo( name ) ).toBe( 'Hola ' + name );
        expect( getSaludo() ).toBe( 'Hola Real' );

    })
})