/// <reference types="cypress" />

import IntegrationsPageActions from '../../pageojects/pageactions/IntegrationsPageActions';

describe('Navigate Integrations HTTP Gateway', () => {
  const integationsPage = new IntegrationsPageActions();

  before(() => {
    integationsPage.navigateToURL();
  });
  it('Validate Title of the Page', () => {
    integationsPage.validateTitle().should('eq', 'Reekoh');
  });
  it('Verify navigating Integrations Menu', () => {
    integationsPage.integrationMenu();
    cy.wait(5000);
  });
  it('Verify clicking Gateways Nav', () => {
    integationsPage.gatewayNavList();
  });
  it('Verify HTTP Gateway Listed in Integrations Gateways', () => {
    integationsPage.httpList();
  });
});
