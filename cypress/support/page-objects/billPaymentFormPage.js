export default class billPaymentFormPage{

    static fillandSubmitPaymentForm(payeeName, address, city, state, zipCode, phone, account, verifyAccount, amount, selectOption){
        cy.get('input[ng-model="payee.name"]').type(payeeName)
        cy.get('input[name="payee.address.street"]').type(address)
        cy.get('input[name="payee.address.city"]').type(city)
        cy.get('input[name="payee.address.state"]').type(state)
        cy.get('input[name="payee.address.zipCode"]').type(zipCode)
        cy.get('input[name="payee.phoneNumber"]').type(phone)
        cy.get('input[name="payee.accountNumber"]').type(account)
        cy.get('input[name="verifyAccount"]').type(verifyAccount)
        cy.get('input[name="amount"]').type(amount)
        cy.get('[name=fromAccountId]').select(selectOption)
        //Clikc submit button and verify sucessfull transaction
        cy.get('input[value="Send Payment"]').click()
        cy.get('div[ng-show="showResult"]').should('contain', 'successful')    
    }
    
}