//opção de preço
const RADIO_PRICE = '#selectplatinum'

//botão de próximo
const BTN_NEXT4 = '#nextsendquote'

//validacao
const VAL_PRICE = '#selectpriceoption'


Cypress.Commands.add('opçãoDePreço', () => {
    cy.get(VAL_PRICE).should('be.visible') // VALIDAÇÃO QUE ESTA NA PAGINA CERTA
    cy.log('✅ Aba Opção de Preço - Validado com sucesso')
    cy.get(RADIO_PRICE).click({force: true})
    cy.get(BTN_NEXT4).click()

})

Cypress.Commands.add('planoInvalido', () => {
    cy.get(BTN_NEXT4).should('not.be.visible')
    cy.log('❌ - Por favor, complete os três primeiros passos para ver a tabela de preços.')
})
