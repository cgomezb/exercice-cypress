describe("My first test", () => {
  it('visits the kitchen sink', () => {
    const urlSite = 'https://example.cypress.io';
    const urlActionCommand = '/commands/actions';
    const emailFieldId = '#email1';
    const emailFieldValue = 'fake@email.com';

    cy.visit(urlSite);
    
    cy.contains('type').click();

    cy.url()
      .should('include', urlActionCommand);

    cy.get(emailFieldId)
      .type(emailFieldValue)
      .should('have.value', emailFieldValue);
  });
});
