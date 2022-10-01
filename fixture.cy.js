/// <reference types="cypress" />

describe('working with inputs' , () => {
        it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com')
            });

        it('Should Fill Username', () => {
            cy.get('#user-name').clear()
            cy.get('#user-name').type('username')
            });
        
        it('Should Fill Password', () => {
            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type('password')
            });

        it('Should Try to Login', () => {
            cy.fixture("user").then(user =>{
                const username = user.username
                const password = user.password

                cy.get('#user-name').clear()
                cy.get('#user-name').type(username)
    
                cy.get('input[name="password"]').clear()
                cy.get('input[name="password"]').type(password)
    
                cy.get('input[name="login-button"]').click()
                });
            });
        it('Should Try to Checkout',() => {
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get(".shopping_cart_link").click()
            cy.get('#checkout').click()
            cy.get('input[name="firstName"]').type('antonius')
            cy.get('input[name="lastName"]').type('brian')
            cy.get('input[name="postalCode"]').type('16124')
            cy.get('#continue').click()
            cy.get('#finish').click()
            });
    });
