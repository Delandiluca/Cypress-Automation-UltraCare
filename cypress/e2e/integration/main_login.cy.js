import loginPage from '../../e2e/pages/loginPage'

describe('Tests Login Positive Flux', () => {
    it('Access Page Login', () => {
        cy.visit(Cypress.env('baseUrl'))
        loginPage.login()
        loginPage.clickOnSignIn()
        loginPage.clickOnSelectUnit()
    })
})