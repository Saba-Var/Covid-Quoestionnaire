/// <reference types="cypress" />

describe('Starting page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('user can go to the next page when click start button', () => {
    cy.get("[dataTestId='mainLogo']").should('be.visible');
    cy.get("[dataTestId='RedberryLogo']").should('be.visible');
    cy.get("[dataTestId='start']").click();
    cy.url().should('include', 'Identification');
  });
  it('when hover over the start button we should see different svg', () => {
    cy.get("[dataTestId='startSvg']").trigger('mouseover');
    cy.get("[dataTestId='startHover']").should('exist');
    cy.get("[dataTestId='start']").should('not.exist');
    cy.get("[dataTestId='startSvg']").trigger('mouseout');
    cy.get("[dataTestId='start']").should('be.visible');
  });
});
