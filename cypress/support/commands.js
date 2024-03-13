// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickOnLinkText', (text) => { 
    cy.get('a').contains(text).click();
 })

Cypress.Commands.add('clickOnButtonText', (button) => { 
cy.get('button').contains(button).click();
})

Cypress.Commands.add('checkTextVisibility', (text) => { 
    cy.contains(text, { timeout: 10000 }).should('be.visible');
})

Cypress.Commands.add('selectFromDropDownList', (locatorElement, valueToSelect) => { 
    cy.get(locatorElement).select(valueToSelect).should('have.value', valueToSelect);
})

/**
     * @description This function fill the input field using two arguments and verify if filled value is correct
     * @param {string} locatorElement - Locator element who gonna be used with functioon get(locatorElement)
     * @param {number} valueToFill - Value to fill in field
     */
Cypress.Commands.add('fillInputField', (locatorElement, valueToFill) => {    
    cy.get(locatorElement).type(valueToFill);
    cy.get(locatorElement).should('have.value', valueToFill);
})

