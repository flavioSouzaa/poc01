Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Cypress.Commands.add('login', (
    username = Cypress.env('CPF'),
    password = Cypress.env('PASSWORD')
) => {
    //cy.contains(' ENTRAR ').click()
    cy.get("[alt='icon-user']").click()

    cy.get('#input-usuario').type(username)
    cy.get('input[name="senha"]').type(password,{ log: false })

    cy.get('#login-form [type="submit"]').click()
})

Cypress.Commands.add('verificaUsarioAutenticado', () => {
    cy.get('span[class="span-hello-user ng-star-inserted"]')
    .invoke('text')
    .should('be.equal', 'OLÁ, FLAVIO')
})

Cypress.Commands.add('alartAutenticacaoComErro', () =>{
     cy.get('p[class="message__box-title"]')
     .invoke('text')
     .should('be.equal', 'AVISO')
   
     cy.get('p[class="message__box-content"]')
     .invoke('text')
     .should('be.equal', 'Usuário ou Senha inválidos')
    //p[class="message__box-title"]
   //p[class="message__box-content"]
})