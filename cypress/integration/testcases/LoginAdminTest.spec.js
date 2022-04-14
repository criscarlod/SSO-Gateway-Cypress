/// <reference types="cypress" />


import LoginPageActions from '../../pageobjects/pageactions/LoginPageActions';

describe("Login As SSO Admin", ()=>{

    const loginPage = new LoginPageActions();

    before(()=>{


        loginPage.navigateToURL();

    });

   it("Validate Title of the Page", ()=>{


        loginPage.validateTitle().should('eq','Pegasus Gateway Login - Pegasus Gateway');
    });

    it("Verify enter email address", ()=>{

        
        loginPage.enterEmailAdd();

    });

    it("Verify tap Continue button", ()=>{

        
        loginPage.tapContinueBtn();

    });

    it("Verify enter password", ()=>{

        
        loginPage.enterPassword();

    });

    it("Verify tap Sign In button", ()=>{

        
        loginPage.tapSignInBtn();
        //cy.wait(10000) -- running in headless homepage did not load

    });

});