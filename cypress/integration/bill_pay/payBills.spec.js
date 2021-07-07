/****
 * Scenario: Pay bills and discount from Account
 * given my account xxxx with available amount greather than $100
 * when I pay my bills of 75$ amount
 * then my available amount would decrease by 75$ amount
 * 
 *
*****/

import billPaymentFormPage from "../../support/page-objects/billPaymentFormPage"
import leftPanelMenuPage from "../../support/page-objects/leftPanelMenuPage"

describe('Pay bills and discount the amount from account', ()=>{
    beforeEach(()=>{
        cy.loginToApplication()
        cy.visit("/")
    })

    // #given my account xxxx with available amount greather than $100
    it('Should get an account that is greather than $100 and pay a bill of 75$', ()=>{
        leftPanelMenuPage.gotToAccountsOverview()
       
        cy.contains('tbody > tr', '$100.00').then(elem => {
            // expect account number td no to be undefined
            expect(elem[0].cells[0].innerText).not.to.be.undefined
            let accountNumber = elem[0].cells[0].innerText
            leftPanelMenuPage.goToBillPay()
            // #when I pay my bills of 75$ amount
            billPaymentFormPage.fillandSubmitPaymentForm("John Doe", "st. 5th avenue", "New York", "New York", "7000", "454563", "888", "888", "75", accountNumber)
        })
        
    })

    // # then my available amount would decrese by 75$ amount 
    it('should update the available amount of the account', ()=>{
        leftPanelMenuPage.gotToAccountsOverview()

        cy.get('#accountTable > tbody > tr').siblings().each(elem => {
            if(parseInt(elem[0].cells[2].innerText.slice(1,))===25){
                console.log(elem)
                cy.wrap(elem[0].cells[0].children[0]).click()
                cy.get('tr.ng-scope > :nth-child(2) > .ng-binding').should('contain', 'John Doe')
                cy.get('td#balance').should('have.text', '$25.00')
                cy.get('td#availableBalance').should('have.text', '$25.00')
                return false
            }
        })

    })
})