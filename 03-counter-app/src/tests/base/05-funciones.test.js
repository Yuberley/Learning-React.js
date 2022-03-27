import { getUser, getUserActive } from "../../base-pruebas/05-funciones"

describe('Test on file 05 functions', () => {
    test('Should return an object', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect( user ).toEqual( userTest );

    })

    test('Should return an object with parameters', () => {
        const username = 'K'
        const user = {
            uid: 'ABC567',
            username: username
        }

        expect( getUserActive( username ) ).toEqual( user );
    })
})