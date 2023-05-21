describe('Extended tests', () => {
    it('cypress test', () => {
      cy.visit('https://www.wikipedia.org/');
      cy.get('#searchInput').clear().type('Stranger in a Strange Land');
      cy.get("button[type='submit']").click();
  
      cy.get('h1#firstHeading').should('have.text', 'Stranger in a Strange Land')
    });
  
    it('selenium test', () => {
      cy.task('selenium','selenium-test');
    });

    it('playwright test', () => {
        cy.task('playwright','playwright-test');
      });
  });