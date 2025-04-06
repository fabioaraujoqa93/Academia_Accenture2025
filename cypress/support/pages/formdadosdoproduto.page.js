import { faker } from '@faker-js/faker'

//dados do produto
const INPUT_STARTDATE = '#startdate'
const INPUT_SUNSEGURO = '#insurancesum'
const INPUT_MERIT = '#meritrating'
const INPUT_INSURANCE = '#damageinsurance'
const CHECK_PRODUCTS = '#EuroProtection'
const INPUT_COURTESY = '#courtesycar'

//botão de próximo
const BTN_NEXTER3 = '#nextselectpriceoption'

//validacao da pagina
const VAL_PRODUCT = '#enterproductdata'




Cypress.Commands.add('dadosDoProduto', () => {
    cy.get(VAL_PRODUCT).should('be.visible') // VALIDAÇÃO QUE ESTA NA PAGINA CERTA
    cy.log('✅ Aba Dados do Produto - Validado com sucesso')
    cy.get(INPUT_STARTDATE).type(faker.date.future(2, '2026-04-05').toLocaleDateString('en-US'));
    cy.get(INPUT_SUNSEGURO).select(Math.floor(Math.random() * 9) + 1)
    cy.get(INPUT_MERIT).select(Math.floor(Math.random() * 18) + 1)
    cy.get(INPUT_INSURANCE).select(Math.floor(Math.random() * 3) + 1)
    cy.get(CHECK_PRODUCTS).click({force: true})
    cy.get(INPUT_COURTESY).select(Math.floor(Math.random() * 2) + 1)

    cy.get(BTN_NEXTER3).click()

})
