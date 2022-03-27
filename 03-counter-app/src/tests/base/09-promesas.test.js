import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";


describe('Test promises', () => {
    test('should return a hero async', ( done ) => {
        
        const id = 2;

        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[1] );
                done();
            })

    });

    test('should return a error if no hero is found', ( done ) => {

        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done();
            })

    });


})