describe('Extended tests', () => {
    it('playwright test', () => {
        cy.task('playwright');
    });

    it('selenium test', () => {
        cy.task('selenium');
    });
});
