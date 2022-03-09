/// <reference types="cypress" />

import IntegrationsPageElement from '../pageelements/IntegrationsPageElement';

export default class IntegrationsPageActions {
  constructor() {
    globalThis.integrationselement = new IntegrationsPageElement();
  }

  navigateToURL() {
    cy.visit('/');
  }

  validateTitle() {
    return cy.title();
  }

  integrationMenu() {
    integrationselement.integrationsMenuLink().click();
  }

  gatewayNavList() {
    integrationselement.gatewaysNavLink().click();
  }

  httpList() {
    integrationselement.httpGatewayImg().click();
  }
}
