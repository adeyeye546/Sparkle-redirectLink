describe('Redirection Link Test', () => {
    it('should redirect to the correct page', () => {
      // Define the URL of the page with the redirection link
      const initialPageUrl = 'https://www.sparkle.com';
  
      // Define the expected target URL after redirection
      const expectedTargetUrl = 'http://the-internet.herokuapp.com/status_codes';
  
      // Visit the initial page with the redirection link
      cy.visit(initialPageUrl);
  
      // Click the redirection link
      cy.get('a#redirect-links').click();
  
      // Assert that the current URL matches the expected target URL after redirection
      cy.url().should('eq', expectedTargetUrl);
    });
  });
  