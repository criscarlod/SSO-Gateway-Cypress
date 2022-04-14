/// <reference types="cypress" />



const objectlocators = require("../../locators.json")

export default class LoginPageElements {

    emailAddInputField() {

        return cy.get(objectlocators.loginpage.emailAddInputField);
    }

    continueLoginBtn() {

        return cy.get(objectlocators.loginpage.continueLoginBtn);
    }

    passwordInputField() {

        return cy.get(objectlocators.loginpage.passwordInputField);
    }

    signInLoginBtn() {

        return cy.get(objectlocators.loginpage.signInLoginBtn);
    }


}