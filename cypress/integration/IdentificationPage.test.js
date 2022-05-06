/// <reference types="cypress" />

describe('Identification page', () => {
  beforeEach(() => {
    cy.visit('/Identification');
  });
  it('empty inputs show errors when user submits', () => {
    cy.get("[dataTestId='btn']").click();
    cy.minLength();
    cy.contains('თქვენ მიერ შეყვანილი მეილი არასწორია').should('be.visible');
  });
  it('when user inputs numbers on the first and last name inputs we can see error messages', () => {
    cy.get("[dataTestId='firstName']").type('Saba1', { delay: 50 });
    cy.get("[dataTestId='lastName']").type('Vartasashvili1', { delay: 50 });
    cy.get("[dataTestId='btn']").click();
    cy.onlyLetters();
  });
  it('when user inputs wrong email format we can see error messages', () => {
    cy.get("[dataTestId='email']").type('sabavar@gmail.com', { delay: 50 });
    cy.get("[dataTestId='btn']").click();
    cy.contains(
      'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
    ).should('be.visible');
  });

  it('when user submits empty form and then starts filling all the inputs can go to the next page', () => {
    cy.get("[dataTestId='btn']").click();
    cy.url().should('include', '/Identification');
    cy.minLength();
    cy.contains('თქვენ მიერ შეყვანილი მეილი არასწორია').should('be.visible');
    cy.identificationFill();
  });
});
