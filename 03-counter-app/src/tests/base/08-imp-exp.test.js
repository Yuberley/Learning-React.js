import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Test on file 08', () => {
    test('Should return a heroe by id', () => {

        const id = 1;
        const heroe = getHeroeById( id );
        const heroData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroData );
    })
    
    test('Should return undefined if hero is not found', () => {
    
        const id = 10;
        const heroe = getHeroeById( id );
        expect( heroe ).toBe( undefined );
    })

    test('Should return an array of DC heroes', () => {
        const owner = 'DC';
        const heros = getHeroesByOwner( owner );
        const result = heroes.filter( hero => hero.owner === owner );
        expect( heros ).toEqual( result );
    })

    test('Should return undefined if hero is not found', () => {
        const owner = 'Marvel';
        const heros = getHeroesByOwner( owner );
        const result = heroes.filter( hero => hero.owner === owner );
        expect( heros.length ).toBe( result.length );
    })
})
    