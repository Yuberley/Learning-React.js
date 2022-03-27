import { returnArray } from "../../base-pruebas/07-deses-arr"

describe('Test on file 07 desestructure', () => {
    test('Should return an array with a string and a number', () => {

        const arr = returnArray();

        expect( arr ).toEqual( ['ABC', 123] );

    })
})