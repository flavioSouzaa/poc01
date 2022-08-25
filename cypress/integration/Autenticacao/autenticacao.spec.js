describe('Realizar autenticação com falha', () => {
    BeforeEach( ( ) => {
        cy.visit('/')
    })

    it('autenticação com sucesso', () => {
        // cy.visit('/')
        cy.login()
        cy.verificaUsarioAutenticado()
    })
   
    it('autenticação Usuário invalido', () => {
        // cy.visit('/')
        cy.login('12345678912')
        cy.alartAutenticacaoComErro()
    })

    it('autenticação senha invalida', () => {
        // cy.visit('/')
        cy.login(Cypress.env('CPF'),'123456')
        cy.alartAutenticacaoComErro()
    })
})

