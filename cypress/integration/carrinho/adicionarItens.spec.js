describe('Validar o fluxo de inserção de itens no carrinho', () => {
    
    beforeEach(() => {
        cy.visit('/', {timeout: 30000})
    })
    
    it('adicionando item no carrinho', () =>{        
        // cy.login()
        // cy.verificaUsarioAutenticado()
        cy.clicarItem()
        cy.AdicionaItemCarrinho()
        cy.verificaMsgItemInserido()
    })

    it('verifica itens adicionado no carrinho', () => {
        // cy.login()
        // cy.verificaUsarioAutenticado()
        cy.clicarItem()        
        cy.AdicionaItemCarrinho()
        cy.verificaMsgItemInserido()
        cy.clicaNoCarrinho()
        cy.clicaFinalizarCompra()
        cy.verificaValorCompra()
    })

    it('limpa carrinho pela lixeira', () => {
        cy.clicarItem()        
        cy.AdicionaItemCarrinho()
        cy.verificaMsgItemInserido()
        cy.clicaNoCarrinho()
        cy.clicaFinalizarCompra()
        cy.limpaCarrinhoLixeira()
    })

    it('limpa carrinho pelo botão esvaziar minha cesta', () => {
        cy.clicarItem()        
        cy.AdicionaItemCarrinho()
        cy.verificaMsgItemInserido()
        cy.clicaNoCarrinho()
        cy.clicaFinalizarCompra()
        cy.btnEsvaziarMinhaCesta()
    })
})