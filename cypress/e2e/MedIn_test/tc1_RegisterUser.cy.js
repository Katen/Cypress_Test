/// <reference types="cypress" />
import '../../support/commands.js'

describe('Test Case 1: Register User', () => {
  beforeEach('Navigate to test url',() => {
      //Try to not reload every time URL, by checking if URL already contains automationexercise.com
      cy.window().then(win => {
        if (!win.location.href.includes('automationexercise.com')) {
          cy.visit('https://automationexercise.com');
        }
      });
    })
  
    it('Verify that home page is visible successfully', () => {
        cy.get('a').contains('Home')
        .invoke('attr', 'style')
        .should('eq', 'color: orange;');
      })

    it('Click on Signup/Login button', () => {     
      cy.clickOnLinkText('Signup / Login');
    })    
  
    it('Verify New User Signup! is visible', () => {     
      cy.checkTextVisibility('New User Signup!');
    })

    it('Enter name and email address', () => {     
      cy.fillInputField("input[data-qa='signup-name']", "Test");
      cy.fillInputField("input[data-qa='signup-email']", "POC_test@test.com");
    })
    
    it('Click on Signup/Login button', () => {     
      cy.clickOnButtonWithText('Signup');
    })

    it('Verify that ENTER ACCOUNT INFORMATION is visible', () => {     
      //Check the value of my name
      cy.get("form").get("input[id='name']")
      .invoke('attr', 'value')      
      .should('eq', 'Test');

      //Check the value of my email
      cy.get("form").get("input[id='email']")
      .invoke('attr', 'value')      
      .should('eq', 'POC_test@test.com');
    })

    it('Fill details: Title, Name, Email, Password, Date of birth', () => {     
      //Click on radio button Mr
      cy.get("#id_gender1").click();
      //Fill password
      cy.get("#password").type("123456");
      //Chose birthday
      cy.selectFromDropDownList('#days', '1');
      cy.selectFromDropDownList('#months', '12');
      cy.selectFromDropDownList('#years', '1990');
    })

    it('Select checkbox Sign up for our newsletter!', () => {     
      cy.get("#newsletter").check();
    })

    it('Select checkbox Receive special offers from our partners!', () => { 
      cy.get("#optin").check();  
    })

    it('Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number', () => {   
      //Fill First name
      cy.fillInputField("#first_name", "John");
      //Fill Laste name
      cy.fillInputField("#last_name", "Shepard");
      //Fill Company
      cy.fillInputField("#company", "Normandy");
      //Fill Address
      cy.fillInputField("#address1", "Rue de la Citadel");
      //Fill Address2
      cy.fillInputField("#address2", "Normandy Platforme 3");   
      //Fill Country
      cy.selectFromDropDownList("#country", "Canada");
      //Fill State
      cy.fillInputField("#state", "Québec");
      //Fill City
      cy.fillInputField("#city", "Montreal");
      //Fill Zipcode
      cy.fillInputField("#zipcode", "11290");
      //Fill Mobile Number 
      cy.fillInputField("#mobile_number", "0102030405"); 
    })

    it('Click Create Account button', () => {     
      cy.clickOnButtonWithText('Create Account');
    })

    it('Verify that ACCOUNT CREATED! is visible', () => {     
      cy.checkTextVisibility('Account Created!');
    })

    it('Click Continue button', () => {     
      cy.clickOnLinkText('Continue');
    })

    it('Verify that Logged in as username is visible', () => {     
      var userName = "Test";
      cy.get('.navbar-nav > li:last').contains('Logged in as '+ userName).should('be.visible');
    })

    it('Click Delete Account button', () => {     
      cy.clickOnLinkText('Delete Account');
    })

    it('Verify that ACCOUNT DELETED! is visible and click Continue button', () => {     
      cy.checkTextVisibility('Account Deleted!');
      cy.clickOnLinkText('Continue');
    })

  })
