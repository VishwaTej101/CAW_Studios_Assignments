// Cypress command to read test data from the JSON file
Cypress.Commands.add('getTestData', () => {
    cy.fixture('test-data').then((data) => {
      Cypress.env('testData', data);
    });
  });
  
  describe('Orange HRM Login', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      // Calling the custom command to load test data
      cy.getTestData();
    });
  
    it('Should login with valid credentials', () => {
      const { validCredentials } = Cypress.env('testData');
  
      cy.get('input[placeholder="Username"]').type(validCredentials.username);
      cy.get('input[placeholder="Password"]').type(validCredentials.password);
      cy.get('button[type="submit"]').click();
  
      // Assert successful login
      cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('be.visible');
    });
  
    it('Should show an error message for invalid credentials', () => {
      const { invalidCredentials } = Cypress.env('testData');
  
      cy.get('input[placeholder="Username"]').type(invalidCredentials.username);
      cy.get('input[placeholder="Password"]').type(invalidCredentials.password);
      cy.get('button[type="submit"]').click();
  
      // Assert error message is displayed
      cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('be.visible')
        .should('have.text', 'Invalid credentials');
    });
  
  });
  