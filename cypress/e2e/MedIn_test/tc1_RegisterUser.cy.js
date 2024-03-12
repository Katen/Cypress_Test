/// <reference types="cypress" />

describe('Test Case 1: Register User', () => {
    beforeEach('Navigate to test url',() => {
      cy.visit('https://automationexercise.com')
    })
  
    it('Verify that home page is visible successfully', () => {
        cy.get('a')
        .contains('Home')
        .invoke('attr', 'style')
        .should('eq', 'color: orange;')
      })
  
  })