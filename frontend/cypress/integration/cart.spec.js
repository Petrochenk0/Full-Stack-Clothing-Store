/// <reference types="cypress" />

describe('Cart Page', () => {
  it('should display products in the cart', () => {
    cy.visit('/cart');
    cy.contains('Products').should('be.visible');
  });
});
