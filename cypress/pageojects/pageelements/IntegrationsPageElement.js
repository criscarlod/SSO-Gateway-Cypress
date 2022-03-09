/// <reference types="cypress" />

export default class IntegrationsPageElement {
  integrationsMenuLink() {
    return cy.get('#menu-item-4210 > a');
  }

  gatewaysNavLink() {
    return cy.get('.nav > :nth-child(4) > a');
  }
  s;
  httpGatewayImg() {
    return cy.get(
      '.row-1 > :nth-child(3) > .plugin-container > .icon-plugin > img'
    );
  }
}
