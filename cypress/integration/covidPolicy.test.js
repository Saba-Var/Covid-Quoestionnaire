/// <reference types="cypress" />

describe('Covid Policy page', () => {
  beforeEach(() => {
    cy.goToCovidPage();
    cy.goToVaccinatedPage();
    cy.goToCovidPolicyPage();
  });

  it('when user submits empty form', () => {
    cy.policyRadios();
  });
  it('when user checks radio buttons errors should disappear', () => {
    cy.policyRadios();
    cy.get("[dataTestId='twice_a_week']").click({ force: true });
    cy.get("[dataTestId='3']").click({ force: true });
    cy.contains('ამ ველის შევსება სავალდებულოა').should('not.exist');
  });
});
