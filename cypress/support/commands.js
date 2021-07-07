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

import leftPanelMenuPage from "./page-objects/leftPanelMenuPage"

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginToApplication', ()=> {
    //visual login
    // cy.visit('/')
    // cy.get('input[name="username"]').clear().type(Cypress.env('username'))
    // cy.get('input[name="password"]').clear().type(Cypress.env('password'))
    // cy.get('input.button[value="Log In"]').click()
    // cy.contains('Accounts Overview').should("be.visible")

    //login by request, the application don't have token
    cy.request({
        method: 'POST',
        url: 'login.htm',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        form: true,
        body:{'username': 'john', 'password': 'demo'}
    })
})