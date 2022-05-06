/// <reference types="cypress" />

describe('Vaccinated page', () => {
  beforeEach(() => {
    cy.goToCovidPage();
    cy.goToVaccinatedPage();
  });
  it('if user submits empty form', () => {
    cy.get("[dataTestId='btn']").click();
    cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
    cy.contains('აირჩიე რა ეტაპზე ხარ?*').should('not.exist');
    cy.contains('რას ელოდები?*').should('not.exist');
  });

  it('if user selects yes then we should see question about stage', () => {
    cy.get("[dataTestId='yes']").click();
    cy.contains('აირჩიე რა ეტაპზე ხარ?*').should('be.visible');
    cy.contains('რას ელოდები?*').should('not.exist');
  });
  it('if user selects no then we should see question about waiting', () => {
    cy.get("[dataTestId='no']").click();
    cy.contains('აირჩიე რა ეტაპზე ხარ?*').should('not.exist');
    cy.contains('რას ელოდები?*').should('be.visible');
  });
  it('if user answers first question about vaccinated and not the second one', () => {
    cy.get("[dataTestId='no']").click();
    cy.get("[dataTestId='next']").should('not.exist');
    cy.get("[dataTestId='btn']").click();
    cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
    cy.get("[dataTestId='no']").click();
    cy.get("[dataTestId='btn']").click();
    cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
  });
  it('if user answers first question about vaccinated and not the second one', () => {
    cy.get("[dataTestId='no']").click();
    cy.get("[dataTestId='next']").should('not.exist');
    cy.get("[dataTestId='btn']").click();
    cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
    cy.get("[dataTestId='no']").click();
    cy.get("[dataTestId='btn']").click();
    cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
  });
  it('if user not registered should see suggestion', () => {
    cy.get("[dataTestId='yes']").click();
    cy.get("[dataTestId='first_dosage_and_not_registered_yet']").click();
    cy.get("[dataTestId='notRegistered']").should('be.visible');
  });
  it('if user not planning vaccination should see suggestion', () => {
    cy.vaccinatedNotRegistered();
  });
  it('if user planning vaccination should see suggestion', () => {
    cy.get("[dataTestId='no']").click();
    cy.get("[dataTestId='had_covid_and_planning_to_be_vaccinated']").click();
    cy.get("[dataTestId='planning']").should('be.visible');
  });
  it('if user not planning vaccination should see suggestion', () => {
    cy.get("[dataTestId='no']").click();
    cy.get("[dataTestId='not_planning']").click();
    cy.get("[dataTestId='notPlan']").should('be.visible');
  });
  it('if user answers everything then move on the next page', () => {
    cy.vaccinatedNotRegistered();
    cy.get("[dataTestId='btn']").should('not.exist');
    cy.get("[dataTestId='next']").click();
    cy.url().should('include', '/Covid-Policy');
  });
});
