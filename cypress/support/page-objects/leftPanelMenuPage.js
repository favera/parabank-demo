export default class leftPanelMenuPage{
    static gotToOpenNewAccount(){
        cy.contains('ul > li', 'Open New Account').click()
        cy.url().should('include', 'openaccount')
    }

    static gotToAccountsOverview(){
        cy.contains('ul > li', 'Accounts Overview').click()
        cy.url().should('include', 'overview')
    }

    static goToTransferFunds(){
        cy.contains('ul > li', 'Transfer Funds').click()
        cy.url().should('include', 'transfer')
    }

    static goToBillPay(){
        cy.contains('ul>li', 'Bill Pay').click()
        cy.url().should('include', 'billpay')
    }

    static goToFindTransactions(){
        cy.contains('ul>li', 'Find Transactions').click()
        cy.url().should('include', 'findtrans')
    }

    static goToUpdateContactInfo(){
        cy.contains('ul>li', 'Update Contact Info').click()
        cy.url().should('include', 'updateprofile')
    }

    static goToRequestLoan(){
        cy.contains('ul > li', 'Request Loan').click()
        cy.url().should('include', 'requestloan')
    }

    static logOut(){
        cy.contains('ul > li', 'Log Out').click()
        cy.get('div#headerPanel').should('have.css', 'background-image', 'https://parabank.parasoft.com/parabank/images/header-main.jpg')
    }

}