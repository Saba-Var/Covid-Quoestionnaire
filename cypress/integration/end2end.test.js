/// <reference types="cypress" />

describe('end2ent', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get("[dataTestId='start']").click();
    cy.url().should('include', 'Identification');
  });
  it('user stroy 1', () => {
    cy.beforeCovidPolicy();
    cy.contains('ამ ველის შევსება სავალდებულოა').should('not.exist');
    cy.get("[dataTestId='submit']").click();
    cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
    cy.get("[dataTestId='once_a_week']").click({ force: true });
    cy.get("[dataTestId='2']").click({ force: true });
    cy.contains('ამ ველის შევსება სავალდებულოა').should('not.exist');
    cy.get("[dataTestId='physicalGathering']").type('Sounds good');
    cy.get("[dataTestId='opinions']").type('I like everything');
    cy.get("[dataTestId='back']").click();
    cy.url().should('include', '/Vaccinated');
    cy.get("[dataTestId='first_dosage_and_not_registered_yet']").should(
      'be.checked'
    );
    cy.get("[dataTestId='yes']").should('be.checked');
    cy.contains('ამ ველის შევსება სავალდებულოა').should('not.exist');
    cy.nextPage('/Covid-Policy');
    cy.get("[dataTestId='opinions']").should('have.value', 'I like everything');
    cy.get("[dataTestId='physicalGathering']").should(
      'have.value',
      'Sounds good'
    );
    cy.intercept('POST', 'https://covid19.devtest.ge/api/*', {
      statusCode: 201,
    });
    cy.get("[dataTestId='submit']").click();
    cy.url().should('include', '/Thanks').wait(3000);

    cy.url().should('include', '/');
  });

  it('user stroy 2', () => {
    cy.beforeCovidPolicy();
    cy.get("[dataTestId='once_a_week']").click({ force: true });
    cy.get("[dataTestId='2']").click({ force: true });
    cy.intercept('POST', 'https://covid19.devtest.ge/api/*', {
      statusCode: 201,
    });
    cy.get("[dataTestId='submit']").click();
    cy.url().should('include', '/Thanks').wait(3000);
    cy.url().should('include', '/');
  });

  it('user stroy 3', () => {
    cy.beforeCovidPolicy();
    cy.backToCovidPage();
    cy.get("[dataTestId='true']").click();
    cy.get("[dataTestId='antibodyDate']").type('2020-02-02');
    cy.get("[dataTestId='antibodyCount']").type(120);
    cy.nextPage('/Vaccinated');
    cy.nextPage('/Covid-Policy');
    cy.intercept('POST', 'https://covid19.devtest.ge/api/*', {
      statusCode: 201,
    });
    cy.get("[dataTestId='submit']").click();
    cy.url().should('include', '/Thanks').wait(3000);
    cy.url().should('include', '/');
  });

  it('user stroy 4', () => {
    cy.beforeCovidPolicy();
    cy.backToCovidPage();
    cy.get("[dataTestId='false']").click();
    cy.get("[dataTestId='antibodyDate']").type('2020-02-02');
    cy.nextPage('/Vaccinated');
    cy.nextPage('/Covid-Policy');
    cy.intercept('POST', 'https://covid19.devtest.ge/api/*', {
      statusCode: 201,
    });
    cy.get("[dataTestId='submit']").click();
    cy.url().should('include', '/Thanks');
    cy.url().should('include', '/');
  });
});
