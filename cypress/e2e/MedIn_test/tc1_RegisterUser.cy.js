/// <reference types="cypress" />
import '../../support/commands.js'

describe('Test Case 1: Register User', () => {
  beforeEach('Navigate to test url',() => {
      //Test to not reload every time URL, by checking if URL already contains automationexercise.com
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
      //cy.get('a').contains('Signup / Login').click();
      cy.clickOnLinkText('Signup / Login');
    })    
  
    it('Verify New User Signup! is visible', () => {     
      //cy.contains('New User Signup!', { timeout: 10000 }).should('be.visible');
      cy.checkTextVisibility('New User Signup!');
    })

    it('Enter name and email address', () => {     
      //Fill my name and verify if entered value is correct  
      //cy.get("input[data-qa='signup-name']").type("Erik");
      //cy.get("input[data-qa='signup-name']").should('have.value', 'Erik');
      cy.fillInputField("input[data-qa='signup-name']", "Erik");
      
      //Fill test email and verify if entered value is correct 
      //cy.get("input[data-qa='signup-email']").type("POC_test@test.com");    
      //cy.get("input[data-qa='signup-email']").should('have.value', 'POC_test@test.com');
      cy.fillInputField("input[data-qa='signup-email']", "POC_test@test.com");
    })
    
    it('Click on Signup/Login button', () => {     
      //cy.get("form[action='/signup']").contains('Signup').click();
      cy.clickOnButtonText('Signup');
    })

    it('Verify that ENTER ACCOUNT INFORMATION is visible', () => {     
      //Check the value of my name
      cy.get("form").get("input[id='name']")
      .invoke('attr', 'value')      
      .should('eq', 'Erik');

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
      //cy.get("#days").select('1').should('have.value', '1');
      //cy.get("#months").select('12').should('have.value', '12');
      //cy.get("#years").select('1990').should('have.value', '1990');
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

      //Fill Laste name
      //Fill Company
      //Fill Address
      //Fill Address2
      //Fill State
      //Fill City
      //Fill Zipcode
      //Fill Mobile Number  
    })

    it('Click Create Account button', () => {     
      
    })

    it('Verify that ACCOUNT CREATED! is visible', () => {     
      
    })

    it('Click Continue button', () => {     
      
    })

    it('Verify that Logged in as username is visible', () => {     
      
    })

    it('Click Delete Account button', () => {     
      
    })

    it('Verify that ACCOUNT DELETED! is visible and click Continue button', () => {     
      
    })

  })
