import { getImagen } from "../../base-pruebas/11-async-await"


describe('Test with async-await and fetch', () => {

    test('should return an url of images', async () => {

        const url = await getImagen();

        expect( typeof url ).toBe( 'string' );

    })



})