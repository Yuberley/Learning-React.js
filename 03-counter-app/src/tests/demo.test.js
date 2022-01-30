
describe('Test on file demo.test.js ', () => {
    test('Equals strings', () => {

        const messageOne = 'test message';
    
        const messageTwo = `test message`;
    
        expect(messageOne).toBe(messageTwo);
    
    })
})