Cypress.Commands.add('clicarItem', () => {
    cy.get('[class="mobile-margin first"]').should('be.visible')
    cy.get('[class="mobile-margin first"]').eq(0).click()
})

Cypress.Commands.add('AdicionaItemCarrinho', (
    item = Cypress.env("QtdItens")
) => {
    for (let i = 0; i < item; i++) {
        cy.get('[alt="Adicionar"]').should('be.visible')
        cy.get('[alt="Adicionar"]').first().click()
    }

    cy.get('[class="cart ng-star-inserted"]').should('be.visible')
    cy.get('[class="cart ng-star-inserted"]').click()
})

Cypress.Commands.add('verificaMsgItemInserido', () => {
    cy.get('span[class="span-message"]')
        .invoke('text')
        .should('be.equal', 'Item adicionado à cesta')
})

Cypress.Commands.add('clicaNoCarrinho', () => {
    cy.get('[alt="cesta panvel"]').should('be.visible')
    cy.get('[alt="cesta panvel"]').first().click()
})

Cypress.Commands.add('clicaFinalizarCompra', () => {
    cy.get('[class="finalize-purchase"]').should('be.visible')
    cy.get('[class="finalize-purchase"]').click()
})

Cypress.Commands.add('verificaValorCompra', () => {
    cy.get('div:nth-child(1) > div.main-value-content > span').invoke('text').then(precoUnitario => {

        const precoUnitarioReplace = precoUnitario.replace('R$', '').replace(',', '.')
        const precoUnitarioNumber = Number(precoUnitarioReplace).toFixed(2)
        const valorTotal = precoUnitarioNumber * (Cypress.env("QtdItens") + 1)
        const valorTotalString = valorTotal.toFixed(2)
        const valorTotalReplace = valorTotalString.replace('', 'R$ ').replace('.', ',')

        cy.get('span[class="main-div-total-price-span"]').should('have.text', valorTotalReplace)
    })
    // const converteValor = respostaFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    // cy.log(converteValor)
})

Cypress.Commands.add('msgCestaVazia', () => {
    cy.get('[class="cart-empty-title"]').should('be.visible')
    cy.get('[class="cart-empty-title"]').should('have.text', 'Você ainda não possui item na cesta!')
})

Cypress.Commands.add('limpaCarrinhoLixeira', () => {
    cy.get('[class="remove"]').click()

    cy.msgCestaVazia()    
})

Cypress.Commands.add('btnEsvaziarMinhaCesta', () => {
    cy.get('button[class="container"]').click()

    cy.msgCestaVazia()
})
