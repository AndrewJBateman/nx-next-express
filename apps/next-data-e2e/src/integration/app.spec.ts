describe('next-data', () => {
  beforeEach(() => cy.visit('/'));

  it('should display results of search', () => {
    cy.get('input').first().focus().type('bulb');
    cy.get('li').first().should('have.text', 'Bulbasaur');
    cy.get('body').screenshot();
  });
});