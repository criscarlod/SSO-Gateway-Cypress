/// <reference types="cypress" />


import LoginPageElements from "../pageelements/LoginPageElements";

export default class LoginPageActions {


    constructor() {

        globalThis.loginelement = new LoginPageElements();
    }


    navigateToURL() {

        cy.visit('/');
    }

    validateTitle(){

        return cy.title();
    }

    enterEmailAdd(){

        loginelement.emailAddInputField().type('qa@pegasus.net.au');

    }

    tapContinueBtn(){

        loginelement.continueLoginBtn().click();

    }

    enterPassword(){

        loginelement.passwordInputField().type('QAteamPassword1');

    }

    tapSignInBtn(){

        loginelement.signInLoginBtn().click();

    }





}