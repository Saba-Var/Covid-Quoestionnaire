/// <reference types="cypress" />

describe('Covid page', () => {
  beforeEach(() => {
    cy.visit('/Covid');
  });

  it('if user had taken antibody test then should see another question', () => {
    cy.get("[dataTestId='yes']").click();
    cy.get("[dataTestId='true']").click();
    cy.get("[dataTestId='antibodyDate']").type('2020-12-22');
    cy.get("[dataTestId='antibodyCount']").type(65);
  });

  it("we can see question 'ანტისხეულების ტესტი გაქვს გაკეთებული?' if and only user selects yes in the first question", () => {
    cy.get("[dataTestId='yes']").click();
    cy.get("[dataTestId='no']").click();
    cy.get("[dataTestId='yes']").click();
    cy.contains('ანტისხეულების ტესტი გაქვს გაკეთებული?*').should('be.visible');
    cy.get("[dataTestId='no']").click();
    cy.contains('ანტისხეულების ტესტი გაქვს გაკეთებული?*').should('not.exist');
    cy.get("[dataTestId='have_right_now']").click();
    cy.contains('ანტისხეულების ტესტი გაქვს გაკეთებული?*').should('not.exist');
  });

  it('we can go to the next page if the user selects no in the first question', () => {
    cy.get("[dataTestId='no']").click();
    cy.get("[dataTestId='next']").click();
    cy.url().should('not.include', '/Covid');
  });

  it('we can go to the next page if the user selects have right now in the first question', () => {
    cy.get("[dataTestId='have_right_now']").click();
    cy.get("[dataTestId='next']").click();
    cy.url().should('not.include', '/Covid');
  });

  it('if the user selects yes in the first question we should see another question about stage', () => {
    cy.hadCovidYes();
  });

  it('if the user selects yes in the first question and then submits should show error', () => {
    cy.hadCovidYes();
    cy.get("[dataTestId='btn']").click();
    cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
  });

  it('if the user selects yes in the first question and then submits should show error', () => {
    cy.hadCovidYes();
    cy.get("[dataTestId='true']", { force: true }).click();
    cy.contains(
      'თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა'
    ).should('be.visible');
    cy.contains(
      'მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
    ).should('not.exist');
    cy.antibodySelectErr();
  });

  it('if the user selects no in the second question and then submits should show error', () => {
    cy.hadCovidYes();
    cy.get("[dataTestId='false']", { force: true }).click();
    cy.contains(
      'მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
    ).should('be.visible');
    cy.contains(
      'თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა'
    ).should('not.exist');
    cy.antibodySelectErr();
  });
});
