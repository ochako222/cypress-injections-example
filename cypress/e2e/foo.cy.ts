describe('foo test', () => {
    it('ff', () => {
        cy.visit('https://en.wikipedia.org/wiki/Stranger_in_a_Strange_Land');

        cy.task('selenium');
    });
});
