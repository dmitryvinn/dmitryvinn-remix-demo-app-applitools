describe("Navigate from Home Page using Sidebar", () => {
    it('Navigate to About US page', () => {
        // Arrange
        cy.visit('http://localhost:3000/');
        
        // Act
        cy.get('a').contains('About Us').click();
        
        // Assert
        cy.url().should('include', '/about');
        cy.get('.about__intro h2').contains('About Us');
    });
})