Cypress.Commands.add('onlyLetters', () => {
  cy.contains('სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს').should(
    'be.visible'
  );
  cy.contains('გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს').should(
    'be.visible'
  );
});

Cypress.Commands.add('minLength', () => {
  cy.contains('სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან').should(
    'be.visible'
  );
  cy.contains('გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან').should(
    'be.visible'
  );
});

Cypress.Commands.add('identificationFill', () => {
  cy.get("[dataTestId='firstName']").type('Saba', { delay: 50 });
  cy.get("[dataTestId='lastName']").type('Vartasashvili', { delay: 50 });
  cy.get("[dataTestId='email']").type('sabavar@redberry.ge', { delay: 50 });
  cy.get("[dataTestId='next']").click();
  cy.url().should('contain', '/Covid');
});

Cypress.Commands.add('hadCovidYes', () => {
  cy.get("[dataTestId='yes']").click();
  cy.contains('ანტისხეულების ტესტი გაქვს გაკეთებული?*').should('be.visible');
});

Cypress.Commands.add('antibodySelectErr', () => {
  cy.get("[dataTestId='btn']").click();
  cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
});

Cypress.Commands.add('vaccinatedNotRegistered', () => {
  cy.get("[dataTestId='yes']").click();
  cy.get("[dataTestId='first_dosage_and_not_registered_yet']").click();
  cy.get("[dataTestId='notRegistered']").should('be.visible');
});

Cypress.Commands.add('policyRadios', () => {
  cy.get("[dataTestId='submit']").click();
  cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible', {
    multiple: true,
  });
});

Cypress.Commands.add('nextPage', (url) => {
  cy.get("[dataTestId='next']").click();
  cy.contains('ამ ველის შევსება სავალდებულოა').should('not.exist');
  cy.url().should('include', url);
});

Cypress.Commands.add('backToCovidPage', () => {
  cy.get("[dataTestId='once_a_week']").click({ force: true });
  cy.get("[dataTestId='2']").click({ force: true });
  cy.get("[dataTestId='back']").click();
  cy.get("[dataTestId='back']").click();
});

Cypress.Commands.add('beforeCovidPolicy', () => {
  cy.identificationFill();
  cy.url().should('include', '/Covid');
  cy.contains('ამ ველის შევსება სავალდებულოა').should('not.exist');
  cy.get("[dataTestId='no']").click();
  cy.get("[dataTestId='btn']").should('not.exist');
  cy.nextPage('/Vaccinated');
  cy.get("[dataTestId='btn']").click();
  cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
  cy.get("[dataTestId='yes']").click();
  cy.contains('აირჩიე რა ეტაპზე ხარ?*').should('be.visible');
  cy.get("[dataTestId='next']").should('not.exist');
  cy.antibodySelectErr();
  cy.get("[dataTestId='first_dosage_and_not_registered_yet']").click();
  cy.contains('ამ ველის შევსება სავალდებულოა').should('not.exist');
  cy.get("[dataTestId='back']").click();
  cy.get("[dataTestId='no']").should('be.checked');
  cy.url().should('include', '/Covid');
  cy.get("[dataTestId='back']").click();
  cy.url().should('include', '/Identification');
  cy.get("[dataTestId='firstName']").should('have.value', 'Saba', {
    delay: 50,
  });

  cy.get("[dataTestId='lastName']").should('have.value', 'Vartasashvili', {
    delay: 50,
  });

  cy.get("[dataTestId='email']").should('have.value', 'sabavar@redberry.ge', {
    delay: 50,
  });

  cy.contains('ამ ველის შევსება სავალდებულოა').should('not.exist');
  cy.nextPage('/Covid');
  cy.get("[dataTestId='yes']").click();
  cy.get("[dataTestId='btn']").click();
  cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
  cy.get("[dataTestId='false']").click();
  cy.get("[dataTestId='next']").should('not.exist');
  cy.get("[dataTestId='btn']").click();
  cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible');
  cy.get("[dataTestId='antibodyDate']").type('2020-12-31');
  cy.contains('ამ ველის შევსება სავალდებულოა').should('not.exist');
  cy.nextPage('/Vaccinated');
  cy.nextPage('/Covid-Policy');
  cy.get("[dataTestId='back']").click();
  cy.get("[dataTestId='yes']").should('be.checked');
  cy.get("[dataTestId='first_dosage_and_not_registered_yet']").should(
    'be.checked'
  );
  cy.nextPage('/Covid-Policy');
});

Cypress.Commands.add('goToCovidPage', () => {
  cy.visit('/Identification');
  cy.get("[dataTestId='firstName']").type('Saba', { delay: 50 });
  cy.get("[dataTestId='lastName']").type('Vartasashvili', { delay: 50 });
  cy.get("[dataTestId='email']").type('sabavar@redberry.ge', { delay: 50 });
  cy.get("[dataTestId='next']").click();
});

Cypress.Commands.add('goToVaccinatedPage', () => {
  cy.get("[dataTestId='have_right_now']").click();
  cy.get("[dataTestId='next']").click();
});

Cypress.Commands.add('goToCovidPolicyPage', () => {
  cy.get("[dataTestId='no']").click();
  cy.get("[dataTestId='not_planning']").click();
  cy.get("[dataTestId='next']").click();
});
