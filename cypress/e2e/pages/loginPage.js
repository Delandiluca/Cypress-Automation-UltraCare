class loginPage {
   
    elements = {
        loginUserInput : () => cy.getDataCy('login_user-input'),
        loginPassInput : () => cy.getDataCy('login_password-input'),
        loginBtn : () => cy.getDataCy('login_btn-submit'),
        //Modal de seleção de UNIDADE
        selectUnit : () => cy.get('.sc-ZqFbI'),
        unitSelectBtn : () => cy.get('.sc-bjfHbI > .sc-csDkEv'),
    };

    login(){
        this.elements.loginUserInput().type(Cypress.env('userEmail'))
        this.elements.loginPassInput().type(Cypress.env('userPassword'))
    }

    clickOnSignIn(){
        this.elements.loginBtn().should('be.visible').focus().click()
    }


    clickOnSelectUnit(){
        this.elements.selectUnit().should('be.visible').focus().select('d9a58051-000a-4bac-a8bc-1f90e73b54d2').contains(Cypress.env('unit'))
        this.elements.unitSelectBtn().should('be.visible').focus().click()    
    }

    verifyRequest(){
        cy.intecept('POST', 'https://eks.ultracare.com.br/ris-api/v1/authenticate').as('getAuth')
    }
}

export default new loginPage();